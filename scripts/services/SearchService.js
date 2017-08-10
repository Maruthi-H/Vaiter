vaiperApp.factory('SearchService', function() {
 var searchLocation  = "NewYork";
 var selectedBusiness = "";

 function setSearchLocation(location) {
   searchLocation = location;
 }

 function getSearchLocation(){
 	return searchLocation;
 }

 function setSelectedBusiness(business){
 	selectedBusiness  = business;
 }

 function getSelectedBusiness() {
  return selectedBusiness;
 }

 return {
  setSearchLocation: setSearchLocation,
  getSearchLocation: getSearchLocation,
  setSelectedBusiness: setSelectedBusiness,
  getSelectedBusiness: getSelectedBusiness
 }

});