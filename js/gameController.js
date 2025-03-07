angular.module("gameApp", ['infinite-scroll']).controller('gameController', function($scope, $http) {

        $scope.games = [];
        $scope.page = 1;
        $scope.loading = false;
        $scope.gamesPerPage = 5;

        $scope.loadMore = function() {

            if ($scope.loading) return;

            $scope.loading = true;

            $http.get("../json/games.json?page=" + $scope.page).then(function(response)
            {
                $scope.games = $scope.games.concat(response.data.games);
                $scope.page++;
                $scope.loading = false;
            },
                function(error) {
                console.error("Error loading games:", error);
                $scope.loading = false;
            });
        };

        $scope.loadMore();

    });
