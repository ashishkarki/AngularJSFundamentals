'use strict';

eventsApp.controller('EventController',
    function EventController($scope){
        $scope.snippet = '<span style="color: red">Hi There</span>';
        $scope.boolValue = false;
        $scope.mystyle = {color: 'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.sortOrder = '-upVoteCount'; // use upVoteCount field as default sort order. minus means descending
        // event exists within the 'scope' of EventController
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2016',
            time: '10:30 am',
            location:{
                address: 'My company inc',
                city: 'My city name',
                province: 'My state name'
            },
            imageUrl: '/img/angularjs-image.jpg',
            sessions: [
                {
                    name: 'Directives Masterclass Introductory',
                    creator: 'Ashish Karki',
                    duration: '1 hour',
                    level: 'Advanced',
                    abstract: 'Learn goodies about directives',
                    upVoteCount: 2
                },
                {
                    name: 'Scopes for fun and profit',
                    creator: 'SomeName Guy',
                    duration: '2 hour',
                    level: 'Intermediate',
                    abstract: 'Take a closer look at scopes',
                    upVoteCount: 3
                },
                {
                    name: 'Well Behaved Controller',
                    creator: 'AnotherPerson Dude',
                    duration: '1/2 hour',
                    level: 'Advanced',
                    abstract: 'Controllers are the beginning of everything. So start knowing them properly.',
                    upVoteCount: 20
                }
            ]
        } // end of $scope.event

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }
);