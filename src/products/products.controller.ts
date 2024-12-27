import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductController {
    constructor(private readonly productsService: ProductsService){}

    @Post()
    /*addProduct(@Body() product: { title: string; description: string; price: number }): any {
        this.productsService.insertProduct(product);
    }*/
    addProduct(
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('price') price: number
        // @Query('title') title: string,
        // @Query('description') description: string,
        // @Query('price') price: number,
    ) {
        const product = this.productsService.insertProduct(title, description, price);
        return product;
        
    }
}