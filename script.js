fetch('http://www.omdbapi.com/?i=tt3896198&apikey=83032a14&s=2023')
.then((data) => data.json())
.then((dataList) => {
    const {Search: movieList = []} = dataList;
    console.log(movieList);
    let newInnerHTML = '';
    
    movieList?.map((movie) => {
        const {Title: title = '--', Poster: posterUrl = './images/joker.png', Year: year = '--'} = movie;

        newInnerHTML += `
            <div class="movie_card">
                <img src="${posterUrl}" alt="" class="movie_poster">
                <p class="movie_title">${title}</p>
                <p class="movie_tag">${year}</p>
            </div>
        `;

        document.getElementById("movies_container").innerHTML = newInnerHTML;
    });
})
.catch((err) => console.log({error: err}))

fetch('http://www.omdbapi.com/?i=tt3896198&apikey=83032a14&s=series')
.then((data) => data.json())
.then((dataList) => {
    const {Search: movieList = []} = dataList;
    console.log(movieList);
    let newInnerHTML = '';
    
    movieList?.map((movie) => {
        const {Title: title = '--', Poster: posterUrl = './images/joker.png', Year: year = '--'} = movie;

        newInnerHTML += `
            <div class="movie_card">
                <img src="${posterUrl}" alt="" class="movie_poster">
                <p class="movie_title">${title}</p>
                <p class="movie_tag">${year}</p>
            </div>
        `;

        document.getElementById("add_on_container").innerHTML = newInnerHTML;
    });
})
.catch((err) => console.log({error: err}))