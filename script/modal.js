$(document).ready(function () {
    $('.ordercall__btn').click(function () {
        $('#popupContainer').css('display', 'flex');
        $('body').css('overflow', 'hidden');
        
    })

    $('#popupContainer').click(function (event) {
        if (event.target === this) {
            $('#popupContainer').css('display', 'none');
            $('body').css('overflow', '');
        }
    })

    $('#popup__submit').click(function () {
        var name = $('#popup__name').val();
        var phone = $('#popup__phone').val();
        /* var popupCheckbox = $('#popup__checkbox'); */
        if (name == '' || phone == '') {
            alert('Заполните поля');
        } else if ($('#popup__checkbox').prop('checked') == false) {
            alert('Согласись, а?')
        } else {
            $.post('script/api.php', { 'name': name, 'phone': phone }, function (response) {
                alert(response);
            });
            $('#popup__name').val('');
            $('#popup__phone').val('');
            $('#popupContainer').css('display', 'none');
            $('body').css('overflow', '');
        }
    });
});
