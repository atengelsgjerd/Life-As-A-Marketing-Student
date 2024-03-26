const buttonToggle = document.querySelector("toggle");

const userNameInput = document.querySelector("#userName");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");

const addSubmitButton = document.querySelector("#submit-button");

addSubmitButton.addEventListener('click', function(event) {
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
    //This function will operate with the DOM, text content, Document Element, class list Methods.
}

const handleToggle = function(){
    //This code will handle the toggle from day to night.
}

const readStorage = function(){
    //This code will read local storage.
}

const getSetting = function(){
    //This code will get our day/night setting from local storage.
}

const setSetting = function(setting){
    //This code will save/set the setting.
}

dayNight(getSetting());

buttonToggle.addEventListener('click', handleToggle);