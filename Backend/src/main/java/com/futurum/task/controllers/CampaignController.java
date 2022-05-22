package com.futurum.task.controllers;

import com.futurum.task.models.Campaign;
import com.futurum.task.services.CampaignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;


@RestController
@RequestMapping("/campaign")
@CrossOrigin(origins = "http://localhost:4200")

public class CampaignController {
    private CampaignService campaignService;

    @Autowired
    public CampaignController(CampaignService campaignService) {
        this.campaignService = campaignService;
    }

    @GetMapping("/allCampaigns" )
    public Iterable<Campaign> getAllCampaigns(){
        return campaignService.getcampaignsList();
    }

    @GetMapping("/getCampaign" )
    public Optional<Campaign> getCampaingByID(@RequestParam Long id){
        return campaignService.findCampaignByID(id);
    }

    @PostMapping("/addCampaign" )
    public Campaign addCampaign(@RequestBody Campaign campaign){
        System.out.println(campaign);
        return campaignService.addCampaign(campaign);
    }

    @DeleteMapping("/deleteCampaign")
    public void deleteCampaign(@RequestParam Long id){
        campaignService.deleteCampaignByID(id);
    }

    @PutMapping("/updateCampaign")
    public Campaign updateCampaign(@RequestBody Campaign campaign, @RequestParam Long id){
        return campaignService.updateCampaign(campaign, id);
    }
}
