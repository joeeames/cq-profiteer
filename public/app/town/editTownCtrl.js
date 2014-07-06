angular.module('app').controller('editTownCtrl', function($scope, mvUser, mvIdentity, $location) {
	$scope.user = mvUser.get({id:mvIdentity.currentUser._id});
	$scope.cancel = function() {
		$location.url('/town');
	}
	$scope.save = function() {
		$scope.user.$update();
		$location.url('/town');	
	}
	
})