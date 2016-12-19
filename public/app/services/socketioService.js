/**
 * Created by Frederic on 19.12.16.
 */
(function() {
    'use strict';

    angular.module('openaudit')
        .factory('socketio', socketFactory);

    socketFactory.$inject = ['$rootScope', '$window'];

    function socketFactory($rootScope, $window) {

        var socket;

        var services = {
            on: on,
            emit: emit,
            init: init
        };

        return services;

        function init() {
            var ioUrl = "http://localhost:3000";
            $window.socket = io(ioUrl);
        }

        function on(eventName, callback) {
            $window.socket.on(eventName, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    callback.apply($window.socket, args);
                });
            });
        }

        function emit(eventName, data, callback) {
            $window.socket.emit(eventName, data, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    if (callback) {
                        callback.apply($window.socket, args);
                    }
                });
            });
        }
    }
})();
