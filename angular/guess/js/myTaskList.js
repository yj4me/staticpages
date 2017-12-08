var app = angular.module('myTask',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/all',{templateUrl:'temps/all.html'})
    .when('/todo',{templateUrl:'temps/todo.html'})
    .when('/done',{templateUrl:'temps/done.html'})
    .otherwise({redirectTo:'/all'});

  }])
.controller('taskController',['$scope','dateFilter',function($scope,dateFilter){
  // 原始数据
     $scope.chk = false;
     $scope.countTodo = 0;
     $scope.countDone = 0;
     $scope.taskList = [
      {
        id:1,
        text:'中午午休',
        done:'已完成',
        time:'2017-09-14 12:00:00',
        desc:''
      }
     ];
     //获取当前时间
     function getNowTime(){
           return dateFilter(new Date() , "yyyy-MM-dd HH:mm:ss");
     }
     //新增任务
     $scope.addTask = function(){
        console.log('文本框内容:'+ $scope.taskText);
        if($scope.taskText !== undefined){
          $scope.taskList.push({
            id : $scope.taskList.length + 1,

                text : $scope.taskText,
                done : '未完成',
                time : getNowTime(),

                desc : ''
          });
          // 恢复默认
          $scope.chk = false;
          // 新push的内容必定是未完成的
           $scope.countTodo++;
          //此处用来清空文本框中的内容
           $scope.taskText = '';
           $scope.save();
          // 此处用来重新计数,先清零,因为数据是重新遍历的，方法可行，但每次都重新遍历，没必须要，只需要判断追加内容即可
          // $scope.countTodo = 0;
          // $scope.countDone = 0;
          // count();

        }else{
           alert('您还未添加任何任务！');
        }
     }
    
      //从缓存中删除任务
     $scope.removeTask = function(todo){

           $scope.taskList.splice($scope.taskList.indexOf(todo), 1);

           $scope.save();
            // 这时候要重新遍历，因为不知道删除的是已完成还是未完成
            $scope.countTodo = 0;
            $scope.countDone = 0;
            count();
            // 数据也要更新，因为序号不对，只更新id即可
            updateData();

     }
 //新增任务后还要把任务存入缓存中
     $scope.save = function(){

           localStorage.setItem('taskList' , angular.toJson($scope.taskList));


     }
     $scope.changeStatus = function(){
        console.log('触发了点击事件');
         $scope.chk = true;
        // 这时候要重新计数
        $scope.countTodo = 0;
        $scope.countDone = $scope.taskList.length;
        angular.forEach($scope.taskList,function(data){
          data.done = '已完成';
        })
     }
     $scope.check = function(){
      console.log('执行了check事件');
        if( $scope.countTodo === 0){
           console.log('返回true');
          return true;
          
        }else{
          console.log('返回false');
          return false;
          
        }
      
     }

     var updateData = function(){
        angular.forEach($scope.taskList,function(data,index){
          console.log('done的id：'+ data.id);
          // 重新赋值
          data.id = index + 1;
        })
     }
    
    var count = function(){
        angular.forEach($scope.taskList,function(data,index,array){
        // data===array[index],两种方法
        // console.log('done的状态1：'+array[index].done);
        console.log('数组长度：'+$scope.taskList.length);
        console.log('done的状态：'+ data.done);
        if(data.done === '未完成'){
          $scope.countTodo++;
          console.log('count:'+ $scope.countTodo);
        }
        if(data.done === '已完成'){
          $scope.countDone++;
          console.log('countDone:'+ $scope.countDone);
        }  
      })
    }
    count()
   
}]);
// .controller('taskController',function($scope,dataFilter){
//   // 原始数据
// 	   $scope.taskList = [
//       {
//         id:1,
//         text:'七点做饭',
//         done:false,
//         time:getNowTime(),
//         desc:''
//       }
//      ];

//      //新增任务
//      $scope.addTask = function(){

//            $scope.taskList.push({

//                 id : $scope.taskList.length + 1,

//                 text : $scope.taskText,

//                 done : false,

//                 time : getNowTime(),

//                 desc : ''

//            });

//            //此处用来清空文本框中的内容

//            $scope.taskText = '';

//            $scope.save();

//      }
// 	//获取当前时间
//      function getNowTime(){
//            return dateFilter(new Date() , "yyyy-MM-dd HH:mm:ss");
//      }
// 	//完善任务细则
//      $scope.addDesc = function(task){

//            $scope.save();

//            alert('任务更新成功，请努力坚持哦   :)');

//      }
//      //从缓存中删除任务
//      $scope.removeTask = function(todo){

//            $scope.taskList.splice($scope.taskList.indexOf(todo), 1);

//            $scope.save();

//      }
// 	//从缓存中删除所有任务
//      $scope.removeAll = function(){

//            $scope.taskList = [];

//            localStorage.clear();

//      }
//      //新增任务后还要把任务存入缓存中
//      $scope.save = function(){

//            localStorage.setItem('taskList' , angular.toJson($scope.taskList));

//      }


// })