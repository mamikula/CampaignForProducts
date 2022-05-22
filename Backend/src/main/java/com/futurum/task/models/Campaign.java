package com.futurum.task.models;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "Campaigns")
public class Campaign {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long campaignID;
    private String campaignName;
    private String keyWords;
    private int minAmount;
    private BigDecimal campaignFund;
    private boolean status = false;
    private String townName;
    private double radius;
}

