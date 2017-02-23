//https://en.wikipedia.org/w/api.php?action=opensearch&search=&
$(function() {
    var searchTerm, resultsURL;
    $("#searchTerm").keyup(function() {
        searchTerm = $(this).val();
        resultsURL = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" + searchTerm;
        $("#results").empty();
        getJson();
    });

    function getJson() {
        $.ajax({
                url: resultsURL,
                async: 'false',
                dataType: 'json',
            })
            .done(function(data) {
                for (var i = 0; i < data[1].length; i++) {
                    $("#results").append('<a target="_blank" href=' + data[3][i] + '> <h3>' + data[1][i] + '</h3> <p> ' + data[2][i] + '</p> </a>')
                }
            })
            .fail(function() {})
            .always(function() {});
    };
})
