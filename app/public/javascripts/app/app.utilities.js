/*
 * app.utilities.js
 *
 */

var App = App || {};

App.Utilities = (function(window, document) {

	var _$window = $(window),
		_$body = $(document.body);

	var self = {

		'supportsCanvas': function() {
			var canvas = document.createElement('canvas');
			if (canvas.getContext) {
				return true;
			} else {
				return false;
			}
		},

		'supportsPlaceholder': function() {
			var i = document.createElement('input');
			if ('placeholder' in i) {
				return true;
			} else {
				return false;
			}
		},

		'setInputPlaceholder': function(input, placeholderTxt) {
			var $input = $('#' + input),
				placeholder = placeholderTxt;

			$input.val(placeholder).addClass('placeholder').focus(function() {
				if ($input.val() === placeholder) {
					$input.val('').removeClass('placeholder');
				}
			}).blur(function() {
				if ($input.val() === '') {
					$input.val(placeholder).addClass('placeholder');
				}
			});
		},

		'supportsCss3': function(property) {
			var elem = document.body || document.documentElement,
				cssStyle = elem.style;

			// No css support detected
			if (typeof cssStyle === 'undefined') {
				return false;
			}

			// Tests for standard property
			if (typeof cssStyle[property] === 'string') {
				return true;
			}

			// Tests for vendor specific property
			var vendors = ['Moz', 'Webkit', 'Khtml', 'O', 'Ms'],
				len = vendors.length,
				property = property.charAt(0).toUpperCase() + property.substr(1);
			while (len--) {
				if (typeof cssStyle[vendors[len] + property] === 'string') {
					return true;
				}
			}

			return false;
		},

		'isIpad': function() {
			return (navigator.userAgent.match(/iPad/i) === null) ? false : true;
		},

		'setupCustomSelect': function() {
			$('.input_select.custom').each(function() {
				var $this = $(this),
					polyfill = '<span class="selected" /><span class="cap_right"><span class="arrow">&nbsp;</span></span>';
				$this.find('select').wrap('<span />').before(polyfill).bind('change', function() {
					$this.find('.selected').text($.text($this.find(':selected')));

				});
				$this.find('.selected').text($.text($this.find(':selected')));

				$this.find('select').focus(function() {
					$this.addClass('active');
				}).blur(function() {
					$this.removeClass('active');
				});
			});
		},

		'polyfillLocalStorage': function() {
			//Local Storage Polyfill for IE7
			if (typeof window.localStorage == 'undefined' || typeof window.sessionStorage == 'undefined')(function() {

				var Storage = function(type) {
						function createCookie(name, value, days) {
							var date, expires;

							if (days) {
								date = new Date();
								date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
								expires = "; expires=" + date.toGMTString();
							} else {
								expires = "";
							}
							document.cookie = name + "=" + value + expires + "; path=/";
						}



						function readCookie(name) {
							var nameEQ = name + "=",
								ca = document.cookie.split(';'),
								i, c;

							for (i = 0; i < ca.length; i++) {
								c = ca[i];
								while (c.charAt(0) == ' ') {
									c = c.substring(1, c.length);
								}

								if (c.indexOf(nameEQ) == 0) {
									return c.substring(nameEQ.length, c.length);
								}
							}
							return null;
						}



						function setData(data) {
							data = JSON.stringify(data);
							if (type == 'session') {
								window.name = data;
							} else {
								createCookie('localStorage', data, 365);
							}
						}



						function clearData() {
							if (type == 'session') {
								window.name = '';
							} else {
								createCookie('localStorage', '', 365);
							}
						}



						function getData() {
							var data = type == 'session' ? window.name : readCookie('localStorage');
							return data ? JSON.parse(data) : {};
						}

						// initialise if there's already data
						var data = getData();

						return {
							length: 0,
							clear: function() {
								data = {};
								this.length = 0;
								clearData();
							},
							getItem: function(key) {
								return data[key] === undefined ? null : data[key];
							},
							key: function(i) {
								// not perfect, but works
								var ctr = 0;
								for (var k in data) {
									if (ctr == i) return k;
									else ctr++;
								}
								return null;
							},
							removeItem: function(key) {
								delete data[key];
								this.length--;
								setData(data);
							},
							setItem: function(key, value) {
								data[key] = value + ''; // forces the value to a string
								this.length++;
								setData(data);
							}
						};
					};

				if (typeof window.localStorage == 'undefined') window.localStorage = new Storage('local');
				if (typeof window.sessionStorage == 'undefined') window.sessionStorage = new Storage('session');

			})();
		} //end polyfillLocalStorage()
	};
	return self;

})(this, this.document);

/*
  @description Normalizes the console.log method
*/
// usage: log('inside coolFunc',this,arguments);
// http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function() {
/*@cc_on
  return;
  @*/
	if (window.isDebugMode) {
		log.history = log.history || []; // store logs to an array for reference
		log.history.push(arguments);
		if (this.console) {
			console.log(Array.prototype.slice.call(arguments));
		}
		if (typeof App !== 'undefined' && typeof App.trigger === 'function') {
			App.trigger('log', arguments);
		}
	} else {
		log.history = log.history || []; // store logs to an array for reference
		log.history.push(arguments);
	}
};
