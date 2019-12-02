// place your images in this array
var random_images_array = [
    "image01.jpg",
    "image02.jpg",
    "image03.jpg",
    "image04.jpg"
];

function getRandomImage() {
    var num = Math.floor(Math.random() * random_images_array.length);
    var img = random_images_array[num];
    document.getElementById("demo").src = img;
}
