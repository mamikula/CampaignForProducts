import { Campaign } from "./campaign";

export class Product {
    productID: number;
    productName: string;
    productPrice: number;
    campaign?: Campaign;
    
    constructor(productID : number, productName: string,
        productPrice: number, campaign? : Campaign){
        this.productID = productID;
        this.productName = productName;
        this.productPrice = productPrice;
        this.campaign = campaign;
    }

}
