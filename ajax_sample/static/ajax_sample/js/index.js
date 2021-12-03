function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
    beforeSend: function (xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

let forecasts = []

$('#update').submit((e) => {
    e.preventDefault()
    const days = $('#days').val()
    $.getJSON('/forecast', { days }, (json) => {
        console.log(json)
        forecasts = json.forecasts
        render()
    })
})

const render = () => {
    $('#forecasts').html(forecasts.map((f, i) =>
`<li>Day ${i + 1}: ${f.type}
    <img src="${f.src}" alt="${f.alt}">
</li>`
    ).join('\n'))
}
