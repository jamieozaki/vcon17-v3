angular.module('starter.controllers', [])

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
.controller('LanguageCtrl', function($scope, $stateParams) {

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



.controller('PlaylistsCtrl', function($scope, $stateParams) {
//WHY THE FUCK IS THIS IN A PLAYLIST CONTROLLER????
$scope.scrollTop = function(){
    $ionicScrollDelegate.scrollTop();
    // $scope.sttButton = false;
  };

})
.controller('PlaylistCtrl', function($scope, $stateParams) {



});



