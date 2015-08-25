var myModule = (function() {
	//инициализация модуля
	var init = function () {
		_setUpListners();
		};
	//прослушка событий
	var _setUpListners = function () {
		$('#add-new-work').on('click', _showModal);//открытие модального окна
	};
	//работа с ммодальным окном
	var _showModal = function (ev) {

			ev.preventDefault();

			var divBpopup = $('#new-work-popup'),
				form = divBpopup.find('.form');


				divBpopup.bPopup({
				speed: 450,
				transition: 'slideDown'
			});
		};

	return {
		init: init
	};

})();

myModule.init();