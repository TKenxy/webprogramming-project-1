const Name = document.getElementById("edit1");
const Description = document.getElementById("edit2");
const Price = document.getElementById("edit3");
const edit_button = document.getElementById("edit-button");
const end_button = document.getElementById("end-editing");

edit_button.addEventListener("click", function() {
  Name.contentEditable = true;
  Description.contentEditable = true;
  Price.contentEditable = true;
  Name.style.backgroundColor = "#aaaaaa";
  Description.style.backgroundColor = "#aaaaaa";
  Price.style.backgroundColor = "#aaaaaa";

} );

end_button.addEventListener("click", function() {
  Name.contentEditable = false;
  Description.contentEditable = false;
  Price.contentEditable = false;
  Name.style.backgroundColor = "";
  Description.style.backgroundColor = "";
  Price.style.backgroundColor = "";
} )


//---------------------------------------//

const Name2 = document.getElementById("edit11");
const Description2 = document.getElementById("edit22");
const Price2 = document.getElementById("edit33");
const edit_button2 = document.getElementById("edit-button2");
const end_button2 = document.getElementById("end-editing2");

edit_button2.addEventListener("click", function() {
  Name2.contentEditable = true;
  Description2.contentEditable = true;
  Price2.contentEditable = true;

  Name2.style.backgroundColor = "#aaaaaa";
  Description2.style.backgroundColor = "#aaaaaa";
  Price2.style.backgroundColor = "#aaaaaa";

} );

end_button2.addEventListener("click", function() {
  Name2.contentEditable = false;
  Description2.contentEditable = false;
  Price2.contentEditable = false;

  Name2.style.backgroundColor = "";
  Description2.style.backgroundColor = "";
  Price2.style.backgroundColor = "";
} )




