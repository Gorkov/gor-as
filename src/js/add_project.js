var myModule = (function () {
console.log('pkmp');
var _setUpListners = function () {
	console.log('pkmp');
				$('#add-new-work').on('click', _showModal);

};


var _showModal = function () {
console.log('pkmp');
	$('#new-work-popup').bPopup ({
		speed: 650,
		transition: 'slideDown',
		onClose: function () {
			this.find('.form')
				.trigger("reset");
		}
	});
};

}) ();

