//https://en.wikipedia.org/w/api.php?action=opensearch&search=&
$(function() {
    var searchTerm, resultsURL;
    $("#searchTerm").keyup(function() {
        searchTerm = $(this).val();
        resultsURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm;
        $("#results").empty();
        getJson();
        console.log(searchTerm);
    });

    function getJson() {
        $.ajax({
                url: resultsURL,
                async: 'false',
                // type: 'default GET (Other values: POST)',
                dataType: 'json',
                // data: {
                //     param1: 'value1'
                // }
            })
            .done(function(data) {
                // $("#title").html(data[1][0]);
                // $("#discription").html(data[2][0]);
                // $("#link").attr('href', data[3][0]);
                for (var i = 0; i < data[1].length; i++) {

                    $("#results").append('<a target="_blank" href=' + data[3][i] + '> <h3>' + data[1][i] + '</h3> <p> ' + data[2][i] + '</p> </a>')
                    console.log("success");
                    console.log(data);
                }
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });


    };
})
