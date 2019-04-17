import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }


  getAlbums(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/albums/';
    return this.http.get<any>(url);
  }

  getHeroes(): Observable<any> {
    const url = '/assets/superheroes.json';
    return this.http.get(url).pipe(
      delay(2000)
    );
  }
}
