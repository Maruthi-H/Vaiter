var vaiperApp = angular.module('myApp', ['ngRoute','ui.carousel','ui.bootstrap']);
 //configure our routes
    vaiperApp.config(function($routeProvider, $locationProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'templates/home.html',
                controller  : 'HomePageController'
            })

            // route for the detailed page
            .when('/detail', {
                templateUrl : 'templates/detail.html',
                controller  : 'DetailPageController'
            });
            $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
            });
            $locationProvider.html5Mode(true);


    });

    
vaiperApp.controller('HomePageController', function($scope, $http, SearchService) {
    // console.log(SearchService.getSearchLocation());
    $scope.searchText = "San+Francisco";
    $scope.baseUrl = "https://api.yelp.com/v3/businesses/search";
    $scope.searchTerm = "food";
    $scope.searchLocation = "San-Francisco";
    $scope.completeSearchUrl =  $scope.baseUrl + "?term="+  $scope.searchTerm +"&location=\'" + $scope.searchLocation + "\'";
    // console.log($scope.completeSearchUrl);
    $scope.searchData = {};
    $scope.searchData = getSearchData();
    $scope.getSearchData = getSearchData;
    $scope.navToSecondPage = navToSecondPage;
    function getSearchData(){
        $scope.completeSearchUrl =  $scope.baseUrl + "?term="+  $scope.searchTerm +"&location=\'" + $scope.searchLocation + "\'";
        // console.log($scope.completeSearchUrl);
        $http({
                  method: 'GET',
                  url: $scope.completeSearchUrl,
                  // params: 'latitude=37.767413217936834, longitude=-122.42820739746094',
                  headers: {'Authorization': 'Bearer EI_4TSCvzhRgFa_S-4a897Z3vmJTNs1YGH8gELlzFoHFWyzXPDKAPP0_tlmwoZoBwGOl7MXIPPVtEgZMYEKgaylev4EmO85c1dNeIQUhgilCDnsF6gZ-OSk-9O-BWXYx'}
        }).then(successCallback, errorCallback);
    }
   

    function successCallback(response){
        // console.log(response.data.businesses);
        $scope.searchData = response.data.businesses;
        
    }
    function errorCallback(error){
         console.log(error);
    }  

    function navToSecondPage(oBusiness){
        // console.log(oBusiness.id);
        SearchService.setSearchLocation(oBusiness.id);
    }



    // var data = null;

    // var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    // xhr.addEventListener("readystatechange", function () {
    //   if (this.readyState === this.DONE) {
    //     console.log(this.responseText);
    //   }
    // });

    // //setting request method
    // xhr.open("GET", "https://api.yelp.com/v3/businesses/search?latitude=37.767413217936834&longitude=-122.42820739746094");

    // //adding request headers
    // // xhr.setRequestHeader("Content-Type", "application/json");
    // // xhr.setRequestHeader("Accept", "application/json");
    // xhr.setRequestHeader("Authorization", "Bearer EI_4TSCvzhRgFa_S-4a897Z3vmJTNs1YGH8gELlzFoHFWyzXPDKAPP0_tlmwoZoBwGOl7MXIPPVtEgZMYEKgaylev4EmO85c1dNeIQUhgilCDnsF6gZ-OSk-9O-BWXYx");

    // //sending request
    // xhr.send(data);


    
  
});


