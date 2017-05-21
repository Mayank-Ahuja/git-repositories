//app.factory("menuService", function ($http, $log) {
//   var object ={
//       getMenu:function(){
//           var menuData = $http({
//               method:'GET',
//               url:'server/mainMenu.json'
//           })
//           .then(function(response){
//               $log.info(response);
//               var menuData = response.data;
//               console.log("menuData: ",menuData);
//           })
//           return menuData;
//       }
//   } 
//   return object;
//});

/*
app.factory("shopfactory",function($http,$q){
	var object ={};
	object.callServer=function(){
		var defered = $q.defer();
		$http.get(https://raw.githubusercontent.com/amitsrivastava4all/MEANBATCH-12to2WE/master/mobile.json).then(function(data){
			defered.resolve(data);
		},function(error){
			defered.reject(error);
		})
		return defered.promise;
	}
	return object;
})
*/

app.service("menuService", function ($http, $log, $q) {
    this.object = {
        getMenu: function () {
            var defered = $q.defer();
            $http({
                    method: 'GET',
                    /*url: 'https://raw.githubusercontent.com/Mayank-Ahuja/mean-practice/master/mainMenu.json'*/
                    url: 'server/mainMenu.json'
                })
                .then(function (response) {
                    $log.info(response);
                    defered.resolve(response);
                }, function (error) {
                    defered.reject(error);
                })
            return defered.promise;
        }
    }
});

app.service("quickLinksService", function ($http, $log, $q) {
    this.object = {
        getMenu: function () {
            var defered = $q.defer();
            $http({
                    method: 'GET',
                    /*url: 'https://raw.githubusercontent.com/Mayank-Ahuja/mean-practice/master/quickLinks.json'*/
                    url: 'server/quickLinks.json'
                })
                .then(function (response) {
                    $log.info(response);
                    defered.resolve(response);
                }, function (error) {
                    defered.reject(error);
                })
            return defered.promise;
        }
    }
});


app.service("mobileService",function($http,$q,$log){
    this.object = {
        getMobileJson:function(){
            var defered = $q.defer();
            $http({
                method:'GET',
                url:'server/mobile.json'
            })
            .then(function(response){
                $log.info(response);
                defered.resolve(response);
            },function(error){
                defered.reject(error);
            }) 
            return defered.promise;
        }
    }
});
