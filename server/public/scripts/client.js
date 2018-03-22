var app = angular.module('deliveriesApp', []);

app.controller('DeliveryController', ['$http', function($http) {
    console.log('DeliveryController loaded');
    var self = this;
    var deliveries = 


    self.getSchedule = function() {
        console.log('in get schedule');
        let day = 'Monday';
        $http.get(`/schedule/${day}`).then(function(response){
            console.log('got the schedule', response);
            
        })
    } //end getSchedule

    self.getSchedule();
}])