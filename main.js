$("#menu-icon").click(function() {
	$("#main-menu").css("display", "flex");
	$("#aside").css("visibility", "hidden");
});
$("#main-menu").click(function() {
	$("#main-menu").css("display", "none");
	$("#aside").css("visibility", "visible");
});