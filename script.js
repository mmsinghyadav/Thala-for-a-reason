let button = document.getElementById("btn");
let thala = document.querySelector(".thala");
let tryAgain = document.querySelector(".try");
let video = document.querySelector(".video");
let noReason = document.querySelector(".noreason");

let videoContianer = document.querySelector(".video-container");

button.addEventListener("click", () => {
  let input = document.querySelector("#input").value;
  let num = Number(input);
  let arrnum = input.split("");
  let actualnum = arrnum.reduce((acc, curr) => acc + Number(curr), 0);
  console.log(actualnum);

  if (input.length == 7) {
    videoContianer.innerHTML = `<div>
     <p class="thala">Thala for a Reason 💪</p>
     <video width="350px" controls class="video" autoplay>
         <source src="video/Bole jo koyal baago me Dhoni Dancing video meme.mp4" type="video/mp4">
     </video>
 </div>`;
  } else if (actualnum == 7) {
    videoContianer.innerHTML = `<div>
     <p class="thala">Thala for a Reason 💪</p>
     <video controls class="video" autoplay>
         <source src="video/Bole jo koyal baago me Dhoni Dancing video meme.mp4" type="video/mp4">
     </video>
 </div>`;
  } else {
    videoContianer.style.visibility = 'visible'
    videoContianer.innerHTML = `<div>
    <p class="try">Try Again</p>
<img src="video/leonordomeme.webp" alt="image" class="noreason">
</div>`;
  }
});
