import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { JcdecauxService } from '../jcdecaux.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit{
  map : any;
  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41,41]   
  });
  stations : any;

  constructor(private jcdecauxService: JcdecauxService, private router: Router){
    const existingReservation = localStorage.getItem('reservation');
    if(existingReservation){
      const reservation = JSON.parse(existingReservation);
      const reservationDate = new Date(reservation.date);
      const currentDate = new Date();
      if(currentDate > reservationDate){
        localStorage.removeItem('reservation');
      }
    }
  }
  
  ngAfterViewInit(): void {
    this.createMap();
    this.recupereData(); 
  }
  recupereData(){
    this.jcdecauxService.getStations().subscribe((data: any[]) => { this.stations = data.filter(station=> station.contractName === 'toulouse');
    console.log(this.stations);
    this.addMarkersToMap();
  });
  }
  createMap(){
    const position = { //variable qui permet de déterminer la position du point
      lat: 43.600000,
      lng:1.433333,
    };
    const zoomLevel = 10; //valeur du zoom sur la carte
    this.map = L.map('map', { //permet de voir un endroit sur la carte sinon on voit rien
      center: [position.lat, position.lng],
      zoom: zoomLevel
    });
    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      minZoom: 12,
      maxZoom:17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    mainLayer.addTo(this.map);
  }
  addMarkersToMap(){
    this.stations.forEach((station : any) =>{
      const marker = L.marker([station.position.latitude, station.position.longitude], {icon: this.smallIcon});
      const popupContent = `
      <div>
        <h3>${station.name}</h3>
        <p>Adresse: ${station.address}</p>
        <p>Nombre de vélos: ${station.mainStands.availabilities.bikes}</p>
        <button id="${station.number}" type="button">Réserver un vélo</button>
      </div>
    `;
      marker.bindPopup(popupContent);
      marker.on('popupopen', () =>{
        const button = document.getElementById(station.number.toString());
        if(button){
          button.addEventListener('click', () => {
            this.navigateToReservation();
          });
        }
      })
      marker.addTo(this.map);
    });
  }
  navigateToReservation(){
    const existingReservation = localStorage.getItem('reservation');
    if(existingReservation){
      const confirmCancel = confirm('Vous avez déjà une réservation. Voulez-vous annuler la réservation existante ?');
      if(confirmCancel){
        localStorage.removeItem('reservation');
      }else{
        return;
      }
    }
    this.router.navigate(['/location']);
  }
}






