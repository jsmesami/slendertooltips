Slender Tooltips
================

Very lightweight, yet flexible jQuery plugin to display CSS-styleable sticky hover tooltips.
This one will __display thumbnail__ if the target link is a picture!

Why?
----

As it happens, I was tired of searching for a plugin that fits my needs, is reasonably
fast, small and not overly complicated. After some hours of frustration I sat down and 
wrote my own snippet of code, which I can now share!

Installation
------------

### Get the source 

	git clone git://github.com/jsmesami/slendertooltips.git

Locate the `src` directory, find the minified version of the plugin there, together with
a basic stylesheet.

### Include it in your html

Obviously, you have to add JQuery as well.

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js"></script>
	<script src="jquery.tooltips.min.js"></script>

Include the basic CSS:

	<link href="tooltips.css" rel="stylesheet" type="text/css">

Usage
-----

### Select desired elements 

...and bind your tooltips to them:

	<script>
	$(function() {
		$('a.tooltips').tooltips();
	});
	</script>

Selected elements must have `title` attribute, which contains text to be displayed inside 
the tooltip. If they also refer to an image, it's going to be displayed above the text.
Note that you can override this behaviour by using your custom markup factory function
(see below).

### Style your tooltips

Tooltips have __no default appearance__, so it is entirely up to you to style them. 
I's very simple, see the `example` directory for some inspiration.

By default, the markup structure of the tooltip is as follows:

	<div class="tt">
		<div class="wrap">
			<img class=thumb></img>
			<div class="title">sometitle</div>
		</div>
	</div>

The plugin inserts the tooltip inside the parent element of the 'tooltipped' one. You 
can take advantage of this when styling it.

### Fiddle with the parameters

You can override the distance of the tooltip from the cursor, but best of all, you can also
entirely redefine the markup generated inside the container `div` (the one with `class="tt"`).
To do that, specify a factory function which constructs a custom markup based on context
- as you can see in following example, `obj` refers to the jQuery object being 'tooltipped'.

	<script>
	$(function() {
		$('a.tooltips').tooltips({
			offsetX: 5,
			offsetY: 10,
			makeMarkup: function(obj) {
				var title = obj.attr('title');
				return title && title.length ? 'title: ' + title : '';
			}
		});
	});
	</script>

Resulting markup:

	<div class="tt">
		title: sometitle
	</div>

### ...or learn from examples

Not following? Have a look inside the `example` directory.

Acknowledgements
----------------

The code was originally inspired by [@Kriesi](http://twitter.com/kriesi)'s [article](http://www.kriesi.at/archives/create-simple-tooltips-with-css-and-jquery),
heavily modified, cleaned up and gently wrapped into a JQuery plugin.
