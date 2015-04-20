/**
 * Created by akarki on 4/20/2015.
 */
'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        $scope.saveEvent = function (event, newEventForm) {
            console.log(newEventForm);
            // let angular check validity by ensuring the required fields in html are filled up
            if (newEventForm.$valid) {
                window.alert('event name:' + event.name);
            }
        }

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        }
    }
);
