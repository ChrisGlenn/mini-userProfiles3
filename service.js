var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {

  this.getUsers = function() {
    return $http({
    	var deferred = $q.defer()
        method: 'GET',
        url: 'http://reqr.es/api/users?page=1'
    }).then(function(response){
    	var parsedResponse = response.data.data;
    	for(var i = 0; i < parsedResponse.length; i++) {
        	parsedResponse[i].first_name = 'Ralf'
      	}
    	deferred.resolve(response);
    })
    return deferred.promise;
  }
});
