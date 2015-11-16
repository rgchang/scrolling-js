/* js goes here */

window.addEventListener('scroll', scroll_function);

function scroll_function(evt){
	// console.log(evt.pageY); <------ for FireFox
	//console.log(window.scrollY);
	//var num = 10;
	fix_nav();
}

var body_object = document.body;
var header_object = document.getElementsByTagName('header')[0];
var main_object = document.getElementsByTagName('main')[0];

function request_style(x, y){
	return parseInt(window.getComputedStyle(x, null).getPropertyValue(y));
}

function fix_nav(){
	var scroll_distant = window.scrollY;
	if(scroll_distant > request_style(body_object, 'padding-top')){
		header_object.classList.add('fixie');
		// main_object.style.paddingTop = header_object.clientHeight + 'px';
	} else {
		header_object.classList.remove('fixie');
	}
}

console.log(header_object.clientHeight);
