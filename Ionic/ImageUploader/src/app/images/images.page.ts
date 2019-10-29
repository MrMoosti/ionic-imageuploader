import { Component, OnInit } from '@angular/core';
import { QrscannerService } from '../qrscanner.service';


import { Image } from '../image';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';

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
    this.url = "http://myilmaz.gcmediavormgeving.nl/Image_Uploader/upload.php";

    if (localStorage.getItem('images')) {
			this.images = JSON.parse(localStorage.getItem('images'));
		} else {
			localStorage.setItem('images', JSON.stringify(this.images));
		}
  }

  getLastImageId() {
    if (this.images.length > 0) {
			return this.images[this.images.length - 1].id;
		} else {
			return 0;
		}
  }

  showCamera() {
    this.camera.getPicture(this.cameraOptions).then((path) => {
      const image: Image = new Image();
      image.id = this.getLastImageId() + 1;
      image.name = path.substring(path.lastIndexOf("/") + 1, path.length);
      image.filePath = path;
      image.urlPath = this.webview.convertFileSrc(path);

      this.images.push(image);
      this.updateImages();

     }, (err) => {
      // Handle error
     });
  }

  async uploadImage(img: Image) {
    this.file.resolveLocalFilesystemUrl(img.filePath).then(entry => {
      ((entry as unknown) as FileEntry).file(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const formData = new FormData();
          const imgBlob = new Blob([reader.result], {
            type: file.type
          });
          formData.append('file', imgBlob, file.name);

          fetch(this.url, {
            method: 'POST',
            body: formData
          }).then(response => {
            return response.json();
          }).then(data => {
            console.log(this.images);
            this.deleteImage(img.id);
            this.updateImages();
            console.log(this.images);
          });
        };
        reader.readAsArrayBuffer(file);
      });
    });
  }

  updateImages() {
	  localStorage.setItem('images', JSON.stringify(this.images));
	}

  deleteImage(id: number) {
    const index = this.images.indexOf(this.images.find(x => x.id === id));
    this.images.splice(index, 1);
    this.updateImages();
  }

}
