import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppInitConfigService {

  constructor() { }

  load() {
    return new Promise((resolve, reject) => {
      resolve('Happy Coding');
    });
  }
}


