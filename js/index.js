let prevbtn = document.getElementById("prev-btn");
let nextbtn = document.getElementById("next-btn");
let books = document.getElementsByClassName("books")[0];

let drama_counter = document.getElementById("drama_counter");
let horror_counter = document.getElementById("horror_counter");
let romance_counter = document.getElementById("romance_counter");
let fashion_counter = document.getElementById("fashion_counter");

prevbtn.onclick = () => {


    console.log(books.style.left);
    if (true) {

        books.style.left += 210 + "px";

    }


}
nextbtn.onclick = () => {

    console.log(books.style.left)

    if (true) {

        books.style.left += -210 + "px";


    }


}

function update(element, value) {

    let counter = 0;
    if (counter < value) {
        let counts = setInterval((element, value) => {
            console.log(element.innerHTML)
            element.innerHTML = parseInt(element.innerHTML) + 1;
            counter++;
            if (value == counter) {

                clearInterval(counts);
            }

        }, 0.0000001, element, value);


    }
    return 0;


}

update(drama_counter, 1432);
update(horror_counter, 2033);
update(romance_counter, 345088);
update(fashion_counter, 535450);