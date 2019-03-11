var bg = document.querySelector(".wrapper-background");
var firstSlider = document.querySelector(".first-slider-goods-item");
var secondSlider = document.querySelector(".second-slider-goods-item");
var thirdSlider = document.querySelector(".third-slider-goods-item");
var firstBtnSlider = document.querySelector(".btn-first-slider");
var secondBtndSlider = document.querySelector(".btn-second-slider");
var thirdBtnSlider = document.querySelector(".btn-third-slider");
var feedback = document.querySelector(".btn-feedback-info");
var popup = document.querySelector(".modal");
var form = document.querySelector(".feedback-form");
var login = document.querySelector("[name=user-name]");
var email = document.querySelector("[name=user-email");
var feedbackClose = document.querySelector(".modal-close");
var overlay = document.querySelector(".overlay");

firstBtnSlider.addEventListener("click", function(evt) {
	evt.preventDefault();
	bg.classList.remove("wrapper-background--third");
	bg.classList.remove("wrapper-background--second");
	bg.classList.add("wrapper-background--first");
	thirdSlider.classList.remove("slider-goods-item--active");
	secondSlider.classList.remove("slider-goods-item--active");
	firstSlider.classList.add("slider-goods-item--active");
	thirdBtnSlider.classList.remove("slider-btn--active");
	secondBtndSlider.classList.remove("slider-btn--active");
	firstBtnSlider.classList.add("slider-btn--active");
});

secondBtndSlider.addEventListener("click", function(evt) {
	evt.preventDefault();
	bg.classList.remove("wrapper-background--first");
	bg.classList.remove("wrapper-background--third");
	bg.classList.add("wrapper-background--second");
	firstSlider.classList.remove("slider-goods-item--active");
	thirdSlider.classList.remove("slider-goods-item--active");
	secondSlider.classList.add("slider-goods-item--active");
	firstBtnSlider.classList.remove("slider-btn--active");
	thirdBtnSlider.classList.remove("slider-btn--active");
	secondBtndSlider.classList.add("slider-btn--active");
});

thirdBtnSlider.addEventListener("click", function(evt) {
	evt.preventDefault();
	bg.classList.remove("wrapper-background--first");
	bg.classList.remove("wrapper-background--second");
	bg.classList.add("wrapper-background--third");
	firstSlider.classList.remove("slider-goods-item--active");
	secondSlider.classList.remove("slider-goods-item--active");
	thirdSlider.classList.add("slider-goods-item--active");
	firstBtnSlider.classList.remove("slider-btn--active");
	secondBtndSlider.classList.remove("slider-btn--active");
	thirdBtnSlider.classList.add("slider-btn--active");
});

feedback.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	popup.classList.add("modal-apper");
	overlay.classList.add("overlay--active");
	login.focus();
});

feedbackClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
	overlay.classList.remove("overlay--active");
});

form.addEventListener("submit", function (evt) {
	if (!login.value || !email.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show") || feedback.classList.contains("modal-show")) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
			feedback.classList.remove("modal-show");
			overlay.classList.remove("overlay--active");
		}
	}
});

overlay.addEventListener("click", function() {
	popup.classList.remove("modal-show");
	overlay.classList.remove("overlay--active");
});