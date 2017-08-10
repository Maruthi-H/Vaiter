vaiperApp.controller('DetailPageController', function($scope, $http, SearchService) {
    console.log(SearchService.getSearchLocation());
    $scope.message = "detail";
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [];
    $scope.baseUrl = "https://api.yelp.com/v3/businesses";
    $scope.businessId = SearchService.getSearchLocation();
    $scope.getBusinessRichData = getBusinessRichData;
    $scope.completeBusinessUrl = $scope.baseUrl + "/" + $scope.businessId;
    $scope.businessRichData = getBusinessRichData();
    $scope.completeBusinessReviewUrl = "";
    $scope.getBusinessReviews = getBusinessReviews;
    $scope.getBusinessReviews();
    console.log( $scope.businessReviews);

    function getBusinessReviews(){
        $scope.completeBusinessReviewUrl = $scope.baseUrl + "/" +     $scope.businessId + "/reviews";
        //console.log($scope.completeBusinessReviewUrl);
        $http({
                  method: 'GET',
                  url:  $scope.completeBusinessReviewUrl,
                  // params: 'latitude=37.767413217936834, longitude=-122.42820739746094',
                  headers: {'Authorization': 'Bearer EI_4TSCvzhRgFa_S-4a897Z3vmJTNs1YGH8gELlzFoHFWyzXPDKAPP0_tlmwoZoBwGOl7MXIPPVtEgZMYEKgaylev4EmO85c1dNeIQUhgilCDnsF6gZ-OSk-9O-BWXYx'}
        }).then(successCallbackForBusinessReviews, errorCallbackForBusinessReviews);
    }
    

    function successCallbackForBusinessReviews(response){
        //console.log(response.data);
        $scope.businessReviews = response.data.reviews;
       
        
    }

    function errorCallbackForBusinessReviews(error){
         console.log(error);
    }

    function getBusinessRichData(){
        $scope.completeBusinessUrl = $scope.baseUrl + "/" +     $scope.businessId;
        $http({
                  method: 'GET',
                  url:  $scope.completeBusinessUrl,
                  // params: 'latitude=37.767413217936834, longitude=-122.42820739746094',
                  headers: {'Authorization': 'Bearer EI_4TSCvzhRgFa_S-4a897Z3vmJTNs1YGH8gELlzFoHFWyzXPDKAPP0_tlmwoZoBwGOl7MXIPPVtEgZMYEKgaylev4EmO85c1dNeIQUhgilCDnsF6gZ-OSk-9O-BWXYx'}
        }).then(successCallback, errorCallback);
    }
    

    function successCallback(response){
        // console.log(response.data);
        $scope.businessRichData = response.data;
        $scope.slides = response.data.photos;
        
    }

    function errorCallback(error){
         console.log(error);
    }
    
});


