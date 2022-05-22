package com.futurum.task.services;


import com.futurum.task.models.Campaign;
import com.futurum.task.repositories.CampaignRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;

@Service
public class CampaignService {

    private CampaignRepository campaignRepository;

    @Autowired
    public CampaignService(CampaignRepository campaignRepository){
        this.campaignRepository = campaignRepository;
    }

    public Iterable<Campaign> getcampaignsList(){
        return campaignRepository.findAll();
    }

    public Optional<Campaign> findCampaignByID(Long id){
        return campaignRepository.findById(id);
    }

    public Campaign addCampaign(Campaign campaign){
        return campaignRepository.save(campaign);
    }

    public void deleteCampaignByID(Long id){
        campaignRepository.deleteById(id);
    }

    public Campaign updateCampaign(Campaign newCampaign, Long id){
        newCampaign.setCampaignID(id);
        return campaignRepository.save(newCampaign);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void fillDataBase(){
        addCampaign(new Campaign(1L, "campaign1", "keywords1", 1000, new BigDecimal(10), true, "town1", 1));
        addCampaign(new Campaign(2L, "campaign2", "keywords2", 2000, new BigDecimal(20), true, "town2", 2));
    }

}
