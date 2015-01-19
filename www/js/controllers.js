angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })

    .controller('PlaylistsCtrl', function ($scope, $timeout, $ionicLoading, $ionicGesture) {
        var showingOverlay = false;
        $scope.playlists = [
            {title: 'Reggae', id: 1},
            {title: 'Chill', id: 2},
            {title: 'Dubstep', id: 3},
            {title: 'Indie', id: 4},
            {title: 'Rap', id: 5},
            {title: 'Cowbell', id: 6}
        ];


        // if we aren't showing the overlay, lets show it now
        if (!showingOverlay) {
            showingOverlay = true;
            console.log("First Pass Through - show the overlay");
            $ionicLoading.show({
                template: '<h2>A message from cat central</h2><img src="img/cat.jpg" width="256" height="256"/><div>Stop playing angry birds and feed me.</div>',
                content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 300,
                showDelay: 0
            });
        }

        // We are using a timeout to give Ionic a chance to render the HTML before we hook the element
        $timeout(function () {
            if (showingOverlay) {
                // we don't need anything fancy here, we use the DOM's query selector to find the loading div
                var element = angular.element(document.querySelector('.loading')),
                // and then we hook the
                    tapGesture = $ionicGesture.on('tap', function (evt) {
                        console.log("TAP RECEIVED!!!");
                        $ionicLoading.hide();
                        $ionicGesture.off(tapGesture, 'tap');
                        showingOverlay = false;
                    }, element);
            }
        }, 50);


    })

    .controller('PlaylistCtrl', function ($scope, $stateParams) {
    });
