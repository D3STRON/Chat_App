var app = angular.module('angular',["ngRoute"]);
var socket=io.connect('https://bingo.localtunnel.me')

app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
   $routeProvider.when('/',{
      templateUrl: './temp/chatbox.html',
      controller: 'mainController'
  })
  $locationProvider.html5Mode({
    enabled: true,
   requireBase: false
  });
}]);
app.controller('mainController',function($scope){
  $scope.handle
  $scope.chats=[]
  $scope.message
  $scope.send= function(){
    socket.emit('chat',{
      message:$scope.message,
      handle:$scope.handle
    })
    $scope.message=""
  }
  socket.on('chat',function(data){
    $scope.chats.push(data)
    $scope.$apply()///////////////////////////////important ////////////////////////////////
    console.log($scope.chats)
  })
})
