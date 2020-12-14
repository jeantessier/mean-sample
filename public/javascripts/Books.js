angular

    .module("booksApp", ["ngResource"])

    .filter("sanitize", ['$sce', function($sce) {
        return htmlCode => {
            return $sce.trustAsHtml(htmlCode);
        }
    }])

    .controller("BooksCtrl", ['BooksModel', function(BooksModel) {
        const books = this;

        books.title = "Readings";

        BooksModel.all().then(result => {
            books.title = result.title;
            books.books = result.books;
        });
    }])

    .service("BooksModel", ['$http', '$log', '$q', 'BACKEND_URL', function($http, $log, $q, BACKEND_URL) {
        const service = this;

        service.all = () => {
            $log.info("Calling " + BACKEND_URL);

            const deferred = $q.defer();

            $http.get(BACKEND_URL).then(
                    response => {
                        $log.info("success data");
                        $log.info(response.data);
                        service.title = response.data.title;
                        service.books = response.data.books;
                        deferred.resolve(service);
                    },
                    deferred.reject
                );

            return deferred.promise;
        };
    }]);
