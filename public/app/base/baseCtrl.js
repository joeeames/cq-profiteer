angular.module('app').controller('baseCtrl', function($scope, mvUser, mvIdentity) {
  console.log(mvIdentity.currentUser._id);
  $scope.user = mvUser.get({id:mvIdentity.currentUser._id});
  $scope.processTurn = function() {
    console.log($scope.user);
    console.log('processing turn');
  }
});