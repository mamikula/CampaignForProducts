package com.futurum.task.controllers;


import com.futurum.task.models.Campaign;
import com.futurum.task.models.Product;
import com.futurum.task.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/allProducts")
    public Iterable<Product> getProducts(){
        return productService.findAllProducts();
    }

    @GetMapping("/getProduct")
    public Optional<Product> getProduct(@RequestParam Long id){
        return productService.findProductByID(id);
    }

    @PostMapping("/addProduct")
    public Product addProduct(@RequestBody Product product){
        System.out.println(product);
        return productService.addProduct(product);
    }

    @DeleteMapping("/deleteProduct")
    public void deleteProduct(@RequestParam Long id){
        productService.deleteProductByID(id);
    }

    @PutMapping("/updateProduct")
    public Product updateProduct(@RequestBody Product product, @RequestParam Long id){
        return productService.updateProduct(product, id);
    }

    @PostMapping("/addCampaignToProduct")
    public Product addCampaingToProduct( @RequestParam Long id, @RequestBody Campaign campaign){
        return productService.addCampaignToProduct(id, campaign);
    }

}
