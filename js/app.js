// console.log(dptosLocs);.
var textHTMLDepartament = '<option value="0">Departamento</option>' ;
var textHTMLLocality = '<option value="0" >localidad</option>' ;

for (var i in dptosLocs) {
  textHTMLDepartament = textHTMLDepartament + '<option value="' + i + '">' + i + '</option>';
}
document.getElementById("departamento").innerHTML = textHTMLDepartament;
document.getElementById("locality").innerHTML = textHTMLDepartament;


function showDepartament(prueba) {

} //end showDepartament


}

function send() {
  console.log('OK')
} // end send





$('.regular').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false
});
