$(document).ready(function(){
    //=======email validate ============
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    
    $('#newsletter-email').keyup(function(){
        if (!validateEmail($('#newsletter-email').val())) {
            $('#newsletter-btn').attr('disabled', 'disabled');
        } else {
            $('#newsletter-btn').removeAttr('disabled', 'disabled');
        }
    });
});