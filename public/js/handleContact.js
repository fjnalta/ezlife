function sendMail() {
    console.log($('#name').val());
    console.log($('#email').val());
    console.log($('#comments').val());

    grecaptcha.ready(function() {
        grecaptcha.execute('6LcXUMYaAAAAAFWir-2W9qyyHirog_LKXx04BXQQ', {action: 'homepage'}).then(function(token) {
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