$('#email').on('blur', function () {
    let email = $(this).val();

    if (email.length <= 0
        && (email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g) || []).length !== 1) {
        $(".email").removeClass("deactive");
    } else {
        $(".email").addClass("deactive");
    }
});

$(document).ready(function() {
    $("#phone").mask("+380 (99) 999-99-99");

    $('#phone').on('blur', function () {
        let tel = $(this).val();

        if (tel.length <= 9 ) {
            $(".telephone").removeClass("deactive");
        } else {
            $(".telephone").addClass("deactive");
        }
    });

});

$('#name').on('blur', function () {
    let name = $(this).val();

    if (name.length <= 2 ) {
        $(".name").removeClass("deactive");
    } else {
        $(".name").addClass("deactive");
    }
});

$('#surname').on('blur', function () {
    let surname = $(this).val();

    if (surname.length <= 2 ) {
        $(".surname").removeClass("deactive");
    } else {
        $(".surname").addClass("deactive");
    }
});



    function checkParams() {
        var name = $('#name').val();
        var surname = $('#surname').val();
        var email = $('#email').val();
        var tel = $('#phone').val();

        if(name.length >= 2 && surname.length >= 2 && email.length >= 2 && tel.length && 2) {
            $('.shipped_form').addClass('active_form');
            $('.payment_form').addClass('active_form');
            $('#submit').removeAttr('disabled');
        } else {
            $('.shipped_form').removeClass('active_form');
            $('.payment_form').removeClass('active_form');
            $('#submit').attr('disabled', 'disabled');
        }
    }



$( "#pickup" ).on( "click", function() {
    $('#cash').attr("checked", "checked");
    $('#prepayment').removeClass("checked");
});

$( "#cour" ).on( "click", function() {
    $('#prepayment').attr("checked", "checked");
    $('#cash').removeClass("checked");
});

$('input[name="payment"]')
    .on('change', function(){
        $('input[name="payment"]')
            .prop('checked', function(){
                return this.defaultChecked;
            });

    });