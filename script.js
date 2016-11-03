var page=1;
	function movement()
	{
	$('#poster  #display').remove();
	var $title= $('#poster');
	var $s=$('#searchInput');
	$.ajax({
		type: 'GET',
		url: 'http://www.omdbapi.com/?s='+$s.val() + '&page=' +page,
		success: function(data){
			console.log('success',data);
			$.each(data.Search,function(i,order){
				$title.append('<div class="col-sm-4" id="display"><div class="panel"><div class="panel-heading"><h2>'+order.Title+'</h2><center></div><img class="img-responsive" src="'+order.Poster+'" alt="No Poster"></center></div></div>');			
			});
			$("#move").attr("style","visibility:visible");

		},	
		error: function(){
			console.log("data not found");
		}
	});
	
	 }
	 $('#prev').click(function(){
	 	page--;
	 	movement();
	 	 });
	 $('#next').click(function(){
	 	page++;
	 	movement();
	 	 });