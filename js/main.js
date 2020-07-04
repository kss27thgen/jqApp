$(function () {
	$(".header--small").hide();

	$("html").on("click", "#openSearchBox", function () {
		$(".header--normal").hide();
		$(".header--small").show();
	});

	$("html").on("click", "#closeHeaderSmall", function () {
		$(".header--small").hide();
		$(".header--normal").show();
	});

	$(".openSidenav").on("click", function (e) {
		e.stopPropagation();
		$(".sidenav").toggleClass("active");
		$("header, main").on("click", function () {
			$(".sidenav").removeClass("active");
		});
	});
});
