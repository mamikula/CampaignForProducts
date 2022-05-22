package com.futurum.task.models;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "Products")
public class Product {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long productID;
    private String productName;
    private BigDecimal productPrice;

    @OneToOne
    @JoinColumn(name = "campaignID")
    Campaign campaign;

    public Product(Long productID, String productName, BigDecimal productPrice) {
        this.productID = productID;
        this.productName = productName;
        this.productPrice = productPrice;
    }
}
