;(function($){
    jQuery.fn.extend({
        toggleText: function (a, b){
            var that = this;
                if (that.text() != a && that.text() != b){
                    that.text(a);
                }
                else
                if (that.text() == a){
                    that.text(b);
                }
                else
                if (that.text() == b){
                    that.text(a);
                }
            return this;
        }
    });

    $(document).on('click', '.accordion-head', function(){
        let iconClass = $(this).children('.collapse-icon').children('span');
        if( (iconClass.hasClass('dashicons-plus-alt2') || iconClass.hasClass('dashicons-minus') )) {
            $(this).children('.collapse-icon').children('span').toggleClass('dashicons-plus-alt2 dashicons-minus');
        }else if(( iconClass.hasClass('dashicons-arrow-down-alt2') || iconClass.hasClass('dashicons-arrow-up-alt2') )) {
            $(this).children('.collapse-icon').children('span').toggleClass('dashicons-arrow-down-alt2 dashicons-arrow-up-alt2');
        }else if(( iconClass.hasClass('dashicons-plus-alt') || iconClass.hasClass('dashicons-dismiss') )) {
            $(this).children('.collapse-icon').children('span').toggleClass('dashicons-plus-alt dashicons-dismiss');
        }
        $(this).parent().children('.accordion-body').slideToggle();
    });

    $(document).on('click', '.content-head', function(){
        let iconClass = $(this).children('.collapse-icon').children('span');
        $(this).children('.collapse-content').children('span').toggleText('Show', 'Hide');
        if( (iconClass.hasClass('dashicons-plus-alt2') || iconClass.hasClass('dashicons-minus') )) {
            $(this).children('.collapse-icon').children('span').toggleClass('dashicons-plus-alt2 dashicons-minus');
        }else if(( iconClass.hasClass('dashicons-arrow-down-alt2') || iconClass.hasClass('dashicons-arrow-up-alt2') )) {
            $(this).children('.collapse-icon').children('span').toggleClass('dashicons-arrow-down-alt2 dashicons-arrow-up-alt2');
        }else if(( iconClass.hasClass('dashicons-plus-alt') || iconClass.hasClass('dashicons-dismiss') )) {
            $(this).children('.collapse-icon').children('span').toggleClass('dashicons-plus-alt dashicons-dismiss');
        }
        $(this).parent().children('.content-body').slideToggle('fast');
    });

    // Product images slider 
    $(document).ready(function() {
        $(".images-container").lightSlider({
            item: 1,
            gallery: true,
            loop: false,
            controls: true,
            prevHtml: '<span class="dashicons dashicons-arrow-left-alt2"></span>',
            nextHtml: '<span class="dashicons dashicons-arrow-right-alt2"></span>',
        }); 
    });

})(jQuery);