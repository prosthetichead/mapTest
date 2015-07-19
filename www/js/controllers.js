angular.module('mapTest.controllers', [])

.controller('map1Ctrl', function($scope, $ionicLoading, mapboxService, Markers) {
    //Set Mapbox Access Token.
    mapboxService.init({ accessToken: 'pk.eyJ1IjoicHJvc3RoZXRpY2hlYWQiLCJhIjoiZjhhNjU2MWQzODg4YTFjZWZiN2QwN2NkMDE4OGY3OGMifQ.ivtTgYUEwkMQDiZMlrG8rw' });
    
    //Show Loading Screen
    $ionicLoading.show({
          template: 'Loading Your Location...'
    });

    //get markers
    $scope.markers = Markers.all();

    // Get users Geolocation
    navigator.geolocation.getCurrentPosition(function(position) {

      var pos = {lat: position.coords.latitude, lng: position.coords.longitude};
      $scope.pos = pos;
      console.log(pos.lng);
    });

    // hide loading screen
    $ionicLoading.hide()
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
