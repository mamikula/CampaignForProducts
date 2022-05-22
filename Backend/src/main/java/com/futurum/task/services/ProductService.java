package com.futurum.task.services;


import com.futurum.task.models.Campaign;
import com.futurum.task.models.Product;
import com.futurum.task.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;

@Service
public class ProductService {

    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Iterable<Product> findAllProducts(){
        return productRepository.findAll();
    }

    public Optional<Product> findProductByID(Long id){
        return productRepository.findById(id);
    }

    public Product addProduct(Product product){
        return productRepository.save(product);
    }

    public void deleteProductByID(Long id){
        productRepository.deleteById(id);
    }

    public Product updateProduct(Product newProduct, Long id){
        newProduct.setProductID(id);
        return productRepository.save(newProduct);
    }

    public Product addCampaignToProduct(Long productID, Campaign campaign){
        Optional<Product> product = this.findProductByID(productID);
        product.get().setCampaign(campaign);
        campaign.setStatus(true);
        return productRepository.save(product.get());
    }

    @EventListener(ApplicationReadyEvent.class)
    public void fillDataBase(){
        addProduct(new Product(1L, "test1", new BigDecimal(10), new Campaign(1L, "campaign1", "keywords1", 1000, new BigDecimal(10), true, "town1", 1)));
        addProduct(new Product(2L, "test2", new BigDecimal(20)));
    }
}
