// target _blank for all element a have external href
// mainmenu
	$("#menu-icon").click(function() {
		$("#main-menu").css("display", "flex");
		$("#aside").css("visibility", "hidden");
		$(".smenu-line").css("transition", "none");
		$(".work-item").css({
			"opacity" : 0,
			"visibility": "hidden"
		});
		$(".progress").css({
			"opacity" : 0,
			"visibility": "hidden"
		});
	});
	$("#main-menu").click(function() {
		$("#main-menu").css("display", "none");
		$("#aside").css("visibility", "visible");
		$(".smenu-line").css("transition", "all 500ms");
		$(".work-item").css({
			"opacity" : 1,
			"visibility": "visible"
		});
		$(".progress").css({
			"opacity" : 0.6,
			"visibility": "visible"
		});
	});

// right-side
	$(".smenu-link").hover(function(event) {
		var attribute = event.target;
		var i = $(this).data("id");
		console.log(i);
		if(i === 5) {
			$("#smenu-title-1").css("visibility", "visible");
			console.log("Loaded 5");
		}
		else if(i === 4) {
			$("#smenu-title-2").css("visibility", "visible");
		}
		else if(i === 3) {
			$("#smenu-title-3").css("visibility", "visible");
		}
		else if(i === 2) {
			$("#smenu-title-4").css("visibility", "visible");
		}
		else if(i === 1) {
			$("#smenu-title-5").css("visibility", "visible");
		}

	 }, function(event) {
		var attribute = event.target;
		var i = $(this).data("id");
		console.log(i);
		if(i === 5) {
			$("#smenu-title-1").css("visibility", "hidden");
		}
		else if(i === 4) {
			$("#smenu-title-2").css("visibility", "hidden");
		}
		else if(i === 3) {
			$("#smenu-title-3").css("visibility", "hidden");
		}
		else if(i === 2) {
			$("#smenu-title-4").css("visibility", "hidden");
		}
		else if(i === 1) {
			$("#smenu-title-5").css("visibility", "hidden");
		}

	 });	// right-side

//typing-effect
	var TxtRotate = function(el, toRotate, period) {
	  this.toRotate = toRotate;
	  this.el = el;
	  this.loopNum = 0;
	  this.period = parseInt(period, 10) || 2000;
	  this.txt = '';
	  this.tick();
	  this.isDeleting = false;
	};

	TxtRotate.prototype.tick = function() {
	  var i = this.loopNum % this.toRotate.length;
	  var fullTxt = this.toRotate[i];

	  if (this.isDeleting) {
	    this.txt = fullTxt.substring(0, this.txt.length - 1);
	  } else {
	    this.txt = fullTxt.substring(0, this.txt.length + 1);
	  }

	  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	  var that = this;
	  var delta = 300 - Math.random() * 100;

	  if (this.isDeleting) { delta /= 2; }

	  if (!this.isDeleting && this.txt === fullTxt) {
	    delta = this.period;
	    this.isDeleting = true;
	  } else if (this.isDeleting && this.txt === '') {
	    this.isDeleting = false;
	    this.loopNum++;
	    delta = 500;
	  }

	  setTimeout(function() {
	    that.tick();
	  }, delta);
	};

	window.onload = function() {
	  var elements = document.getElementsByClassName('txt-rotate');
	  for (var i=0; i<elements.length; i++) {
	    var toRotate = elements[i].getAttribute('data-rotate');
	    var period = elements[i].getAttribute('data-period');
	    if (toRotate) {
	      new TxtRotate(elements[i], JSON.parse(toRotate), period);
	    }
	  }
	  // INJECT CSS
	  var css = document.createElement("style");
	  css.type = "text/css";
	  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
	  document.body.appendChild(css);
	};

//working-item
	$(".nav-skills-link").click(function() {
		if($(this).data("filter") === "all") {
			$(".work-all").css({
				"display" : "flex"
			});
			$(".work-mockup").css({
				"display" : "none"
			});
			$(".work-template").css({
				"display" : "none"
			});
			$(this).css({
				"background-color": "#E24727",
				"opacity": 1,
				"color": "#fff",
				"border-radius": "20px"
			});
			$("#work-template").css({
				"background-color": "#fff",
				"opacity": 1,
				"color": "#343A40",
				"border-radius": 0
			});
			$("#work-mockup").css({
				"background-color": "#fff",
				"opacity": 1,
				"color": "#343A40",
				"border-radius": 0
			});
		}
		else if($(this).data("filter") === "template") {
			$(".work-template").css({
				"display" : "flex"
			});
			$(".work-mockup").css({
				"display" : "none"
			});
			$(".work-all").css({
				"display" : "none"
			});
			$(this).css({
				"background-color": "#E24727",
				"opacity": 1,
				"color": "#fff",
				"border-radius": "20px"
			});
			$("#work-all").css({
				"background-color": "#fff",
				"opacity": 1,
				"color": "#343A40",
				"border-radius": 0
			});
			$("#work-mockup").css({
				"background-color": "#fff",
				"opacity": 1,
				"color": "#343A40",
				"border-radius": 0
			});
		}
		else if($(this).data("filter") === "mockup") {
			$(".work-template").css({
				"display" : "none"
			});
			$(".work-all").css({
				"display" : "none"
			});
			$(".work-mockup").css({
				"display" : "flex"
			});
			$(this).css({
				"background-color": "#E24727",
				"opacity": 1,
				"color": "#fff",
				"border-radius": "20px"
			});
			$("#work-template").css({
				"background-color": "#fff",
				"opacity": 1,
				"color": "#343A40",
				"border-radius": 0	});
			$("#work-all").css({
				"background-color": "#fff",
				"opacity": 1,
				"color": "#343A40",
				"border-radius": 0
			});
		}
	});

//submit-form
	$(document).ready(function() {
		$("#form").submit(function() {
			alert("Message sent successfully!")
		});
	});