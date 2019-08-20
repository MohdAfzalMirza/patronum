import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page5Component } from './page5/page5.component';
import { Page4Component } from './page4/page4.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { Page8Component } from './page8/page8.component';
import { FooterComponent } from './footer/footer.component';
import { TempComponent } from './temp/temp.component';
// import { FeaturesComponent } from './features/features.component';
import { HeaderComponent } from './header/header.component';
// import { SolutionsComponent } from './solutions/solutions.component';
// import { PricingComponent } from './pricing/pricing.component';
import { RouterModule, Routes,  } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { routingComponents} from './app-routing.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdService } from './ad.service';


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page5Component,
    Page4Component,
    Page6Component,
    Page7Component,
    Page8Component,
    FooterComponent,
    TempComponent,
    // FeaturesComponent,
    HeaderComponent,
    // SolutionsComponent,
    // PricingComponent,
    routingComponents,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
