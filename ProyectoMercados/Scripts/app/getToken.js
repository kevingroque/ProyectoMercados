app.service('getToken', function ($http) {
    this.get = function () {

        var BaseUrl = "http://josetecsup-001-site1.itempurl.com";

        var accesstoken = sessionStorage.getItem('accessToken');

        var authHeaders = {};
        if (accesstoken) {
            authHeaders.Authorization = 'Bearer ' + accesstoken;
        }

        var response = $http({
            url: BaseUrl + "/api/InfoClient",
            method: "GET",
            headers: authHeaders
        });
        return response;
    };
});
