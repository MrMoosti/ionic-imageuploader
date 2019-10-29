# ionic-imageuploader
An Ionic app where u can scan a QR Code and upload images, this comes with the website where there images will be shown.

<h1  align="center">Ionic Imageuploader</h1>

**Ionic Imageuploader** is an application made by a student. It is open source and free. It's made in PHP and Angular(Ionic). The application consists of a webserver made in PHP and a mobile application made in ionic. You scan the QR code on your website with your phone. Once you have done this you can take a picture and upload these pictures to your website, the website will display newely uploaded images.

# Preview

### Screenshots

| ![Home](https://i.imgur.com/q3EMxYO.png) | ![Images](https://i.imgur.com/x5hEmn4.png) | ![Website](https://i.imgur.com/SjiL3tb.png) |
| ---------------------------------------- | ----------------------------------------------- | --------------------------------------- |


## Getting Started

In order to run **Ionic Imageuploader** on your local machine all what you need to do is to have the prerequisites stated below installed on your machine and follow the installation steps down below.

#### Prerequisites

- AngularCLI
- Ionic
- Node.js
- Git
- Cordova

#### Installing & Local Development

Start by typing the following commands in your terminal in order to get **Ionic Imageuploader** full package on your machine and starting a local development server with live reload feature.

```
> git clone https://github.com/MrMoosti/ionic-imageuploader.git Ionic_Imageuploader
> cd Ionic_Imageuploader (Move the webapplications folders contents to into your PHP webserver)
> cd Ionic/ImageUploader
> npm install
> ionic serve
```

## Deployment

In deployment process, you have three commands:

1. Build command

Used to generate the final result of compiling source files into www folder. This can be achieved by running the following command:

```
> ionic build
```

3. Android Build command

Used to build your application for android devices.

```
> ionic cordova build android
```

4. IOS Build command

Used to build your application for IOS devices.

```
> ionic cordova build ios
```

## Changelog

#### V 1.0.0

Functional with base features

- Working Mobile application
- Working PHP webserver
- Connection between Mobile Application and PHP Server.

## Authors

- [M.E. Yilmaz](https://www.meyilmaz.com)

## License

Adminator is licensed under The MIT License (MIT). Which means that you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the final products.
