
// variablles

let navBar = document.querySelector(".navbar");
let menuBar = document.querySelector("#menu-bar");
let accordion = document.getElementsByClassName("innerbox-faq");
let orderForm = document.getElementById("orderForm1");
let uName = document.getElementById("name");
let UEmail = document.getElementById("email");
let uContact = document.getElementById("number");
let uMsg = document.getElementById("msg");
let displayMsgs = document.getElementById("displayMsgs");
let outerOrder = document.getElementById("outer-ordersteps");
let outerSpecial = document.getElementById("outer-specialsteps");
let outerGallery = document.getElementById("outer-gallerysteps");
let outerReview = document.getElementById("outer-reviewsteps");


let displayImgDiv = document.getElementById("displayImgsDiv");
let displayImags = document.getElementById("displayImgs");
let imgCloseBtn = document.getElementById("displayImgClose");
let imgNames = document.getElementById("imgName");


// navbar
function navbarToggle(){
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('navToggle');
}

// function specialStepsFunc() rendering Speciality
function specialStepsFunc(){
    specialityItems.map((specstep)=>{
        outerSpecial.innerHTML +=  
        `<div class="innerbox-spec">
            <img src="${specstep.img}" alt="Our speciality">
            <div class="content-spec">
                <h3>${specstep.name}</h3>
                <p>${specstep.description}</p>
            </div>
        </div>`
    });
}

specialStepsFunc();

// function orderStepsFunc() rendering Orders
function orderStepsFunc(){
    orderingSteps.map((step)=>{
        outerOrder.innerHTML += 
            `<div class="innerbox-order">
                <img src="${step.img}" alt="">
                <h3>${step.name}</h3>
            </div>`  
      })
}

orderStepsFunc();


// function galleryStepsFunc() rendering Gallery
function galleryStepsFunc(){
    galleryImages.map((galleryImg)=>{
        outerGallery.innerHTML += 
        `<div class="innerbox-gallery">
            <img src="${galleryImg.img}" alt="${galleryImg.name}" onclick="viewMore(this)">
         </div>`
    })
    
}

galleryStepsFunc();

// gallery open images closing
imgCloseBtn.addEventListener("click", ()=>{
    displayImgDiv.style.display = "none";
})


// function reviewStepsFunc() rendering Reviews
function reviewStepsFunc(){
    reviewAll.map((reviewOne)=>{
        outerReview.innerHTML += 
        `<div class="innerbox-review">
            <img src="${reviewOne.img}" alt="user">
            <h4>${reviewOne.name}</h4>
            <p>${reviewOne.description}</p>
        </div>`
    })
}

reviewStepsFunc();

// function viewMore(this)
function viewMore(viewPic){
    displayImags.src = viewPic.src;
    displayImgDiv.style.display = "flex";
    displayImgDiv.style.justifyContent = "center";
    imgNames.innerText = viewPic.alt.toUpperCase();
}

// accordion displaying
for(let i=0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle('activeAccordion')
    })
}

// form submission
function submitForm(){
    checkInputs();
}

// form inputs checking function
function checkInputs(e){
    let messages = [];
    let mailformat = /^[A-Za-z0-9+_.-]+@(.+)$/;

    
        if(uName.value === "" || uName.value == null){
            messages.push("Please enter your name");
        }
        else if(uName.value.length <= 1){
            messages.push("Please enter a valid name");
        }
       else if
                (UEmail.value === "" || UEmail.value == null){
                messages.push("Please enter your email");
        }else if(!(UEmail.value.match(mailformat))){
            messages.push("Please enter a valid email");
        }
        else if
                (uContact.value === "" || uContact.value == null){
                messages.push("Please enter your contact");
        }
        else if
                (uContact.value.length !== 10 ){
                messages.push("Please check your contact number");
        }
        else if
                (uMsg.value === "" || uMsg.value == null){
                messages.push("Please enter your message");
        }else{
            
                // alert("Submit Successfully!");
                successFunction();
        }

        
    if(messages.length > 0 ){
        // e.preventDefault();
        displayMsgs.innerHTML = messages;
    }
}

// form submit success function
function successFunction() {
    setTimeout(
        function() {
            // window.location = "http://127.0.0.1:5500/index.html";
            orderForm.reset();
            displayMsgs.innerHTML = `<b style="color: green;">Thank you! We will contact you soon...</b>`;
        }, 1000);
}



window.onscroll = ()=> {
    if(window.scrollY > 200){
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('navToggle');
    }
}