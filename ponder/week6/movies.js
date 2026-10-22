const movies = [
      {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
        imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
        imgAlt: "Luca and Alberto standing on the beach",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "The Other Side of Heaven",
            date: "December 14, 2001",
            description: "A young missionary travels to Tonga in the 1950s, where he faces cultural challenges, dangerous storms, and unexpected hardships while serving the people.",
            imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5e/The_Other_Side_of_Heaven_poster.jpg",
            imgAlt: "The Other Side of Heaven movie poster",
            ages: "10+",
            genre: "Adventure/Drama/Religious",
            stars: "⭐⭐⭐⭐"
        },
        {
            title: "The Saratov Approach",
            date: "October 9, 2013",
            description: "Based on the kidnapping of two missionaries in Russia in 1998, this suspenseful drama follows their struggle to survive and return to safety.",
            imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/1e/The_Saratov_Approach_poster.jpg",
            imgAlt: "The Saratov Approach movie poster",
            ages: "13+",
            genre: "Drama/Thriller",
            stars: "⭐⭐⭐⭐"
        },
        {
            title: "Saints and Soldiers",
            date: "August 6, 2004",
            description: "During World War II, four Allied soldiers stranded behind enemy lines must overcome their differences and work together to reach safety.",
            imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/2a/Saints_and_Soldiers_poster.jpg",
            imgAlt: "Saints and Soldiers movie poster",
            ages: "13+",
            genre: "War/Drama/Historical",
            stars: "⭐⭐⭐⭐"
        },
        {
            title: "Saints and Soldiers: Airborne Creed",
            date: "August 17, 2012",
            description: "American paratroopers land behind enemy lines during World War II and undertake a dangerous mission through occupied France.",
            imgSrc: "https://en.wikipedia.org/wiki/GIF#/media/File:Newtons_cradle_animation_book_2.gif",
            imgAlt: "Saints and Soldiers: Airborne Creed movie poster",
            ages: "13+",
            genre: "War/Action/Drama",
            stars: "⭐⭐⭐"
        },
        {
            title: "Saints and Soldiers: The Void",
            date: "August 15, 2014",
            description: "Set during World War II, American soldiers face a dangerous confrontation involving German forces and armored vehicles.",
            imgSrc: "https://en.wikipedia.org/wiki/GIF#/media/File:Newtons_cradle_animation_book_2.gif",
            imgAlt: "Saints and Soldiers: The Void movie poster",
            ages: "13+",
            genre: "War/Action/Drama",
            stars: "⭐⭐⭐"
        }
    ];

    const movielis = document.querySelector('.movie-list')

    // We can let things like this float because it will run on page load
    movies.forEach(movie => {
        
        let article = `
            <article class="movie">
                <h2>${movie.title}</h2>
                <img src=${movie.imgSrc} alt=${movie.imgAlt}>
                <p><strong>Release Date:</strong> ${movie.date}</p>
                <p><strong>Recommended Age:</strong> ${movie.ages}</p>
                <p><strong>Genre:</strong> ${movie.genre}</p>
                <p><strong>Rating:</strong> <span aria-label="5 stars">${movie.stars}</span></p>
                <p id='desc'>${movie.description}</p>
            </article>
        `;

        document.getElementById("movie-list").innerHTML += article;            
    });
          

/*
        <article class="movie" aria-Labelby="Spider-man: Into the Spider-Verse">
            <h2>Spider-Man: Into the Spider-Verse</h2>
            <img src="https://wddbyui.github.io/wdd131/images/spiderman.png" alt="Miles Morales swinging through the city">
            <p><strong>Release Date:</strong> Dec 14, 2018</p>
            <p><strong>Recommended Age:</strong> 10+</p>
            <p><strong>Genre:</strong> Action/Adventure</p>
            <p><strong>Rating:</strong> <span aria-label="5 stars">⭐⭐⭐⭐⭐</span></p>
            <p id='desc'>Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.</p>
        </article>
*/