<!DOCTYPE html>
<html lang="en" ng-app="musicPlayerApp">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Music Player Application</title>

    <link href="node_modules/all.css" rel="stylesheet">

    <script src="node_modules/angular.min.js"></script>
    <script src="node_modules/lodash.min.js"></script>
    <script src="node_modules/angular-route.min.js"></script>
    <script src="node_modules/angular-local-storage.min.js"></script>
    <script src="node_modules/restangular.min.js"></script>
    <script src="node_modules/angular.audio.js"></script>

    <script src="app-js/app.js"></script>
    <script src="app-js/controllers.js"></script>
    <script src="app-js/services/userService.js"></script>
    <script src="app-js/services/musicService.js"></script>

    <style>

        li {
            padding-bottom: 8px;
        }
        .container {
            max-width:640px;
        }
        ul.categories {
            width: 100%;
            float:left;
            padding:0!important;
            list-style: none;
        }
        ul.categories > li {
            width:100%;
            float:left;
            margin-bottom:20px;
            border: 1px solid #e1e1e3;
            padding:20px;
            min-height: 150px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            color: #fff;
        }
        ul.categories.songs > li {
            color: #000;
        }
    </style>
</head>

<body>
<div class="container">
    <div ng-view></div>
</div>

<script src="node_modules/jquery.min.js"></script>
<script src="node_modules/bootstrap.min.js"></script>
</body>
</html>