import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrscannerService {

  url: string;
  constructor() { }

  setUrl(url: string) {
    this.url = url;
  }

  getUrl() {
    return this.url;
  }
}
