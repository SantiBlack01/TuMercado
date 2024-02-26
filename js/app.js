document.addEventListener('DOMContentLoaded', function () {
    var searchForm = document.getElementById('searchForm');
    var searchInput = document.getElementById('searchInput');
    var searchButton = document.getElementById('searchButton');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
        var searchTerm = searchInput.value;
        alert('Búsqueda realizada: ' + searchTerm);
    });
});