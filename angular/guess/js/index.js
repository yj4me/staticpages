var INTEGER_REGEXP = /^\-?\d*$/;
var app = angular.module('myApp',[])
// 自定义指令（指令名称：整数）
.directive('integer',function(){
	return{
		require:'ngModel',
		link : function(scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function(viewValue) {
                if (INTEGER_REGEXP.test(viewValue)) {
                    ctrl.$setValidity('integer', true);
                    return viewValue;
                } else {
                    ctrl.$setValidity('integer', false);
                    return undefined;
                }
            });
        }
	};
})
.controller('GuessNumController',function($scope){
	
	$scope.verifyGuess = function(){
		// 生成的数－用户猜的数
		console.log('随机数：'+ $scope.originalVal);
		$scope.userGuess = $scope.user_input;
		console.log('用户猜测：'+ $scope.userGuess);
		if($scope.userGuess == null){
			alert("您还未输入任何数字");
			return;
		}
		$scope.deviation = $scope.originalVal - $scope.userGuess;
 		$scope.numOfTries = $scope.numOfTries + 1;

	}
	// 初始化游戏
	$scope.initializeGame = function(){
		// 初始化
		$scope.numOfTries = 0;//猜的次数
		$scope.userGuess = null;//猜的数字
		$scope.originalVal = Math.floor((Math.random() * 1000) + 1);//生成的随机数
		$scope.deviation = null;//两个数的差值
		// 清空输入框
		$scope.user_input = null;
	}
	// 程序加载时先调用一次
	$scope.initializeGame();
})