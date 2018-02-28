$("input, textarea").change(function(){
	var values = $('form').serialize();
	$.ajax({
	  type: "POST",
	  url: 'dump.php',
	  data: values,
	  success: function( data ) {
	  	$( "span" ).html( data );
		}
	});
});