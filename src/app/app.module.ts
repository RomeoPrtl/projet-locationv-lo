import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { JcdecauxService } from './jcdecaux.service';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { StationsComponent } from './views/stations/stations.component';
import { LocationComponent } from './views/location/location.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ReservationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StationsComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [JcdecauxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
