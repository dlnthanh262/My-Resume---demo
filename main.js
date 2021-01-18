// mainmenu
	$("#menu-icon").click(function() {
		$("#main-menu").css("display", "flex");
		$("#aside").css("visibility", "hidden");
		$(".smenu-line").css("transition", "none");
	});
	$("#main-menu").click(function() {
		$("#main-menu").css("display", "none");
		$("#aside").css("visibility", "visible");
		$(".smenu-line").css("transition", "all 500ms");
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

