// target _blank for all element a have external href
//some vars
//1: dark 0: light
var storageKey = 'theme';
var storageContent = sessionStorage.getItem(storageKey);
if(storageContent) {
	if(storageContent === '0') onThemeLightState();
	else onThemeDarkState();
}
else {
	storageContent = '0';
	onThemeLightState();
} 
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
		if(storageContent === '0') {
			$(".theme-dark").css({
			"opacity" : 0,
			"visibility": "hidden"
			});
		}
		else {
			$(".theme-light").css({
			"opacity" : 0,
			"visibility": "hidden"
			});
		}
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
		if(storageContent === '0') {
			$(".theme-dark").css({
			"opacity" : 1,
			"visibility": "visible"
			});
		}
		else {
			$(".theme-light").css({
			"opacity" : 1,
			"visibility": "visible"
			});
		}
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
				"background-color": "transparent",
				"opacity": 1,
				"border-radius": 0
			});
			$("#work-mockup").css({
				"background-color": "transparent",
				"opacity": 1,
				"border-radius": 0
			});
			if(theme == 0) {
				$("#work-template").css({
					"color": "#343A40",
				});
				$("#work-mockup").css({
					"color": "#343A40",
				});
			}
			else {
				$("#work-template").css({
					"color": "#fff",
				});
				$("#work-mockup").css({
					"color": "#fff",
				});
			}
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
				"background-color": "transparent",
				"opacity": 1,
				"border-radius": 0
			});
			$("#work-mockup").css({
				"background-color": "transparent",
				"opacity": 1,
				"border-radius": 0
			});
			if(theme == 0) {
				$("#work-all").css({
					"color": "#343A40",
				});
				$("#work-mockup").css({
					"color": "#343A40",
				});
			}
			else {
				$("#work-all").css({
					"color": "#fff",
				});
				$("#work-mockup").css({
					"color": "#fff",
				});
			}
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
				"background-color": "transparent",
				"opacity": 1,
				"border-radius": 0	});
			$("#work-all").css({
				"background-color": "transparent",
				"opacity": 1,
				"border-radius": 0
			});
			if(theme == 0) {
				$("#work-template").css({
					"color": "#343A40",
				});
				$("#work-all").css({
					"color": "#343A40",
				});
			}
			else {
				$("#work-template").css({
					"color": "#fff",
				});
				$("#work-all").css({
					"color": "#fff",
				});
			}
		}
	});

//submit-form
	$(document).ready(function() {
		$("#form").submit(function() {
			alert("Message sent successfully!")
		});
	});


//theme
function onThemeLightState() {
	sessionStorage.setItem(storageKey, 0);
	$(".theme-light").css({
			"opacity" : 0,
			"visibility": "hidden"
		});
	$(".theme-dark").css({
			"opacity" : 1,
			"visibility": "visible"
		});
	$(".home").css({
			"background-image": "url(./img/bg-home2.jpg)"
		});
	$(".signal").css({
			"background-image": "url(./img/sign.png)"
		});
	$(".left-text").css({
			"color": "#000"
		});
	$(".menu-icon").css({
			"color": "#000"
		});
	$("li").css({
			"color": "#000"
		});
	$(".smenu-line").css({
			"background-color": "#000"
		});
	$("body").css({
		"background-color": "#fff"
	});
	$(".font-theme").css({
			"color": "#343A40"
		});
	$(".font-theme-content").css({
			"color": "#6c757d"
		});
}
function onThemeDarkState() {
	sessionStorage.setItem(storageKey, 1);
	$(".theme-dark").css({
			"opacity" : 0,
			"visibility": "hidden"
		});
	$(".theme-light").css({
			"opacity" : 1,
			"visibility": "visible"
		});
	$(".home").css({
			"background-image": "url(./img/bg-dark-home2.jpg)"
		});
	$(".signal").css({
			"background-image": "url(./img/sign-dark.png)"
		});
	$(".left-text").css({
			"color": "#fff"
		});
	$(".menu-icon").css({
			"color": "#fff"
		});
	$("li").css({
			"color": "#fff"
		});
	$(".smenu-line").css({
			"background-color": "#fff"
		});
	$("body").css({
		"background-color": "#222",
	});
	$(".font-theme").css({
			"color": "#fff"
		});
	$(".font-theme-content").css({
			"color": "rgb(192,192,192)"
		});
}
$(".theme-light").click(onThemeLightState);
$(".theme-dark").click(onThemeDarkState);