<div id="myframe"><img src="https://lh3.googleusercontent.com/DDxmcAjhafBVZ_DrdTsNNPUB9W8Q5hXTAUM2oJA-yIoXk-_-Yl72vuZug4w8t0PlfaxKlG1NPgYT5XbUSFWV88WDAY78vYJeKVLj2w=s0" /></div>
<p>Click the button to change the background color of the picture contained in the iframe.</p>
<p id="demo"></p>
<button onclick="myFunction()">Try it</button>

<div id="urlOrUpload">
<input type="text"/>
<br> 
<input type="file" accetp="image/*"/>
</div>
<div id="buttonHolder">
<button type="button" onclick="uploadOrNot()">Display</button>
</div>
<div id="result"></div>
<script>
function myFunction(){
  var myframe = document.getElementById('myframe');
  myframe.style.backgroundColor = "green";
}

function uploadOrNot() {
  if (document.querySelector("input[type=file]").files[0]){
    let input = document.querySelector("input[type=file]");
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        display(e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
  } else if (document.querySelector("input[type=text]").value){
     display(document.querySelector("input[type=text]").value);
  }
}

function display(res) {
  let img = document.createElement("IMG");
  img.src=res;
  document.querySelector("#result").appendChild(img);
}</script>