$('#addFilm').on('click', function () {
    $.ajax({
        url: 'http://localhost:3000/add',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(
            {
                title: $('#title').val(), director: $('#director').val(), url: $('#url').val()
            }
        ),
        processData: false,
        success: function (data, textStatus, jQxhr) {
            console.log('success', data)
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log('error', errorThrown)
        }
    })
})