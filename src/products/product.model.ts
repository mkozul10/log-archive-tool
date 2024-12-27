import { v4 as uuidv4 } from 'uuid';

export class Product {

    private id: string;
    private title: string;
    private description: string;
    private price: number;

    constructor(title: string, description: string, price: number) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.price = price;
    }

    get getId(): string {
        return this.id;
    }

    get getTitle(): string {
        return this.title
    }

    set setTitle(value: string) {
        this.title = value;
    }

    get getDescription(): string {
        return this.description
    }

    set setDescription(value: string) {
        this.description = value;
    }

    get getPrice(): number {
        return this.price
    }

    set setPrice(value: number) {
        this.price = value;
    }
}