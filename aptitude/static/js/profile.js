(function(){
	var app = angular.module('user', []);

	app.controller('UserCtrl', ['$http','$scope','$rootScope', function($http, $scope, $rootScope){
		$scope.addSkills = true;

		//$scope.
		
		$rootScope.canVote = false;
		var obj = $scope;

		console.log("obj1=",obj.canVote)
		$scope.voteClick = function(){
			$scope.canVote = $rootScope.canVote = obj.canVote? false: true;
			//alert("obj="+obj.canVote);
			console.log("obj2=",obj.canVote)
			//alert("true");
		};
		$scope.actitudes = '/static/js/user-actitudes.json';
		$scope.aptitudes = '/static/js/user-aptitudes.json';
	}]);

	app.directive('featureList', function(){
		return {
			restrict: 'E',
			templateUrl: '/static/directives/feature-list.html',
			scope:{
				info: '=',
				canVote: '@canVote' 				
			},
			controller: ['$http','$scope', function($http, $scope){
				var user = $scope,
					skills = $scope,
					skill = {};

				$scope.canEdit = true;

					
				//alert('Data type=', $scope.info);
				user.data = [];
				//debugger;
				$http.get($scope.info).success(function(data){
					$scope.data = data;
					//Todo: arreglar a cuando termine
					setTimeout("setSlider()", 100);
					//debugger;
				});

				

				$scope.showSkills = function(){
					skills.addSkills = skills.addSkills? false: true;
				};

				$scope.addSkill = function(name){
					//debugger;
					user.data.actitudes = user.data.actitudes ? user.data.actitudes:[];
					user.data.actitudes.push({
						name: name,
						value: "80%"
					});
					setTimeout("setSlider()", 100);
					$scope.skill.name = "";
					skills.addSkills = false;
				}
			}],
			controllerAs: 'userCtrl'
		};
	});



})()