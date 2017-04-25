// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.main', {
        url: '/main',
        views: {
          'menuContent': {
            templateUrl: 'templates/main.html'
            
          }
        }
      })

      .state('app.main-ar', {
        url: '/main-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/main-ar.html'
          }
        }
      })

      .state('app.main-fr', {
        url: '/main-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/main-fr.html'
          }
        }
      })

      .state('app.main-ru', {
        url: '/main-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/main-ru.html'
          }
        }
      })

      .state('app.main-tr', {
        url: '/main-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/main-tr.html'
          }
        }
      })

      .state('app.main-id', {
        url: '/main-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/main-id.html'
          }
        }
      })

      .state('app.whatis', {
        url: '/whatis',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatis.html'
          }
        }
      })
      .state('app.whatis-ar', {
        url: '/whatis-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatis-ar.html'
          }
        }
      })
      .state('app.whatis-id', {
        url: '/whatis-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatis-id.html'
          }
        }
      })
      .state('app.whatis-fr', {
        url: '/whatis-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatis-fr.html'
          }
        }
      })
      .state('app.whatis-ru', {
        url: '/whatis-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatis-ru.html'
          }
        }
      })
      .state('app.whatis-tr', {
        url: '/whatis-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatis-tr.html'
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.allabout', {
        url: '/allabout',
        views: {
          'menuContent': {
            templateUrl: 'templates/allabout.html'
          }
        }
      })
      .state('app.allabout-ar', {
        url: '/allabout-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/allabout-ar.html'
          }
        }
      })
      .state('app.allabout-id', {
        url: '/allabout-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/allabout-id.html'
          }
        }
      })
      .state('app.allabout-fr', {
        url: '/allabout-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/allabout-fr.html'
          }
        }
      })
      .state('app.allabout-ru', {
        url: '/allabout-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/allabout-ru.html'
          }
        }
      })
      .state('app.allabout-tr', {
        url: '/allabout-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/allabout-tr.html'
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.ticket', {
        url: '/ticket',
        views: {
          'menuContent': {
            templateUrl: 'templates/ticket.html',
          }
        }
      })
      .state('app.ticket-ar', {
        url: '/ticket-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/ticket-ar.html',
          }
        }
      })
      .state('app.ticket-fr', {
        url: '/ticket-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/ticket-fr.html',
          }
        }
      })
      .state('app.ticket-id', {
        url: '/ticket-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/ticket-id.html',
          }
        }
      })
      .state('app.ticket-ru', {
        url: '/ticket-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/ticket-ru.html',
          }
        }
      })
      .state('app.ticket-tr', {
        url: '/ticket-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/ticket-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.mark', {
        url: '/mark',
        views: {
          'menuContent': {
            templateUrl: 'templates/mark.html',
          }
        }
      })
      .state('app.mark-ar', {
        url: '/mark-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/mark-ar.html',
          }
        }
      })
      .state('app.mark-fr', {
        url: '/mark-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/mark-fr.html',
          }
        }
      })
      .state('app.mark-id', {
        url: '/mark-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/mark-id.html',
          }
        }
      })
      .state('app.mark-ru', {
        url: '/mark-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/mark-ru.html',
          }
        }
      })
      .state('app.mark-tr', {
        url: '/mark-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/mark-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.downloads', {
        url: '/downloads',
        views: {
          'menuContent': {
            templateUrl: 'templates/downloads.html',
          }
        }
      })
      .state('app.downloads-ar', {
        url: '/downloads-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/downloads-ar.html',
          }
        }
      })
      .state('app.downloads-fr', {
        url: '/downloads-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/downloads-fr.html',
          }
        }
      })
      .state('app.downloads-id', {
        url: '/downloads-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/downloads-id.html',
          }
        }
      })
      .state('app.downloads-ru', {
        url: '/downloads-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/downloads-ru.html',
          }
        }
      })
      .state('app.downloads-tr', {
        url: '/downloads-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/downloads-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.speakers', {
        url: '/speakers',
        views: {
          'menuContent': {
            templateUrl: 'templates/thespeakers.html',
          }
        }
      })
      .state('app.speakers-ar', {
        url: '/speakers-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/thespeakers-ar.html',
          }
        }
      })
      .state('app.speakers-fr', {
        url: '/speakers-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/thespeakers-fr.html',
          }
        }
      })
      .state('app.speakers-id', {
        url: '/speakers-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/thespeakers-id.html',
          }
        }
      })
      .state('app.speakers-ru', {
        url: '/speakers-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/thespeakers-ru.html',
          }
        }
      })
      .state('app.speakers-tr', {
        url: '/speakers-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/thespeakers-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vmp-dato', {
        url: '/vmp-dato',
        views: {
          'menuContent': {
            templateUrl: 'templates/vmp-dato-sri-vijay-eswaran.html',
          }
        }
      })
      .state('app.vmp-dato-ar', {
        url: '/vmp-dato-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vmp-dato-sri-vijay-eswaran-ar.html',
          }
        }
      })

      .state('app.vmp-dato-fr', {
        url: '/vmp-dato-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vmp-dato-sri-vijay-eswaran-fr.html',
          }
        }
      })
      .state('app.vmp-dato-id', {
        url: '/vmp-dato-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vmp-dato-sri-vijay-eswaran-id.html',
          }
        }
      })
      .state('app.vmp-dato-ru', {
        url: '/vmp-dato-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vmp-dato-sri-vijay-eswaran-ru.html',
          }
        }
      })
      .state('app.vmp-dato-tr', {
        url: '/vmp-dato-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vmp-dato-sri-vijay-eswaran-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vfp-jtb', {
        url: '/vfp-jtb',
        views: {
          'menuContent': {
            templateUrl: 'templates/vfp-joseph-bismark.html',
          }
        }
      })
      .state('app.vfp-jtb-ar', {
        url: '/vfp-jtb-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vfp-joseph-bismark-ar.html',
          }
        }
      })
      .state('app.vfp-jtb-fr', {
        url: '/vfp-jtb-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vfp-joseph-bismark-fr.html',
          }
        }
      })
      .state('app.vfp-jtb-id', {
        url: '/vfp-jtb-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vfp-joseph-bismark-id.html',
          }
        }
      })
      .state('app.vfp-jtb-ru', {
        url: '/vfp-jtb-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vfp-joseph-bismark-ru.html',
          }
        }
      })
      .state('app.vfp-jtb-tr', {
        url: '/vfp-jtb-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vfp-joseph-bismark-tr.html',
          }
        }
      })


      // 
      // ----------------- 
      // 

      .state('app.vp-tg', {
        url: '/vp-tg',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-tg-kintanar.html',
          }
        }
      })
      .state('app.vp-tg-ar', {
        url: '/vp-tg-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-tg-kintanar-ar.html',
          }
        }
      })
      .state('app.vp-tg-fr', {
        url: '/vp-tg-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-tg-kintanar-fr.html',
          }
        }
      })
      .state('app.vp-tg-id', {
        url: '/vp-tg-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-tg-kintanar-id.html',
          }
        }
      })
      .state('app.vp-tg-ru', {
        url: '/vp-tg-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-tg-kintanar-ru.html',
          }
        }
      })
      .state('app.vp-tg-tr', {
        url: '/vp-tg-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-tg-kintanar-tr.html',
          }
        }
      })


      // 
      // ----------------- 
      // 

      .state('app.vp-dil', {
        url: '/vp-dil',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-donna-imson.html',
          }
        }
      })
      .state('app.vp-dil-ar', {
        url: '/vp-dil-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-donna-imson-ar.html',
          }
        }
      })
      .state('app.vp-dil-fr', {
        url: '/vp-dil-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-donna-imson-fr.html',
          }
        }
      })
      .state('app.vp-dil-id', {
        url: '/vp-dil-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-donna-imson-id.html',
          }
        }
      })
      .state('app.vp-dil-ru', {
        url: '/vp-dil-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-donna-imson-ru.html',
          }
        }
      })
      .state('app.vp-dil-tr', {
        url: '/vp-dil-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-donna-imson-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-rs', {
        url: '/vp-rs',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-ranjit-singh.html',
          }
        }
      })
      .state('app.vp-rs-ar', {
        url: '/vp-rs-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-ranjit-singh-ar.html',
          }
        }
      })
      .state('app.vp-rs-fr', {
        url: '/vp-rs-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-ranjit-singh-fr.html',
          }
        }
      })
      .state('app.vp-rs-id', {
        url: '/vp-rs-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-ranjit-singh-id.html',
          }
        }
      })
      .state('app.vp-rs-ru', {
        url: '/vp-rs-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-ranjit-singh-ru.html',
          }
        }
      })
      .state('app.vp-rs-tr', {
        url: '/vp-rs-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-ranjit-singh-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-ks', {
        url: '/vp-ks',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-kuna-senathirajah.html',
          }
        }
      })
      .state('app.vp-ks-ar', {
        url: '/vp-ks-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-kuna-senathirajah-ar.html',
          }
        }
      })
      .state('app.vp-ks-fr', {
        url: '/vp-ks-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-kuna-senathirajah-fr.html',
          }
        }
      })
      .state('app.vp-ks-id', {
        url: '/vp-ks-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-kuna-senathirajah-id.html',
          }
        }
      })
      .state('app.vp-ks-ru', {
        url: '/vp-ks-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-kuna-senathirajah-ru.html',
          }
        }
      })
      .state('app.vp-ks-tr', {
        url: '/vp-ks-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-kuna-senathirajah-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-ps', {
        url: '/vp-ps',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-pathman-senathirajah.html',
          }
        }
      })
      .state('app.vp-ps-ar', {
        url: '/vp-ps-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-pathman-senathirajah-ar.html',
          }
        }
      })
      .state('app.vp-ps-fr', {
        url: '/vp-ps-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-pathman-senathirajah-fr.html',
          }
        }
      })
      .state('app.vp-ps-id', {
        url: '/vp-ps-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-pathman-senathirajah-id.html',
          }
        }
      })
      .state('app.vp-ps-ru', {
        url: '/vp-ps-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-pathman-senathirajah-ru.html',
          }
        }
      })
      .state('app.vp-ps-tr', {
        url: '/vp-ps-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-pathman-senathirajah-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-ag', {
        url: '/vp-ag',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-arun-george.html',
          }
        }
      })
      .state('app.vp-ag-ar', {
        url: '/vp-ag-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-arun-george-ar.html',
          }
        }
      })
      .state('app.vp-ag-fr', {
        url: '/vp-ag-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-arun-george-fr.html',
          }
        }
      })
      .state('app.vp-ag-id', {
        url: '/vp-ag-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-arun-george-id.html',
          }
        }
      })
      .state('app.vp-ag-ru', {
        url: '/vp-ag-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-arun-george-ru.html',
          }
        }
      })
      .state('app.vp-ag-tr', {
        url: '/vp-ag-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-arun-george-tr.html',
          }
        }
      })


      // 
      // ----------------- 
      // 

      .state('app.vp-ah', {
        url: '/vp-ah',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-adly-hassan.html',
          }
        }
      })
      .state('app.vp-ah-ar', {
        url: '/vp-ah-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-adly-hassan-ar.html',
          }
        }
      })
      .state('app.vp-ah-fr', {
        url: '/vp-ah-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-adly-hassan-fr.html',
          }
        }
      })
      .state('app.vp-ah-id', {
        url: '/vp-ah-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-adly-hassan-id.html',
          }
        }
      })
      .state('app.vp-ah-ru', {
        url: '/vp-ah-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-adly-hassan-ru.html',
          }
        }
      })
      .state('app.vp-ah-tr', {
        url: '/vp-ah-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-adly-hassan-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-ss', {
        url: '/vp-ss',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-sathi-senathirajah.html',
          }
        }
      })
      .state('app.vp-ss-ar', {
        url: '/vp-ss-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-sathi-senathirajah-ar.html',
          }
        }
      })
      .state('app.vp-ss-fr', {
        url: '/vp-ss-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-sathi-senathirajah-fr.html',
          }
        }
      })
      .state('app.vp-ss-id', {
        url: '/vp-ss-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-sathi-senathirajah-id.html',
          }
        }
      })
      .state('app.vp-ss-ru', {
        url: '/vp-ss-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-sathi-senathirajah-ru.html',
          }
        }
      })
      .state('app.vp-ss-tr', {
        url: '/vp-ss-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-sathi-senathirajah-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-ft', {
        url: '/vp-ft',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-ferdie-tolentino.html',
          }
        }
      })
      .state('app.vp-ft-ar', {
        url: '/vp-ft-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-ferdie-tolentino-ar.html',
          }
        }
      })
      .state('app.vp-ft-fr', {
        url: '/vp-ft-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-ferdie-tolentino-fr.html',
          }
        }
      })
      .state('app.vp-ft-id', {
        url: '/vp-ft-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-ferdie-tolentino-id.html',
          }
        }
      })
      .state('app.vp-ft-ru', {
        url: '/vp-ft-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-ferdie-tolentino-ru.html',
          }
        }
      })
      .state('app.vp-ft-tr', {
        url: '/vp-ft-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-ferdie-tolentino-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-cm', {
        url: '/vp-cm',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-cherian-mathew.html',
          }
        }
      })
      .state('app.vp-cm-ar', {
        url: '/vp-cm-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-cherian-mathew-ar.html',
          }
        }
      })
      .state('app.vp-cm-fr', {
        url: '/vp-cm-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-cherian-mathew-fr.html',
          }
        }
      })
      .state('app.vp-cm-id', {
        url: '/vp-cm-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-cherian-mathew-id.html',
          }
        }
      })
      .state('app.vp-cm-ru', {
        url: '/vp-cm-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-cherian-mathew-ru.html',
          }
        }
      })
      .state('app.vp-cm-tr', {
        url: '/vp-cm-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-cherian-mathew-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-ds', {
        url: '/vp-ds',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-david-sharma.html',
          }
        }
      })
      .state('app.vp-ds-ar', {
        url: '/vp-ds-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-david-sharma-ar.html',
          }
        }
      })
      .state('app.vp-ds-fr', {
        url: '/vp-ds-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-david-sharma-fr.html',
          }
        }
      })
      .state('app.vp-ds-id', {
        url: '/vp-ds-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-david-sharma-id.html',
          }
        }
      })
      .state('app.vp-ds-tr', {
        url: '/vp-ds-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-david-sharma-tr.html',
          }
        }
      })
      .state('app.vp-ds-ru', {
        url: '/vp-ds-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-david-sharma-ru.html',
          }
        }
      })


      // 
      // ----------------- 
      // 

      .state('app.vp-mk', {
        url: '/vp-mk',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-mahendra-kumar.html',
          }
        }
      })
      .state('app.vp-mk-ar', {
        url: '/vp-mk-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-mahendra-kumar-ar.html',
          }
        }
      })
      .state('app.vp-mk-fr', {
        url: '/vp-mk-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-mahendra-kumar-fr.html',
          }
        }
      })
      .state('app.vp-mk-id', {
        url: '/vp-mk-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-mahendra-kumar-id.html',
          }
        }
      })
      .state('app.vp-mk-ru', {
        url: '/vp-mk-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-mahendra-kumar-ru.html',
          }
        }
      })
      .state('app.vp-mk-tr', {
        url: '/vp-mk-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-mahendra-kumar-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.vp-dmq', {
        url: '/vp-dmq',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-dr-motaz-qais.html',
          }
        }
      })
      .state('app.vp-dmq-ar', {
        url: '/vp-dmq-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-dr-motaz-qais-ar.html',
          }
        }
      })
      .state('app.vp-dmq-fr', {
        url: '/vp-dmq-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-dr-motaz-qais-fr.html',
          }
        }
      })
      .state('app.vp-dmq-id', {
        url: '/vp-dmq-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-dr-motaz-qais-id.html',
          }
        }
      })
      .state('app.vp-dmq-ru', {
        url: '/vp-dmq-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-dr-motaz-qais-ru.html',
          }
        }
      })
      .state('app.vp-dmq-tr', {
        url: '/vp-dmq-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-dr-motaz-qais-tr.html',
          }
        }
      })


      // 
      // ----------------- 
      // 

      .state('app.vp-kp', {
        url: '/vp-kp',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-kpadma.html',
          }
        }
      })
      .state('app.vp-kp-ar', {
        url: '/vp-kp-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-kpadma-ar.html',
          }
        }
      })
      .state('app.vp-kp-fr', {
        url: '/vp-kp-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-kpadma-fr.html',
          }
        }
      })
      .state('app.vp-kp-id', {
        url: '/vp-kp-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-kpadma-id.html',
          }
        }
      })
      .state('app.vp-kp-ru', {
        url: '/vp-kp-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-kpadma-ru.html',
          }
        }
      })
      .state('app.vp-kp-tr', {
        url: '/vp-kp-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/vp-kpadma-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 



      .state('app.newslanding', {
        url: '/newslanding',
        views: {
          'menuContent': {
            templateUrl: 'templates/newslanding.html',
          }
        }
      })
      .state('app.newslanding-ar', {
        url: '/newslanding-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/newslanding-ar.html',
          }
        }
      })
      .state('app.newslanding-fr', {
        url: '/newslanding-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/newslanding-fr.html',
          }
        }
      }).state('app.newslanding-id', {
        url: '/newslanding-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/newslanding-id.html',
          }
        }
      })
      .state('app.newslanding-ru', {
        url: '/newslanding-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/newslanding-ru.html',
          }
        }
      })
      .state('app.newslanding-tr', {
        url: '/newslanding-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/newslanding-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 
      .state('app.news', {
        url: '/news',
        views: {
          'menuContent': {
            templateUrl: 'templates/news.html',
          }
        }
      })
      .state('app.news-ar', {
        url: '/news-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/news-ar.html',
          }
        }
      })
      .state('app.news-id', {
        url: '/news-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/news-id.html',
          }
        }
      })
      .state('app.news-fr', {
        url: '/news-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/news-fr.html',
          }
        }
      })
      .state('app.news-ru', {
        url: '/news-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/news-ru.html',
          }
        }
      })
      .state('app.news-tr', {
        url: '/news-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/news-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.penang101', {
        url: '/penang101',
        views: {
          'menuContent': {
            templateUrl: 'templates/penang101.html',
          }
        }
      })
      .state('app.penang101-ar', {
        url: '/penang101-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/penang101-ar.html',
          }
        }
      })
      .state('app.penang101-fr', {
        url: '/penang101-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/penang101-fr.html',
          }
        }
      })
      .state('app.penang101-id', {
        url: '/penang101-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/penang101-id.html',
          }
        }
      })
      .state('app.penang101-ru', {
        url: '/penang101-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/penang101-ru.html',
          }
        }
      })
      .state('app.penang101-tr', {
        url: '/penang101-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/penang101-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.merchandise', {
        url: '/merchandise',
        views: {
          'menuContent': {
            templateUrl: 'templates/merchandise.html',
          }
        }
      })
      .state('app.merchandise-ar', {
        url: '/merchandise-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/merchandise-ar.html',
          }
        }
      })
      .state('app.merchandise-fr', {
        url: '/merchandise-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/merchandise-fr.html',
          }
        }
      })
      .state('app.merchandise-id', {
        url: '/merchandise-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/merchandise-id.html',
          }
        }
      })
      .state('app.merchandise-tr', {
        url: '/merchandise-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/merchandise-tr.html',
          }
        }
      })
      .state('app.merchandise-ru', {
        url: '/merchandise-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/merchandise-ru.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.contact', {
        url: '/contact',
        views: {
          'menuContent': {
            templateUrl: 'templates/contact.html',
          }
        }
      })
      .state('app.contact-ar', {
        url: '/contact-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/contact-ar.html',
          }
        }
      })
      .state('app.contact-fr', {
        url: '/contact-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/contact-fr.html',
          }
        }
      })
      .state('app.contact-id', {
        url: '/contact-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/contact-id.html',
          }
        }
      })
      .state('app.contact-ru', {
        url: '/contact-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/contact-ru.html',
          }
        }
      })
      .state('app.contact-tr', {
        url: '/contact-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/contact-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.faqs-header', {
        url: '/faqs',
        views: {
          'menuContent': {
            templateUrl: 'templates/faqs.html',
          }
        }
      })
      .state('app.faqs-header-ar', {
        url: '/faqs-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/faqs-ar.html',
          }
        }
      })
      .state('app.faqs-header-fr', {
        url: '/faqs-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/faqs-fr.html',
          }
        }
      })
      .state('app.faqs-header-id', {
        url: '/faqs-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/faqs-id.html',
          }
        }
      })
      .state('app.faqs-header-ru', {
        url: '/faqs-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/faqs-ru.html',
          }
        }
      })
      .state('app.faqs-header-tr', {
        url: '/faqs-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/faqs-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.whydo', {
        url: '/whydo',
        views: {
          'menuContent': {
            templateUrl: 'templates/whydo.html',
          }
        }
      })
      .state('app.whydo-ar', {
        url: '/whydo-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/whydo-ar.html',
          }
        }
      })
      .state('app.whydo-fr', {
        url: '/whydo-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/whydo-fr.html',
          }
        }
      })
      .state('app.whydo-id', {
        url: '/whydo-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/whydo-id.html',
          }
        }
      })
      .state('app.whydo-ru', {
        url: '/whydo-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/whydo-ru.html',
          }
        }
      })
      .state('app.whydo-tr', {
        url: '/whydo-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/whydo-tr.html',
          }
        }
      })


      // 
      // ----------------- 
      // 

      .state('app.splash', {
        url: '/splash',
        views: {
          'menuContent': {
            templateUrl: 'templates/splash.html',
          }
        }
      })
      .state('app.splash-ar', {
        url: '/splash-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/splash-ar.html',
          }
        }
      })
      .state('app.splash-fr', {
        url: '/splash-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/splash-fr.html',
          }
        }
      })
      .state('app.splash-id', {
        url: '/splash-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/splash-id.html',
          }
        }
      })
      .state('app.splash-ru', {
        url: '/splash-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/splash-ru.html',
          }
        }
      })
      .state('app.splash-tr', {
        url: '/splash-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/splash-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.splashnext', {
        url: '/splashnext',
        views: {
          'menuContent': {
            templateUrl: 'templates/splashnext.html',
          }
        }
      })
      .state('app.splashnext-ar', {
        url: '/splashnext-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/splashnext-ar.html',
          }
        }
      })
      .state('app.splashnext-fr', {
        url: '/splashnext-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/splashnext-fr.html',
          }
        }
      })
      .state('app.splashnext-id', {
        url: '/splashnext-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/splashnext-id.html',
          }
        }
      })
      .state('app.splashnext-ru', {
        url: '/splashnext-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/splashnext-ru.html',
          }
        }
      })
      .state('app.splashnext-tr', {
        url: '/splashnext-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/splashnext-tr.html',
          }
        }
      })


      // 
      // ----------------- 
      // 

      .state('app.howto', {
        url: '/howto',
        views: {
          'menuContent': {
            templateUrl: 'templates/howto.html',
          }
        }
      })
      .state('app.howto-ar', {
        url: '/howto-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/howto-ar.html',
          }
        }
      })
      .state('app.howto-fr', {
        url: '/howto-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/howto-fr.html',
          }
        }
      })
      .state('app.howto-id', {
        url: '/howto-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/howto-id.html',
          }
        }
      })
      .state('app.howto-ru', {
        url: '/howto-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/howto-ru.html',
          }
        }
      })
      .state('app.howto-tr', {
        url: '/howto-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/howto-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.whatto', {
        url: '/whatto',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatto.html',
          }
        }
      })
      .state('app.whatto-ar', {
        url: '/whatto-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatto-ar.html',
          }
        }
      })
      .state('app.whatto-fr', {
        url: '/whatto-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatto-fr.html',
          }
        }
      })
      .state('app.whatto-id', {
        url: '/whatto-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatto-id.html',
          }
        }
      })
      .state('app.whatto-ru', {
        url: '/whatto-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatto-ru.html',
          }
        }
      })
      .state('app.whatto-tr', {
        url: '/whatto-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/whatto-tr.html',
          }
        }
      })

      // 
      // ----------------- 
      // 

      .state('app.whereto', {
        url: '/whereto',
        views: {
          'menuContent': {
            templateUrl: 'templates/whereto.html',
          }
        }
      })
      .state('app.whereto-ar', {
        url: '/whereto-ar',
        views: {
          'menuContent': {
            templateUrl: 'templates/whereto-ar.html',
          }
        }
      })
      .state('app.whereto-fr', {
        url: '/whereto-fr',
        views: {
          'menuContent': {
            templateUrl: 'templates/whereto-fr.html',
          }
        }
      })
      .state('app.whereto-id', {
        url: '/whereto-id',
        views: {
          'menuContent': {
            templateUrl: 'templates/whereto-id.html',
          }
        }
      })
      .state('app.whereto-ru', {
        url: '/whereto-ru',
        views: {
          'menuContent': {
            templateUrl: 'templates/whereto-ru.html',
          }
        }
      })
      .state('app.whereto-tr', {
        url: '/whereto-tr',
        views: {
          'menuContent': {
            templateUrl: 'templates/whereto-tr.html',
          }
        }
      });

      // 
      // ----------------- 
      // 


      // -------------- ARABIC -------------- //
      // -------------- FRENCH -------------- //
      // -------------- INDONESIA -------------- //
      // -------------- RUSSIAN -------------- //
      // -------------- TURKISH -------------- //




    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/main');
  });
