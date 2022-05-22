import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/classes/campaign';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaigns : Campaign[] = [];

  constructor(private campaignService : CampaignService) {}

  ngOnInit(): void {
    this.campaignService.getAllCampaigns().subscribe(data =>{
      this.campaigns = data;
    })
  }

  deleteCampaign(id : number){
    this.campaignService.deleteCampaing(id);
  }

  reloadCurrentPage() {
    window.location.reload();
   }

}
