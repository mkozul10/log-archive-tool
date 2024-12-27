import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, description: string, price: number){
        const newProduct = new Product(title, description, price);
        this.products.push(newProduct);
        return newProduct;
    }

    get getProducts(): Product[] {
        return this.products;
    }
}