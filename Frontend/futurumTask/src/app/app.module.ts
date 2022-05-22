import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampaignListComponent } from './modules/campaign-list/campaign-list.component';
import { NewCampaignComponent } from './modules/new-campaign/new-campaign.component';
import { CampaignService } from './services/campaign.service';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './modules/product-list/product-list.component';
import { NewProductComponent } from './modules/new-product/new-product.component';
import { UpdateProductComponent } from './modules/update-product/update-product.component';
import { UpdateCampaignComponent } from './modules/update-campaign/update-campaign.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './modules/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CampaignListComponent,
    NewCampaignComponent,
    ProductListComponent,
    NewProductComponent,
    UpdateProductComponent,
    UpdateCampaignComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CampaignService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
