import { Component, OnInit } from '@angular/core';
import { QrscannerService } from '../qrscanner.service';


import { Image } from '../image';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage implements OnInit {

  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  

  url: string;
  images: Image[] = [];
  constructor(
    private qrScannerService: QrscannerService,
    private camera: Camera,
    private webview: WebView,
    private file: File
    ) { }

  ngOnInit() {
    this.url = this.qrScannerService.getUrl();
  }

  showCamera() {
    this.camera.getPicture(this.cameraOptions).then((path) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const image: Image = new Image();
      image.name = path.substring(path.lastIndexOf("/") + 1, path.length);
      image.filePath = path;
      image.urlPath = this.webview.convertFileSrc(path);
      console.log(image);
      this.images.push(image);
      console.log(this.images);
      //let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }

}
