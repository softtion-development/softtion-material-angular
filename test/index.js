
// Inicializando aplicación AngularJS
var app = angular.module("myApp", ["ngSofttionMaterial"]);

app.config(function ($themeMaterialProvider, SofttionMaterial) {
    $themeMaterialProvider.setPrimary(SofttionMaterial.Theme.BLUE);
    
    $themeMaterialProvider.setSecondary(SofttionMaterial.Theme.YELLOW);
    
    $themeMaterialProvider.setError(SofttionMaterial.Theme.BLUE);
});

// Inicializando controlador de la aplicación
app.controller("myController", function ($scope, $snackbar, $toast) {
    
    $scope.openSnackbar = function ($event, value) {
        $snackbar.show("Soy un snackbar");
    };
    
    $scope.openToast = function ($event, value) {
        $toast.show("Soy un toast");
    };
    
    $scope.removeFiles = function ($event) {
        $scope.xxxx = undefined; $event.stopPropagation();
    };
    
    $scope.showFiles = function () {
        $scope.xxxx = "DANIEL ANDRES CASTILLO PEDROZA";
    };
});