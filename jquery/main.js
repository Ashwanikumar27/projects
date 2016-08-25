$(function()
{
$('#button').click(function (){
	var $movies=$('#movies');
    var $movie_title=$('#movie_title').val();
    var tbody=$movies.find("tbody");
	$.ajax({
		
		url: 'http://www.omdbapi.com/?s='+$movie_title,
		type: 'GET',
		dataType:'JSON',

		success: function(data){
			tbody.empty();
			if(data.Response=="True"){
			$.each(data.Search,function(i,movie) {
				// console.log(movie);
            /*$movies.append('<tr>'+'<td>'+movie.Title+'</td>'+'<td>'+ movie.Year+'</td>'+ '<td>'+movie.imdbID+'</td>'+'<td>'+movie.Type+'</td>'+'<td>'+"<img src="+movie.Poster+">"+'</td>'+'</tr>');*/
			$movies.append('<tr>'+'<td>'+'<h4>'+"MovieName:"+'</h4>'+movie.Title+'<br>'+'<h4>'+"MovieYear:"+'</h4>'+ movie.Year+'<br>'+'<h4>'+"MovieimBID:"+'</h4>'+movie.imdbID+'<br>'+'<h4>'+"MovieType:"+'</h4>'+movie.Type+'</td>'+'<td>'+"<img class=img-responsive src="+movie.Poster+">"+'</td>'+'</tr>');
			});
		}
		else{
			alert("Entered wrong movie");
		}
		/*error:function(e){
			alert("error occur");*/
		}
	});
});
});