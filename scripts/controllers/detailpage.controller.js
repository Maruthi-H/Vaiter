vaiperApp.controller('DetailPageController', function($scope, $http) {
    
    $scope.message = "detail";
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [
        // {
        //   image: 'http://lorempixel.com/400/200/'
        // },
        // {
        //   image: 'http://lorempixel.com/400/200/food'
        // },
        // {
        //   image: 'http://lorempixel.com/400/200/sports'
        // },
        // {
        //   image: 'http://lorempixel.com/400/200/people'
        // }
      ];

    $scope.businessRichData = getBusinessRichData();
    function getBusinessRichData(){
        $http({
                  method: 'GET',
                  url: 'https://api.yelp.com/v3/businesses/gary-danko-san-francisco',
                  // params: 'latitude=37.767413217936834, longitude=-122.42820739746094',
                  headers: {'Authorization': 'Bearer EI_4TSCvzhRgFa_S-4a897Z3vmJTNs1YGH8gELlzFoHFWyzXPDKAPP0_tlmwoZoBwGOl7MXIPPVtEgZMYEKgaylev4EmO85c1dNeIQUhgilCDnsF6gZ-OSk-9O-BWXYx'}
        }).then(successCallback, errorCallback);
    }
    

    function successCallback(response){
        console.log(response.data);
        $scope.businessRichData = response.data;
        $scope.slides = response.data.photos;
        
    }

    function errorCallback(error){
         console.log(error);
    }
    
});


