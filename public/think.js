let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");
let container = document.querySelector(".container");
let error = document.getElementById("error");
let imageDisplay = document.querySelector(".image-display");
let imageDisplay2 = document.querySelector(".image-display2");

const fileHandler = (file, name, type) => {
    if (type.split("/")[0] !== "image") {
      //File Type Error
      error.innerText = "Please upload an image file";
      return false;
    }
    error.innerText = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      //image and file name
      document.querySelector(".bw").src=reader.result
    document.querySelector(".normal").src=reader.result
    };
    
  };

  //Upload Button
uploadButton.addEventListener("change", () => {
    // imageDisplay.innerHTML = "";
    var file = uploadButton.files[0]
      document.querySelector(".titlehead").classList.add("dont")
      document.querySelector(".print").classList.add("dont")
      document.querySelector(".container").classList.add("dont")
      document.querySelector("label").classList.add("dont")

      document.querySelector(".waveWrapper").classList.remove("dont")
      document.querySelector(".waveTop").classList.remove("dont")
      document.querySelector(".waveBottom").classList.remove("dont")
      document.querySelector(".newtit").classList.remove("dont")
      document.querySelector(".circ").classList.remove("dont")

      document.querySelector(".waveWrapper").classList.add("yes")
      document.querySelector(".waveTop").classList.add("yes")
      document.querySelector(".waveBottom").classList.add("yes")

      setTimeout(() => {
      
        document.querySelector(".waveWrapper").classList.add("dont")
        document.querySelector(".waveTop").classList.add("dont")
        document.querySelector(".waveBottom").classList.add("dont")
        document.querySelector(".newtit").classList.add("dont")
        document.querySelector(".circ").classList.add("dont")
  
        document.querySelector(".waveWrapper").classList.remove("yes")
        document.querySelector(".waveTop").classList.remove("yes")
        document.querySelector(".waveBottom").classList.remove("yes")
  
        document.querySelector(".txt1").classList.remove("dont")
        document.querySelector(".txt2").classList.remove("dont")
        
        document.querySelector(".image-display").classList.remove("dont")
        document.querySelector(".image-display2").classList.remove("dont")
        document.querySelector(".final").classList.remove("dont")
        
        
        fileHandler(file,file.name,file.type)

}, 3000)
  });

  container.addEventListener(
    "dragenter",
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      container.classList.add("active");
    },
    false
  );

  container.addEventListener(
    "dragleave",
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      container.classList.remove("active");
    },
    false
  );

  container.addEventListener(
    "dragover",
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      container.classList.add("active");
    },
    false
  );

  container.addEventListener(
    "drop",
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      container.classList.remove("active");
      let draggedData = e.dataTransfer;
      let file = draggedData.files[0];
    //   imageDisplay.innerHTML = "";
    document.querySelector(".titlehead").classList.add("dont")
      document.querySelector(".print").classList.add("dont")
      document.querySelector(".container").classList.add("dont")
      document.querySelector("label").classList.add("dont")

      document.querySelector(".waveWrapper").classList.remove("dont")
      document.querySelector(".waveTop").classList.remove("dont")
      document.querySelector(".waveBottom").classList.remove("dont")
      document.querySelector(".newtit").classList.remove("dont")
      document.querySelector(".circ").classList.remove("dont")

      document.querySelector(".waveWrapper").classList.add("yes")
      document.querySelector(".waveTop").classList.add("yes")
      document.querySelector(".waveBottom").classList.add("yes")

      setTimeout(() => {

      document.querySelector(".waveWrapper").classList.add("dont")
      document.querySelector(".waveTop").classList.add("dont")
      document.querySelector(".waveBottom").classList.add("dont")
      document.querySelector(".newtit").classList.add("dont")
      document.querySelector(".circ").classList.add("dont")

      document.querySelector(".waveWrapper").classList.remove("yes")
      document.querySelector(".waveTop").classList.remove("yes")
      document.querySelector(".waveBottom").classList.remove("yes")

      document.querySelector(".txt1").classList.remove("dont")
      document.querySelector(".txt2").classList.remove("dont")

      document.querySelector(".image-display").classList.remove("dont")
      document.querySelector(".image-display2").classList.remove("dont")
      document.querySelector(".final").classList.remove("dont")

      fileHandler(file,file.name,file.type)
    
}, 3000)



    
    },
    false
  );

  window.onload = () => {
    error.innerText = "";
  };
document.querySelector(".final").addEventListener("click",function(){
    window.location.href="/process"
})