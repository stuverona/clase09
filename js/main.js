

// const boton = document.getElementById("button")



// boton.addEventListener( 'mouseover' , ()=>{
//         boton.style.backgroundColor = "red"
// } )

// boton.addEventListener('mouseout' , ()=>{
//     boton.style.backgroundColor = 'aqua'
// })




// const persona = [
//     {
//         name: "sfdsdsd",
//         ege:2323
//     },
//     {
//         name: "sfdsdsd",
//         ege:2323
//     },
//     {
//         name: "sfdsdsd",
//         ege:2323
//     }
// ]


// persona.push({name:"Khalil", ege:2323})

// console.log(persona.length);






// function bienvenida(){
//     console.log('hola mundo');
// }

// bienvenida()



const container_movies = document.getElementById('container_movies')
const counter_cart = document.getElementById('counter_cart')

const cart = []
getMovies()

function getMovies(){
    movies.forEach(item => {
        // console.log(item);
        const content_movie = document.createElement('div')
        content_movie.innerHTML = `
            <h1>${item.title}</h1>
            <img src="${item.poster_path}">
            <p>${item.overview}</p>
            <button class="btn_carts" value="${item.id}">comprar</button>
        `
        container_movies.appendChild(content_movie)
    });

    const moviesId = document.querySelectorAll('.btn_carts');

    moviesId.forEach(item =>{
        item.addEventListener('click', addToCart)
    })
    // console.log(moviesId);
}

function addToCart(event){

    const idMovie = event.target.value

    if(idMovie){
        cart.push(idMovie)
        counter_cart.innerText = cart.length
        console.log(cart);
    }


// console.log('tocaste la pelicula con el id ' + idMovie);
}
