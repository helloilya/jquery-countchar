/**
 *	jQuery countChar: A simple counter of characters for multiple form fields based on jQuery
 *
 *	@version: 1.1.0
 *	@author Ilya Fedotov
 *	@link: github.com/helloilya/jquery-countchar
 *	@license: MIT
 */

'use strict';

(function($) {

	$.fn.countChar = function(options) {

		var self = this,
			defaultOptions = {
				text: '', // Text for the counter
				textPosition: 'before', // Text position for the counter: `before` or `after`
				limit: false, // Maximum number of characters for each field
				limitErrorClass: 'countchar-limit-error', // Error class name for limit
				outputContainer: '#countchar-output', // Container for output text and counter
				onLimitCallback: function(el, value) {}, // Callback function called when limit condition worked
				onCounterCallback: function(number) {} // Callback function called each time when it counted the number of characters
			};

		var options = $.extend(defaultOptions, options);

		/**
		 *	Event handler
		 *	@param {object} element - Element container
		 */

		function bindEvents(element) {

			$(element).on('input', function() {
				charactersCount();
			});

		}

		/**
		 *	Count of characters in the fields
		 */

		function charactersCount() {

			var counter = 0;

			self.each(function() {

				var regex = $(this).data('countchar'),
					value = $(this).val();

				if(regex !== '') {
					regex = new RegExp(regex, 'g');
					value = (value.match(regex) || []).join('');
				}

				checkLimit(this, value);

				counter += value.length;

			});

			render(counter);

		}

		/**
		 *	Check field to limit, run limit callback
		 *	@param {object} el - Element container
		 *	@param {string} value - Field value
		 */

		function checkLimit(el, value) {

			var $el = $(el),
				limit = $el.data('countchar-limit') || options.limit;

			if(limit && value.length > limit) {
				$el.addClass(options.limitErrorClass);
				options.onLimitCallback($el, value);
			} else {
				$el.removeClass(options.limitErrorClass);
			}

		}

		/**
		 *	Output counter and text, run counter callback
		 *	@param {number} number - Number of characters
		 */

		function render(number) {

			if(options.outputContainer) {

				if(options.text && options.textPosition === 'before') {
					number = options.text + ' ' + number;
				} else if(options.text && options.textPosition === 'after') {
					number = number + ' ' + options.text;
				}

				$(options.outputContainer).html(number);

			}

			options.onCounterCallback(number);

		}

		/**
		 *	Init events
		 */

		charactersCount();

		return this.each(function() {

			bindEvents(this);

		});

	};

})(jQuery);