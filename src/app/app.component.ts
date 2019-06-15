import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

latitude: number;
longitude: number;

  ngOnInit(): void {
    this.getPosition().then(pos =>
      {
         console.log(`Positon: ${pos.lng} ${pos.lat}`);
         sessionStorage.setItem('geoloclat', pos.lat );
         sessionStorage.setItem('geoloclong', pos.lng );
      });
  }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });
  }
}
