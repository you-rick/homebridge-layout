$(function () {
    $('.second-line select, .selectboxes select').selectBoxIt();

    $('.label_check').click(function(){
        setupLabel();
    });
    setupLabel();

    function setupLabel() {
        if ($('.label_check input').length) {
            $('.label_check span').each(function(){
                $(this).removeClass('c_on');
            });
            $('.label_check input:checked').each(function(){
                $(this).parent('label').find('span').addClass('c_on');
            });
        };
    }

    $('#advanced-search').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('closed')) {
            $('.advanced-search-form-wrap').slideDown(400);
            $(this).removeClass('closed');
        }
        else {
            $('.advanced-search-form-wrap').slideUp(400);
            $(this).addClass('closed');
        }
    });
});