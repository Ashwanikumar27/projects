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
			/*$.each(data.Search,function(i,movie)*/
			for(var i in data.Search)
			 {
			 	var m1_title=data.Search[i].Title;
			 	var m1_year=data.Search[i].Year;
			 	var m1_id=data.Search[i].imdbID;
			 	var m1_type=data.Search[i].Type;
			 	var m1_poster=data.Search[i].Poster;
				// console.log(movie);
            /*$movies.append('<tr>'+'<td>'+movie.Title+'</td>'+'<td>'+ movie.Year+'</td>'+ '<td>'+movie.imdbID+'</td>'+'<td>'+movie.Type+'</td>'+'<td>'+"<img src="+movie.Poster+">"+'</td>'+'</tr>');*/
			$movies.append('<tr>'+'<td>'+'<h4>'+"MovieName:"+'</h4>'+m1_title+'<br>'+'<h4>'+"MovieYear:"+'</h4>'+ m1_year+'<br>'+'<h4>'+"MovieimBID:"+'</h4>'+m1_id+'<br>'+'<h4>'+"MovieType:"+'</h4>'+m1_type+'</td>'+'<td>'+"<img class=img-responsive src="+m1_poster+">"+'</td>'+'</tr>');
			};
		}
	});
});