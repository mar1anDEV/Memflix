function fetchJSONData() {
    fetch("./moviesDB.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            const movieCards = document.getElementById('movie-cards');
            
            movieCards.innerHTML = '';

            
            data.moviesDatabase.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('cardContainer');
                movieCard.innerHTML = `
                    
                  <div class="cardContainer-Up">
                    <img src="${movie.image_path}" alt="${movie.title}">
                  </div>
                  <div class="cardContainer-Bottom">
                    <div class="cardContainer-Bottom-Wrapper">
                      <div class="CardContainerInfo-Title">
                        <h5>${movie.title}</h5>
                      </div>
                      <div class="CardContainerInfoYear-Rating">
                          <div class="YearCard">
                            <p>${movie.releaseDate}</p>
                          </div>
                        <div class="RatingMovieCard">
                          <i class="fas fa-star"></i>  <!-- Solid Star -->
                          <span>
                            <p>
                             ${movie.rating}
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="PlayButtonWatch">
                    <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Watch Movie"></i>
                  </div>
                
                `;

                // Add click event to redirect to test.html with MovieID
                 movieCard.addEventListener('click', () => {
                  window.location.href = `test.html?movieTitle=${movie.title}`;
              });

                movieCards.appendChild(movieCard);
            });
        })
        .catch((error) => {
            console.error("Unable to fetch data:", error);
        });
}

fetchJSONData();



const section1 = document.getElementById('FirstSection');
const InitialCoords = section1.getBoundingClientRect();
const NavigationSticky = document.getElementById('NaviStick');

window.addEventListener('scroll', () => {
    if (window.scrollY > InitialCoords.top) {
        NavigationSticky.classList.add('sticky');
    } else {
        NavigationSticky.classList.remove('sticky');
    }
});
