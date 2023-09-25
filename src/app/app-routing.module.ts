import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './views/home/home.component';
import { LocationComponent } from './views/location/location.component';
import { StationsComponent } from './views/stations/stations.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'location' , component: LocationComponent},
  {path: 'stations', component: StationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
