const buttonToggle = document.querySelector("toggle");

const userNameInput = document.querySelector("#userName");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");

const addSubmitButton = document.querySelector("#submit-button");

addSubmitButton.addEventListener("click", function(event) {
    event.preventDefault();

    const userObject = {
        userName: userNameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    }
    
    localStorage.setItem("userObject", JSON.stringify(userObject));

    let newObject = localStorage.getItem("userObject");
    console.log(JSON.parse(newObject));
})

const dayNight = function(setting){
    //This code will change the icon from day setting to night setting.
}

const handleToggle = function(){
    //This code will handle the toggle from day to night.
}

