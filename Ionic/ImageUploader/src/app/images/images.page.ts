import { Component, OnInit } from '@angular/core';
import { QrscannerService } from '../qrscanner.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {

  url: string;
  constructor(private qrScannerService: QrscannerService) { }

  ngOnInit() {
    this.url = this.qrScannerService.getUrl();
  }

}
