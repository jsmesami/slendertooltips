$.fn.tooltips = function(options) {
    var opts = $.extend({}, $.fn.tooltips.defaults, options);

    return this.each(function() {
        var tt = $('<div class="tt">').append(opts.makeMarkup($(this)));

        $(this)
            .mousemove(function(event) {
                var border_top = $(window).scrollTop(),
                    border_right = $(window).width(),
                    left_pos = 0,
                    top_pos = 0;

                if (border_right - (opts.offsetX * 2) >= tt.width() + event.pageX) {
                    left_pos = event.pageX + opts.offsetX;
                }
                else {
                    left_pos = border_right - tt.width() - opts.offsetX;
                }

                if (border_top + (opts.offsetY * 2) >= event.pageY - tt.height()) {
                    top_pos = border_top + opts.offsetY;
                }
                else {
                    top_pos = event.pageY - tt.height() - opts.offsetY;
                }

                tt.css({
                    left: left_pos,
                    top: top_pos
                });
            })
            .mouseout(function() {
                tt.css('left', '-9999px');
            })
            .removeAttr('title').parent().append(tt);
    });
}

$.fn.tooltips.defaults = {
    offsetX: 10,
    offsetY: 10,

    makeMarkup: function(obj) {

        var markup = $('<div class="wrap">'),
            title = obj.attr('title');

        $('<img>', {
            'class': 'thumb',
            src: obj.attr('href'),
            load: function() { markup.prepend(this); }
        });

        if (title && title.length) {
            $('<div class="title">').text(title).prependTo(markup);
        }

        return markup;
    }
};
