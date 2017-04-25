angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal) {
	$scope.$on('$ionicView.enter',function(e){
		$("#MenuATSarabic").hide();
		$("#MenuATSenglish").hide();
		$("#MenuATSfrench").hide();
		$("#MenuATSindo").hide();
		$("#MenuATSrussian").hide();
		$("#MenuATSturk").hide();
		switch(window.localStorage['language'])
		{
			case "A":
				$scope.PageLanguage = "ENGLISH"; 
				$("#MenuATSenglish").show(); 
				window.localStorage['mylanguage'] = "en";
				break;
			case "B":
				$scope.PageLanguage = "العربية"; 
				$("#MenuATSarabic").show(); 
				window.localStorage['mylanguage'] = "ar";
				break;
			case "C":
				$scope.PageLanguage = "Bahasa-Indonesia"; 
				$("#MenuATSindo").show();
				window.localStorage['mylanguage'] = "id";
				break;
			case "D":
				$scope.PageLanguage = "Français"; 
				$("#MenuATSfrench").show(); 
				window.localStorage['mylanguage'] = "fr";
				break;
			case "F":
				$scope.PageLanguage = "Русский"; 
				$("#MenuATSrussian").show();
				window.localStorage['mylanguage'] = "ru";
				break;
			case "E":
				$scope.PageLanguage = "Türkçe";
				$("#MenuATSturk").show();
				window.localStorage['mylanguage'] = "tr";
				break;
			default: 
				$scope.PageLanguage = "ENGLISH";
				$("#MenuATSenglish").show();
				window.localStorage['mylanguage'] = "en";
				break;
		}
	});
})

