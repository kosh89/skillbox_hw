$(document).ready(function () {
    $('#header__btn').click(function () {
        $('#popupContainer').css('display', 'flex');
        $('body').css('overflow', 'hidden');
    })

    $('#popupContainer').click(function(event){
        if (event.target === this) {
            $('#popupContainer').css('display', 'none');
            $('body').css('overflow', '');
        }
    })

    $('#popup__submit').click(function(){
        var name = $('#popup__name').val();
        var phone = $('#popup__phone').val();
        if(name == '') {
            alert('Введите имя');
        } else {
            $.post('script/api.php', {'name' : name, 'phone' : phone}, function(response){
                alert(response);
            });
        }
    });
});