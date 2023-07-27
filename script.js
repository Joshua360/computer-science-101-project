// alert("Welcome to my webpage")

// Get the color palette picker
const colorPalette = document.getElementById('colorPalette');
const placeholderArray = [];
// Add event listeners to the color divs
const colorDivs = colorPalette.getElementsByClassName('color'); 
for (let i = 0; i < colorDivs.length; i++) {
  placeholderArray.push(colorDivs[i]);
  colorDivs[i].addEventListener('click', function() {
    const color = this.style.backgroundColor;
    document.body.style.backgroundColor = color;
  });
}
