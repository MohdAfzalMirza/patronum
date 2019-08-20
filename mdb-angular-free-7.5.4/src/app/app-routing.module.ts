import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {SolutionsComponent} from './solutions/solutions.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component'


const routes: Routes = [
  { path: 'features', component: FeaturesComponent},
  { path: 'solutions', component: SolutionsComponent},
  { path: 'pricing', component: PricingComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[FeaturesComponent,SolutionsComponent,PricingComponent];