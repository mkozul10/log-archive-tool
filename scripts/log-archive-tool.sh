# log-archive-tool-app
container_name=$1

if [ -z "$container_name" ]; then
    echo "Exiting script $0 parameter with container name is missing"
    exit 1
fi

container_id=$(docker ps | awk 'NR>1' | grep "$container_name" | awk '{print $1}')

if [ -z "$container_id" ]; then
    echo "Exiting script $0 container with name $container_name does not exists or it is not running"
    exit 1
fi

last_restart=$(docker inspect -f '{{ .State.StartedAt }}' $container_id)

if [ -z "$last_restart" ]; then
    echo "Failed to retrieve last restart time for container $container_name"
    exit 1
fi

timestamp=$(date +"%Y%m%d_%H%M%S")
filename="logfile_$timestamp.log"

docker logs --since "$last_restart" $container_id > $filename 2>&1 && \
tar --remove-files -czf "logs/$filename.tar.gz" $filename