app.controller('controller', function ($scope, getToken) {
    $scope.Employees = [];

    $scope.Message = "";
    $scope.userName = sessionStorage.getItem('userName');


    loadData();

    function loadData() {


        var promise = getToken.get();
        promise.then(function (resp) {
            $scope.Message = "Call Completed Successfully";
        }, function (err) {
            $scope.Message = "Error!!! " + err.status
        });
    };

    $scope.logout = function () {

        sessionStorage.removeItem('accessToken');
        window.location.href = '/Login/Index';
    };
});