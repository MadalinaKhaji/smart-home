import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NetworkComponent } from './components/network/network.component';
import { AalborgDeviceComponent } from './components/network/aalborg-device/aalborg-device.component';
import { LightsDeviceComponent } from './components/network/lights-device/lights-device.component';
import { NavComponent } from './components/nav/nav.component';
import { GenericDeviceComponent } from './components/network/generic-device/generic-device.component';
import { GenericValueComponent } from './components/network/generic-value/generic-value.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NetworkComponent,
    AalborgDeviceComponent,
    LightsDeviceComponent,
    NavComponent,
    GenericDeviceComponent,
    GenericValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
