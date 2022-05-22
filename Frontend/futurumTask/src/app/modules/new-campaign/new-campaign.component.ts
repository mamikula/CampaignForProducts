import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/classes/campaign';
import { CampaignService } from 'src/app/services/campaign.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.css']
})
export class NewCampaignComponent implements OnInit {
  campaign : Campaign;
  len: number = 0;

  constructor(private campaignService : CampaignService) { 
    this.campaignService.getAllCampaigns().forEach(a =>{
      this.len += 1;
    })
    this.campaign = new Campaign(this.len, "", "", 0, 0, false, "", 0)
  }

  ngOnInit(): void {

  }
  addCampaing(){
    this.campaignService.addCampaign(this.campaign);
  }

  onSubmit(){
    this.addCampaing();
  }

}
