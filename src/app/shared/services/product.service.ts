import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Injectable()
export class ProductService
{
    private productsData:Product[];
    restUrl = "http://localhost:3000/wsproducts";
    constructor(private http:HttpClient) {
        //this.productsData=[new Product(1,"IFB Washing Machine",26000,"AWM"),
    //new Product(2,"LG",54000,"10 years warranty")];
        
    }
    getProducts()
    {
        //return this.productsData;
        return this.http.get<Product[]>(this.restUrl);
    }
    
}