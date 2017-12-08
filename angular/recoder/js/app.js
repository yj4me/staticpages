angular.module('routingDemoApp',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{template:'小项目模块内容'})
	.when('/anim',{template:'CSS3动画模块内容'})
	.when('/comps',{template:'组件模块内容'})
	.when('/js',{template:'AngularJS模块内容'})
	.otherwise({redirectTo:'/'});

}])
.controller('myCtrl', ['$scope', function($scope){
	$scope.currentIndex = 0;
	$scope.click = function(i){
		$scope.currentIndex = i;
	};
	

}])