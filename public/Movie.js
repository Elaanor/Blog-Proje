$('#addFilm').on('click', function() {
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
            $('#title').val(''); $('#director').val(''); $('#url').val('');
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: data.message,
                showConfirmButton: false,
                timer: 1000
              })
            setTimeout(function() {
                location.reload()
            }, 1000)
        },
        error: function (jqXhr, textStatus, errorThrown) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: jqXhr.responseJSON.message,
                showConfirmButton: false,
                timer: 1000
              })
        }
    })
})



function deleteFilm (id) {
    $.ajax({
        url: `http://localhost:3000/delete`,
        dataType: 'json',
        type: 'delete',
        contentType: 'application/json',
        data: JSON.stringify(
            {
                id
            }
        ),
        processData: false,
        success: function (data, textStatus, jQxhr) {
            console.log('success', data)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: data.message,
                showConfirmButton: false,
                timer: 1000
              })
            setTimeout(function() {
                location.reload()
            }, 1000)
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log('error', errorThrown)
        }
    })
}

function updateFilm (id) {
    $.ajax({
        url: `http://localhost:3000/getById`,
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(
            {
                id
            }
        ),
        processData: false,
        success: function (data, textStatus, jQxhr) {
            console.log('get data by id='.concat(id), data.movieInfo)
            let {_id, title, director, url} = data.movieInfo
            $('#upt_title').val(title); $('#upt_director').val(director); $('#upt_url').val(url); $('#upt_id').val(_id)
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log('error @ get data by id='.concat(id), errorThrown)
        }
    })
}

$('#uptButton').on('click', function() {
    $.ajax({
        url: `http://localhost:3000/update`,
        dataType: 'json',
        type: 'put',
        contentType: 'application/json',
        data: JSON.stringify(
            {
                id: $('#upt_id').val(), title: $('#upt_title').val(), director: $('#upt_director').val(), url: $('#upt_url').val()
            }
        ),
        processData: false,
        success: function (data, textStatus, jQxhr) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: data.message,
                showConfirmButton: false,
                timer: 1000
              })
            setTimeout(function() {
                location.reload()
            }, 1000)
        },
        error: function (jqXhr, textStatus, errorThrown) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: jqXhr.responseJSON.message,
                showConfirmButton: false,
                timer: 1000
              })
        }
    })
})