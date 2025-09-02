// const pok_img = document.getElementById("pokemon_image");
// const constainer = document.querySelector(".constainer");



// for(let i = 1; i <= 100; i++){
//     // pok_img.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`)
//     // constainer.appendChild(pok_img.cloneNode(true));
//     const newImg = pok_img.cloneNode();
//     newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`
//     constainer.append(newImg);
// }

// for(let i = 1; i < 100; i++){
//     const img = document.createElement("img");
//     img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`
//     constainer.append(img);
// }

// const a = [1, 2, 3, 4, 5, 6, 7];

// const mapValues = a.map((value) => value < 5 );
// console.log(mapValues);


// const spanElement = document.querySelector(".span_element");
// spanElement.innerText = localStorage.myName;

// function temp(n){
//     if(n === 0) return;
//     console.log(n);
//     temp(--n);
// }

// temp(5)


function fact(n){
    if( n == 1) return n;
    return n * fact(n-1);
}

console.log(fact(5));