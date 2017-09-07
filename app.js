/* register the modules the application depends upon here*/
angular.module('listings', []);		//'listings' is the name of app


/* register the application and inject all the necessary dependencies */
var app = angular.module('directoryApp', ['listings']);