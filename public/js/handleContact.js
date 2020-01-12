function sendMail() {
    console.log($('#name').val());
    console.log($('#email').val());
    console.log($('#comments').val());

    grecaptcha.ready(function() {
        grecaptcha.execute('6Lc-tM4UAAAAAOFYBVnOVuClRjQN5qq0fXylRS6O', {action: 'homepage'}).then(function(token) {

            $.ajax({
                type: 'POST',
                url: '/contact',
                data: {
                    'username' : $('#name').val(),
                    'email' : $('#email').val(),
                    'message' : $('#comments').val(),
                    'ppnCheck' : $('#ppnCheck').prop('checked'),
                    'token': token
                },
                success: function(){
                    location.href('/');
                },
                error: function() {
                    location.reload();
                }
            });
        });
    });
}

