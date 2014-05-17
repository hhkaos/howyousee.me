(function(){
	var app = angular.module('user', []);

	app.controller('UserCtrl', ['$http','$scope', function($http, $scope){
		this.addSkills = false;

		//$scope.
		this.canEdit = false;
		this.canVote = true;
		$scope.actitudes = '/static/js/user-actitudes.json';
		$scope.aptitudes = '/static/js/user-aptitudes.json';
	}]);

	app.directive('featureList', function(){
		return {
			restrict: 'E',
			templateUrl: '/static/directives/feature-list.html',
			scope:{
				info: '='
			},
			controller: ['$http','$scope', function($http, $scope){
				var user = this,
					skills = this,
					skill = {};


				//alert('Data type=', $scope.info);
				user.data = [];
				//debugger;
				$http.get($scope.info).success(function(data){
					$scope.data = data;
					//Todo: arreglar a cuando termine
					setTimeout("setSlider()", 100);
					//debugger;
				});

				

				this.showSkills = function(){
					skills.addSkills = skills.addSkills? false: true;
				};

				this.addSkill = function(name){
					//debugger;
					user.data.actitudes.push({
						name: name,
						value: "80%"
					});
					this.skill.name = "";
					debugger;
					skills.addSkills = false;
				}
			}],
			controllerAs: 'userCtrl'
		};
	});



})()