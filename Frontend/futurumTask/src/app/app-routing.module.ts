import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignListComponent } from './modules/campaign-list/campaign-list.component';
import { NewCampaignComponent } from './modules/new-campaign/new-campaign.component';
import { NewProductComponent } from './modules/new-product/new-product.component';
import { ProductListComponent } from './modules/product-list/product-list.component';
import { UpdateCampaignComponent } from './modules/update-campaign/update-campaign.component';
import { UpdateProductComponent } from './modules/update-product/update-product.component';

const routes: Routes = [
  {path: 'campaignList', component: CampaignListComponent},
  {path: 'newCampaign', component: NewCampaignComponent},
  {path: 'editProduct', component: UpdateProductComponent},
  {path: 'editCampaign', component: UpdateCampaignComponent},
  {path: 'productList', component: ProductListComponent},
  {path: 'newProduct', component: NewProductComponent},
  {path: 'editProduct/:id', component: UpdateProductComponent},
  {path: 'editCampaign/:id', component: UpdateCampaignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
