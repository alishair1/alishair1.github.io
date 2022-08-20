
// Add property for uploadFile

// starts


const form = document.querySelector("form"),
fileInput = document.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");

// form click event
form.addEventListener("click", () =>{
  fileInput.click();
});

fileInput.onchange = ({target})=>{
  let file = target.files[0]; //getting file [0] this means if user has selected multiple files then get first one only
  if(file){
    let fileName = file.name; //getting file name
    if(fileName.length >= 12){ //if file name length is greater than 12 then split it and add ...
      let splitName = fileName.split('.');
      fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
    }
    uploadFile(fileName); //calling uploadFile with passing file name as an argument
  }
}

// file upload function
function uploadFile(name){
  let xhr = new XMLHttpRequest(); //creating new xhr object (AJAX)
  xhr.open("POST", "php/upload.php"); //sending post request to the specified URL
  xhr.upload.addEventListener("progress", ({loaded, total}) =>{ //file uploading progress event
    let fileLoaded = Math.floor((loaded / total) * 100);  //getting percentage of loaded file size
    let fileTotal = Math.floor(total / 1000); //gettting total file size in KB from bytes
    let fileSize;
    // if file size is less than 1024 then add only KB else convert this KB into MB
    (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB";
    let progressHTML = `<li class="row">
                          <i class="fas fa-file-alt"></i>
                          <div class="content">
                            <div class="details">
                              <span class="name">${name} • Uploading</span>
                              <span class="percent">${fileLoaded}%</span>
                            </div>
                            <div class="progress-bar">
                              <div class="progress" style="width: ${fileLoaded}%"></div>
                            </div>
                          </div>
                        </li>`;
    // uploadedArea.innerHTML = ""; //uncomment this line if you don't want to show upload history
    uploadedArea.classList.add("onprogress");
    progressArea.innerHTML = progressHTML;
    if(loaded == total){
      progressArea.innerHTML = "";
      let uploadedHTML = `<li class="row">
                            <div class="content upload">
                              <i class="fas fa-file-alt"></i>
                              <div class="details">
                                <span class="name">${name} • Uploaded</span>
                                <span class="size">${fileSize}</span>
                              </div>
                            </div>
                            <i class="fas fa-check"></i>
                          </li>`;
      uploadedArea.classList.remove("onprogress");
      // uploadedArea.innerHTML = uploadedHTML; //uncomment this line if you don't want to show upload history
      uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML); //remove this line if you don't want to show upload history
    }
  });
  let data = new FormData(form); //FormData is an object to easily send form data
  xhr.send(data); //sending form data
}


// Add property for uploadFile

// ends

// // properties  for collapse button

// // starts


// const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

//   accordionItemHeaders.forEach(accordionItemHeader => {
//   accordionItemHeader.addEventListener("click", event => {
    
//     // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
//     // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
//     // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
//     //   currentlyActiveAccordionItemHeader.classList.toggle("active");
//     //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
//     // }

//     accordionItemHeader.classList.toggle("active");
//     const accordionItemBody = accordionItemHeader.nextElementSibling;
//     if(accordionItemHeader.classList.contains("active")) {
//       accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
//     }
//     else {
//       accordionItemBody.style.maxHeight = 0;
//     }
    
//   });
// });



// // properties  for collapse button

// // ends




// // sidebar menu

// // starts


// let sidebar = document.querySelector(".sidebar");
//   let closeBtn = document.querySelector("#btn");
//   let searchBtn = document.querySelector(".bx-search");

//   closeBtn.addEventListener("click", ()=>{
//     sidebar.classList.toggle("open");
//     menuBtnChange();//calling the function(optional)
//   });

//   searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
//     sidebar.classList.toggle("open");
//     menuBtnChange(); //calling the function(optional)
//   });

//   // following are the code to change sidebar button(optional)
//   function menuBtnChange() {
//    if(sidebar.classList.contains("open")){
//      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
//    }else {
//      closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
//    }
//   }



//       /*=============== SHOW MENU ===============*/
// const navMenu = document.getElementById('nav-menu'),
//       navToggle = document.getElementById('nav-toggle'),
//       navClose = document.getElementById('nav-close')

// /*===== MENU SHOW =====*/
// /* Validate If Constant Exists */
// if(navToggle) {
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.add('show-menu')
//     })
// }

// /*===== MENU HIDDEN =====*/
// /* Validate If Constant Exists */
// if(navClose) {
//     navClose.addEventListener('click', () => {
//         navMenu.classList.remove('show-menu')
//     })
// }

// // side bar menu 

// // ends






// // for popup login page

// // starts


      
//         var modelBtn = document.querySelector('.model-btn');
//         var modelBg = document.querySelector('.model-bg');
//         var modelClose = document.querySelector('.model-close');


//         modelBtn.addEventListener('click',function(){
//           modelBg.classList.add('bg-active');
//         });
//         modelClose.addEventListener('click',function(){
//           modelBg.classList.remove('bg-active');
//         });
 


// // for popup login page

// // ends




// // proloder on page

// // starts

//   var loader = document.getElementById("preloader");

//       window.addEventListener("load", function() {
//           loader.style.display = "none";
//       })


