import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campaign } from '../classes/campaign';
import { Product } from '../classes/product';
@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private url = "http://localhost:8080/campaign"
  constructor(private httpClient : HttpClient) { }

  getAllCampaigns() : Observable<Campaign[]>{
    return this.httpClient.get<Campaign[]>(`${this.url}/allCampaigns`);
  }

  getCampaingByID(id: number) : Observable<Campaign>{
    return this.httpClient.get<Campaign>(`${this.url}/getCampaign?id=${id}`);
  }

  addCampaign(campaign : Campaign) : void{
    this.httpClient.post<Campaign>(`${this.url}/addCampaign`, campaign).subscribe();
  }

  updateCampaign(id : number, campaign : Campaign):Observable<Object>{
    return this.httpClient.put<Campaign>(`${this.url}/updateCampaign?id=${id}`, campaign);
  }

  deleteCampaing(id : number):void{
    this.httpClient.delete<Campaign>(`${this.url}/deleteCampaign?id=${id}`).subscribe();
  }

}
