var validate = (function () {

	//Инициализация модуля
	var init = function () {
		_setUpListners();
	};

	//Прослушка событий
	var _setUpListners = function () {
		$('form').on('keydown', '.has-error', _removeError);
		$('form').on('reset', _clearForm);
		$('#login').on('submit', _submitForm);
		$('#add-new-project').on('submit', _submitForm);
		$('#contact-me').on('submit', _submitForm);
	};

	var _submitForm = function (ev) {
		 ev.preventDefault();
	      var form = $(this),
	      	  vali = validForm(form);

	      vali.init;
	    };

	var _removeError = function () {
		$(this).removeClass('has-error');
	};

	var _clearForm = function (form) {
		var form = $(this);
		form.find('.input, .textarea').trigger('hideTooltip');
		form.find('.has-error').removeClass('has-error');
	};
	//создание тултипов
	var _createQtip = function (element, position) {
		console.log('Кутип');
		if (position === 'right') {
			position = {
				my: 'left center',
				at: 'right center'
			}
		}else{
			position = {
				my: 'right center',
				at: 'left center',
				adjust: {
					method: 'shift none'
				}
			}
		}

		element.qtip ({
			content: {
				text: function() {
					return $(this).attr('qtip-content');
				}
			},
			show: {
				event: 'show'
			},
			hide: {
				event: 'keydown hideTooltip'
			},
			position: position,
			style: {
				classes: 'qtip-mystyle qtip-rounded',
				tip: {
					height: 10,
					width: 16
				}
			}
		}).trigger('show');
	};
	//универсальная функция
	var validForm = function (form) {
		console.log('Валид');
		var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
			valid = true;

			//проход по всем элементам формы
		$.each(elements, function (index, val) {
			var element = $(val),
				val = element.val(),
				pos = element.attr('qtip-position');

			if(val.length === 0){
				element.addClass('has-error');
				_createQtip(element, pos);
				valid = false;
			}
		});

		return valid;

	}
	//Возврат объекта(публичные методы)
	return {
		init: init,
		validForm: validForm
	};

})();

validate.init();