.controller('HomeCtrl', function($scope,$ionicLoading,$http) {

$scope.postForm = function(){
		$ionicLoading.show({
			template: 'Verifying...',
			duration: 2000
		});
		var encodedString = 'action=' +
				encodeURIComponent("getOldsNews") +
				'&count=4' +
				'&page=1' +
				'&language=' +
				encodeURIComponent(window.localStorage['mylanguage']);
		$http({
				method: 'POST',
				url: 'http://cums.the-v.net/site.aspx',
				data: encodedString,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.success(function(data, status, headers, config) {
					$ionicLoading.hide();
					$scope.myNews = data;
			})
			.error(function(data, status, headers, config) {
				$ionicLoading.hide();
			})

	}

	$scope.postForm();
})
.controller('LanguageCtrl', function($scope, $stateParams,$state) {
if (window.localStorage['language'] != undefined){
	if (window.localStorage['language'].length > 0){
		switch(window.localStorage['language'])
		{
			case "A":
				$state.go('app.main');
				break;
			case "B":
				$state.go('app.main-ar');
				break;
			case "C":
				$state.go('app.main-id');
				break;
			case "D":
				$state.go('app.main-fr');
				break;
			case "F":
				$state.go('app.main-ru');
				break;
			case "E":
				$state.go('app.main-tr');
				break;
		}
	}
	else{
		window.localStorage['mylanguage'] = "en";
		window.localStorage['language'] = "A";
	}
}
	$scope.getLang = function(language){
		window.localStorage['language'] =language;
	};
})
.controller('NewsUpdateCtrl', function($scope, $stateParams,$http,$ionicLoading) {
	
$scope.postForm = function(){
		$ionicLoading.show({
			template: 'Verifying...',
			duration: 2000
		});
		var encodedString = 'action=' +
				encodeURIComponent("getOldsNews") +
				'&count=10' +
				'&page=1' +
				'&language=' +
				encodeURIComponent(window.localStorage['mylanguage']);
		$http({
				method: 'POST',
				url: 'http://cums.the-v.net/site.aspx',
				data: encodedString,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.success(function(data, status, headers, config) {
					$ionicLoading.hide();
					$scope.myNews = data;
			})
			.error(function(data, status, headers, config) {
				$ionicLoading.hide();
			})

	}

	$scope.postForm();
	
})
.controller('NewsSingleCtrl', function($scope, $stateParams,$location,$http,$ionicLoading) {
	$scope.postForm = function(){
		$ionicLoading.show({
			template: 'Verifying...',
			duration: 2000
		});
		var encodedString = 'action=' +
				encodeURIComponent("getNews") +
				'&URL=' +
				encodeURIComponent($location.search()["id"])+
				'&language=' +
				encodeURIComponent(window.localStorage['mylanguage']);;
		$http({
				method: 'POST',
				url: 'http://cums.the-v.net/site.aspx',
				data: encodedString,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.success(function(data, status, headers, config) {
					$ionicLoading.hide();
					$scope.myNews = data;
			})
			.error(function(data, status, headers, config) {
				$ionicLoading.hide();
			})

	}

	$scope.postForm();
})
.controller('MerchantCtrl', function($scope, $stateParams,$location,$http,$ionicLoading) {
	$scope.postForm = function(){
		$ionicLoading.show({
			template: 'Verifying...',
			duration: 2000
		});
		

		
		var url = "http://the-v.net/Resources/VCONApp_Merchandise.json?callback=JSON_CALLBACK"
		+'&dummy='+ Date.now();;

		//get merchandise and place into myMerchandise
			$http.jsonp(url)
		.success(function (data, status, headers, config) {
		$scope.myMerchandise = data;
		})
		.error(function (data, status, headers, config) {
		$scope.statcode = status;
		});	
       
	}
	function JSON_CALLBACK(data)
	{
		alert(data);
	}
	$scope.postForm();
})



.controller('PlaylistsCtrl', function($scope, $stateParams, $ionicScrollDelegate) {
//PLAYLIST CONTROLLER????
$scope.scrollTop = function(){
    $ionicScrollDelegate.scrollTop();
    // $scope.sttButton = false;
  };

})
.controller('MarkCtrl', function($scope, $stateParams, $state, $ionicModal, $timeout, $location, $ionicLoading,$ionicScrollDelegate, $ionicPopup, $http,$cordovaFileTransfer, $cordovaFile) {

	$scope.downloadFile = function(val){
		alert();
		var downloadProgress = '';
		var filename = "/BadgeImage.png";

		var url = "http://cums.the-v.net/app_site.aspx?id="+ val +".jpeg";
		var MyFiles = cordova.file.externalDataDirectory   + filename;
		
		$cordovaFileTransfer.download(url,MyFiles,{}, true).then(
		function(result){//success download
		
				$ionicLoading.hide();
				var alertPopup = $ionicPopup.alert({
							title: 'Download Successful!',
							});
				//alert( JSON.stringify(result));
				cordova.plugins.fileOpener2.open(
					MyFiles, 
					"image/png", 
					{
						error : function(){  }, 
						success : function(){  } 
					} 
				);
			}, function(error){
					if(error.code === 3)
					{
						var alertPopup = $ionicPopup.alert({
									title: 'Error',
									template: "Connection Interrupted!"
									});
					}
					else
					{
						var alertPopup = $ionicPopup.alert({
									title: 'Error',
									template: "Video is not downloadable "
									});
					}
					
				$ionicLoading.hide();
			}, function(progress){
			
				$timeout(function () {
					downloadProgress = (progress.loaded / progress.total) * 100;
				});
					$ionicLoading.show({
						  template: 'Download in progress. Please wait.<br/><progress id="progressbar" max="100" value="'+ downloadProgress +'"> </progress>' +
									'<div id="progressbarlabel">' + Math.ceil(downloadProgress) + '%</div>'
					});
			});
	}
//$scope.finalUrl = "http://cums.the-v.net/app_site.aspx?id=2.jpeg";
	$('input[type=file]').change(function(){
		var ranom = createGuid();
		alert("change" + ranom);
		
		files = $("#sf_db_profile_userupload").prop("files")[0];
		
		var fd = new FormData();
		fd.append("UploadedImage",files);
		fd.append("type","coverbadge");
		fd.append("action",ranom);
		$.ajax({
			url : 'http://cums.the-v.net/app_site.aspx',
			type : 'POST',
			data : fd,
			processData:false,
			contentType:false,
			success : function(data) {              
				$scope.finalUrl = ranom;
				$("#img").attr('src',"http://cums.the-v.net/app_site.aspx?id="+ ranom +".jpeg");
			},
			error : function(request,error)
			{
				alert("Request: "+JSON.stringify(request));
			}
		});
	});

	function createGuid()  
	{  
	   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
		  var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);  
		  return v.toString(16);  
	   });  
	}  



})

.controller('DownloadCtrl', function($scope, $stateParams, $state, $ionicModal, $timeout, $location, $ionicLoading,$ionicScrollDelegate, $ionicPopup, $http,$cordovaFileTransfer, $cordovaFile) {

$scope.download = function(){
		var downloadProgress = '';
		var filename = "/Wallpaper_Phone.png";

		var url = "http://the-v.net/images/default-source/vcon17/mobile-wallpaper.png";
		var MyFiles = cordova.file.externalDataDirectory   + filename;
		
		$cordovaFileTransfer.download(url,MyFiles,{}, true).then(
		function(result){//success download
		
				$ionicLoading.hide();
				var alertPopup = $ionicPopup.alert({
							title: 'Download Successful!',
							});
				//alert( JSON.stringify(result));
				cordova.plugins.fileOpener2.open(
					MyFiles, 
					"image/png", 
					{
						error : function(){  }, 
						success : function(){  } 
					} 
				);
			}, function(error){
					if(error.code === 3)
					{
						var alertPopup = $ionicPopup.alert({
									title: 'Error',
									template: "Connection Interrupted!"
									});
					}
					else
					{
						var alertPopup = $ionicPopup.alert({
									title: 'Error',
									template: "Video is not downloadable "
									});
					}
					
				$ionicLoading.hide();
			}, function(progress){
			
				$timeout(function () {
					downloadProgress = (progress.loaded / progress.total) * 100;
				});
					$ionicLoading.show({
						  template: 'Download in progress. Please wait.<br/><progress id="progressbar" max="100" value="'+ downloadProgress +'"> </progress>' +
									'<div id="progressbarlabel">' + Math.ceil(downloadProgress) + '%</div>'
					});
			});
	}


$scope.download2 = function(){
		var downloadProgress = '';
		var filename = "/Wallpaper_Phone.png";

		var url = "http://the-v.net/images/default-source/vcon17/tablet-wallpaper.png";
		var MyFiles = cordova.file.externalDataDirectory   + filename;
		
		$cordovaFileTransfer.download(url,MyFiles,{}, true).then(
		function(result){//success download
		
				$ionicLoading.hide();
				var alertPopup = $ionicPopup.alert({
							title: 'Download Successful!',
							});
				//alert( JSON.stringify(result));
				cordova.plugins.fileOpener2.open(
					MyFiles, 
					"image/png", 
					{
						error : function(){  }, 
						success : function(){  } 
					} 
				);
			}, function(error){
					if(error.code === 3)
					{
						var alertPopup = $ionicPopup.alert({
									title: 'Error',
									template: "Connection Interrupted!"
									});
					}
					else
					{
						var alertPopup = $ionicPopup.alert({
									title: 'Error',
									template: "Video is not downloadable "
									});
					}
					
				$ionicLoading.hide();
			}, function(progress){
			
				$timeout(function () {
					downloadProgress = (progress.loaded / progress.total) * 100;
				});
					$ionicLoading.show({
						  template: 'Download in progress. Please wait.<br/><progress id="progressbar" max="100" value="'+ downloadProgress +'"> </progress>' +
									'<div id="progressbarlabel">' + Math.ceil(downloadProgress) + '%</div>'
					});
			});
	}


});



