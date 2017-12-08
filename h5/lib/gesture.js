$(document).ready(function(){
  
  $(".page").on("touchstart", function(e) {
	 // e.preventDefault();
	 startX = e.originalEvent.changedTouches[0].pageX,
	 startY = e.originalEvent.changedTouches[0].pageY;
	});
	$(".page").on("touchmove", function(e) {
	 // e.preventDefault();
	 moveEndX = e.originalEvent.changedTouches[0].pageX,
	 moveEndY = e.originalEvent.changedTouches[0].pageY,
	 X = moveEndX - startX,
	 Y = moveEndY - startY;
	  
	 if ( X > 0 ) {
	  alert("left ---> right");
	 }
	 else if ( X < 0 ) {
	  alert("left <---- right");
	 }
	 else if ( Y > 0) {
	  alert("向下滑动");
	 }
	 else if ( Y < 0 ) {
	  alert("向上滑动");
	 }
	 else{
	  alert("just touch");
	 }
	});

});