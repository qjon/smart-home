# Smart Home

This is a small project to manage SONOFF light switches via web

It use own cloud server instead EWelink [smart-home-server](https://github.com/qjon/smart-home-server).

## ToDo

* rename switch for device (in progress)
* limit number of switches for device (now each device has 4)
* scheduler
* anti-thief mode

## Change log

### v0.8.0

* display list of connected devices
* refresh device switches status when someone use device directly
* allow to change device name
* allow to turn on/off single switch
* allow to turn on/off all switches for device

## Build app

* clone repository or download it
* create two files

_src/environments/environment.ts_
  
  
    export const environment = {
      production: false,
      apiHost: '',
      ws: {
        host: '',
        port: ''
      }
    };
   
_src/environments/environments.prod.ts_
   
   
     export const environment = {
       production: true,
       apiHost: 'http://SERVER_NAME:API_PORT',
       ws: {
         host: 'SERVER_IP',
         port: 'SSL_PORT'
       }
     };
   
* install all dependencies
      

      npm i
  
* build project


      npm run build
    
## Deploy

Copy _dist/smart-home_ folder to [smart-home-server](https://github.com/qjon/smart-home-server) root directory and run it. 
That's it.
