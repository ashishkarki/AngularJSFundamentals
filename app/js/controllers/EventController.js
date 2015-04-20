'use strict';

eventsApp.controller('EventController',
    function EventController($scope, myEventData) {
        $scope.snippet = '<span style="color: red">Hi There</span>';
        $scope.boolValue = false;
        $scope.mystyle = {color: 'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.sortOrder = '-upVoteCount'; // use upVoteCount field as default sort order. minus means descending
        // event exists within the 'scope' of EventController
        $scope.event = myEventData.event;

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }
);