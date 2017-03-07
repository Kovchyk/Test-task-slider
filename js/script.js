$(document).ready(function() {

	          var next = $(".next");
	          var prev = $(".prev");
	        var listLi = $(".list li");
	        var infoLi = $(".info li");
	        var active = $(".list li.active");
	          var info = $(".info");
	    var listHolder = $(".list-holder");
	  var infoLiActive = $(".info li.active");
	      var switcher = $(".switcher");
	       var current = $(".switcher li.active");
	      var mSeconds = 500;
	   var slideHeight = $(".info li").height();
	       var isReady = false;
var switcherBackground = $(".switcher-background");

	switcherBackground.outerHeight( current.outerHeight() );
	switcherBackground.outerWidth( current.outerWidth() );

	hideNotActive(listLi);
	hideNotActive(infoLi);

	listHolder.on("click", function() {

		if (isReady) {
			return false;
		}

		isReady = true;
		switchNextPic();
		
	});

	next.on("click", function(event) {

		event.preventDefault();

		if (isReady) {
			return false;
		}

		isReady = true;
		switchNextPic();

	});

	prev.on("click", function(event) {

		event.preventDefault();

		if (isReady) {
			return false;
		}

		isReady = true;
		switchPrevPic();

	});

	switcher.on("click", "a", function(event) {

		event.preventDefault();

		if (isReady) {
			return false;
		}

		isReady = true;
		switchToCurrent.call( $(this) );
		slideBackroundEffect.call( $(this), ".switcher-background" );

	});
	
	//---------functions----------------

	function hideNotActive(arr) {

		$.each(arr, function(i, elem) {

			if ( $(elem).hasClass("active") ) {
				$(elem).show();
			} else {
				$(elem).hide();
			}

		});

	}

	function switchNextPic() {
		
		slideNext();

		if ( current.index() === $(".switcher li").length - 1) {

			active.removeClass("active").fadeOut(mSeconds, function() {
				active = $(".list li").eq(0).addClass("active").fadeIn(mSeconds);
				isReady = false;
			});

			current.removeClass("active");
			current = $(".switcher li").eq(0).addClass("active");

			$(".switcher-background").animate({
				left: current.position().left,
				width: current.outerWidth()
			}, mSeconds);

			return false;

		}

		active.removeClass("active").fadeOut(mSeconds, function() {
			active = active.next().addClass("active").fadeIn(mSeconds);
			isReady = false;
		});
	
		current.removeClass("active");
		current = current.next().addClass("active");

		$(".switcher-background").animate({
			left: current.position().left,
			width: current.outerWidth()
		}, mSeconds);

		return false;

	}

	function slideNext() {

		slideHeight = $(".info").height();

		if ( current.index() === $(".switcher li").length - 1) {
			$(".info").animate({
				marginTop: -slideHeight,
				opacity: 0
			}, mSeconds, function() {
				infoLiActive.removeClass("active").hide();
				infoLiActive = $(".info li").eq(0).addClass("active").show();
			})
			.animate({
				marginTop: 0,
				opacity: 1
			}, mSeconds);

			return false;
		}

		$(".info").animate({
			marginTop: -slideHeight,
			opacity: 0
		}, mSeconds, function() {
			infoLiActive.removeClass("active").hide();
			infoLiActive = infoLiActive.next().addClass("active").show();
		})
		.animate({
			marginTop: 0,
			opacity: 1
		}, mSeconds);

	}

	function switchPrevPic() {

		slidePrev();

		if (current.index() === 0) {
			active.removeClass("active").fadeOut(mSeconds, function() {
				active = $(".list li").eq( $(".switcher li").length - 1 ).addClass("active").fadeIn(mSeconds);
				isReady = false;
			});

			current.removeClass("active");
			current = $(".switcher li").eq( $(".switcher li").length - 1 ).addClass("active");

			$(".switcher-background").animate({
				left: current.position().left,
				width: current.outerWidth()
			}, mSeconds);

			return false;
		}

		active.removeClass("active").fadeOut(mSeconds, function() {
			active = active.prev().addClass("active").fadeIn(mSeconds);
			isReady = false;
		});

		current.removeClass("active");
		current = current.prev().addClass("active");

		$(".switcher-background").animate({
			left: current.position().left,
			width: current.outerWidth()
		}, mSeconds);

		return false;

	}

	function slidePrev() {

		slideHeight = $(".info").height();

		if (current.index() === 0) {

			$(".info").animate({
				marginTop: -slideHeight,
				opacity: 0
			}, mSeconds, function() {
				infoLiActive.removeClass("active").hide();
				infoLiActive = $(".info li").eq( $(".switcher li").length - 1 ).addClass("active").show();
			})
			.animate({
				marginTop: 0,
				opacity: 1
			}, mSeconds);

			return false;
		}

		$(".info").animate({
			marginTop: -slideHeight,
			opacity: 0
		}, mSeconds, function() {
			infoLiActive.removeClass("active").hide();
			infoLiActive = infoLiActive.prev().addClass("active").show();
		})
		.animate({
			marginTop: 0,
			opacity: 1
		}, mSeconds);

	}

	function switchToCurrent() {

		if ( $(this).parent().hasClass("active") ) {
			isReady = false;
			return false;
		}

		slideCurrent();
		current.removeClass("active");
		current = $(this).parent().addClass("active");
		active.removeClass("active").fadeOut(mSeconds, function() {
			active = $(".list li").eq( current.index() ).addClass("active").fadeIn(mSeconds);
			isReady = false;
		});

		return false;	

	}

	function slideCurrent() {

		slideHeight = $(".info").height();

		$(".info").animate({
			marginTop: -slideHeight,
			opacity: 0
		}, mSeconds, function() {
			infoLiActive.removeClass("active").hide();
			infoLiActive = $(".info li").eq( current.index() ).addClass("active").show();
		})
		.animate({
			marginTop: 0,
			opacity: 1
		}, mSeconds);

	}

	function slideBackroundEffect(elemToAnimate) {

		$(elemToAnimate).animate({
			left: $(this).position().left,
			width: $(this).outerWidth()
		}, mSeconds);

	}

});