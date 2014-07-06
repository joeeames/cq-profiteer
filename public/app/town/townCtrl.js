angular.module('app').controller('townCtrl', function($scope, mvUser, mvIdentity) {
  console.log(mvIdentity.currentUser._id);
  $scope.user = mvUser.get({id:mvIdentity.currentUser._id});
  
  $scope.processTurn = function() {
    console.log('processing turn');
    if(!$scope.user.gold) {
      $scope.user.gold = 10;
    }
    else {
      $scope.user.gold += 10;
    }
    console.log($scope.user);
    $scope.user.$update();
  }

  $scope.showEditLink = function() {
  	$scope.editLinkVisible = true;
  }
});