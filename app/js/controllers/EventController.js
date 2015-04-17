'use strict';

eventsApp.controller('EventController',
    function EventController($scope){
        // event exists within the 'scope' of EventController
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2016',
            time: '10:30 am',
            location:{
                address: 'My company inc',
                city: 'My city name',
                province: 'My state name'
            }
        }
    }
);