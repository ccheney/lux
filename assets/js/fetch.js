(function fetch() {
    $.ajax({
        url:      'assets/php/getLux.php',
        method:   'GET',
        dataType: 'json',
        success: function(data) {
            $('.lux').html(data);
        },
        complete: function() {
            setTimeout(fetch, 500);
        }
    });
})();
