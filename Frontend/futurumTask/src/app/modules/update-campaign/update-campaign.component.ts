import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/classes/campaign';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-update-campaign',
  templateUrl: './update-campaign.component.html',
  styleUrls: ['./update-campaign.component.css']
})
export class UpdateCampaignComponent implements OnInit {

  campaign: Campaign;
  id:number;

  constructor(private campaignService: CampaignService) { 
    this.campaign = history.state;
    this.id = this.campaign.campaignID;
  }

  ngOnInit(): void {
  }

  updateCampaign(){
    this.campaignService.updateCampaign(this.id, this.campaign).subscribe();
  }

}
