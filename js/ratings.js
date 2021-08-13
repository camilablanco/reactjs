var movieArray=[];
const baseURL = 'https://api.themoviedb.org/3/';
const APIKEY = 'f2bbaeea46e68311a07c1c898c3f55cc';
const imgURL = 'https://image.tmdb.org/t/p/';
const imgSize = 'w92';

$('document').ready(function(){
	let username = localStorage.getItem("username");
	if (username != null){
		$("#welcome-message").text("Bienvenido "+ username);
		$("#welcome-message").show();
	} else{
		$("#welcome-message").hide();
	}


		$.ajax({
			method: "GET",
			url:  baseURL + 'movie/popular?api_key=f2bbaeea46e68311a07c1c898c3f55cc&language=en-US&page=1',
			success: function(response){  
				newMovieArray = []; 
				for(let movie of response.results){
					let movieLocal = new Movie(movie.id, movie.title, movie.overview, movie.original_title, imgURL + imgSize + movie.poster_path);
					newMovieArray.push(movieLocal);
				}
				drawMovies(newMovieArray);

				$('.user-rating-form').on('change','[name="rating"]',function(){
					let movieId = $(this).data("movie-id");
					$("#selected-rating" + movieId).text($(this).val());
				});
			}
		});
	});
	


	// let movie1 = new Movie(1,"Parasite","A South Korean black comedy thriller film directed by Bong Joon-ho, who co-wrote the screenplay with Han Jin-won. The film, starring Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik, Park So-dam, Jang Hye-jin, and Lee Jung-eun, follows a poor family who scheme to become employed by a wealthy family and infiltrate their household by posing as unrelated, highly qualified individuals. ", "기생충", "images/parasite.jpg");
	// let movie2 = new Movie(2, "Jojo Rabbit", "A comedy-drama film written and directed by Taika Waititi, adapted from Christine Leunens's 2008 book Caging Skies. Roman Griffin Davis portrays the title character, Johannes Jojo Betzler, a ten-year-old Hitler Youth member who finds out that his mother (Scarlett Johansson) is hiding a Jewish girl (Thomasin McKenzie) in their attic. He must then question his beliefs. ", "Jojo Rabbit", "images/jojo.jpg");
	// let movie3 = new Movie(3, "Mandy", "In the Pacific Northwest in 1983, outsiders Red Miller and Mandy Bloom lead a loving and peaceful existence. When their pine-scented haven is savagely destroyed by a cult led by the sadistic Jeremiah Sand, Red is catapulted into a phantasmagoric journey filled with bloody vengeance and laced with deadly fire. Horror, mystery & thriller with spectacular Nicolas Cage.", "Mandy", "images/mandy.jpg");

	// movieArray.push(movie1);
	// movieArray.push(movie2);
	// movieArray.push(movie3);

	// drawMovies(movieArray);


const drawMovies = (array) => {
	for(let movie of array){
		let html = `<div class="col-md-6 col-lg-4 item">
						<div class="box"><img class="rounded-circle" height="92" width="92" src="${movie.image}">
							<h3 class="name">${movie.name}</h3>
							<p class="title">${movie.originalTitle}</p>
							<p class="description">${movie.description}</p>
							<div>
								<form class="user-rating-form">
									<span class="user-rating">
										<input type="radio" name="rating" value="5" data-movie-id="${movie.id}"><span class="star"></span>

										<input type="radio" name="rating" value="4" data-movie-id="${movie.id}"><span class="star"></span>

										<input type="radio" name="rating" value="3" data-movie-id="${movie.id}"><span class="star"></span>

										<input type="radio" name="rating" value="2" data-movie-id="${movie.id}"><span class="star"></span>

										<input type="radio" name="rating" value="1" data-movie-id="${movie.id}"><span class="star"></span>
									</span>
								</form>
								<p>You have selected <span id="selected-rating${movie.id}" class="selected-rating">0</span> stars.
								</p>
							</div>
						</div>
					</div>`;
		$("#movies").append(html);
	}
}


