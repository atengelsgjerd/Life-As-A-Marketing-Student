const buttonToggle = document.querySelector("#toggle");

const userNameInput = document.querySelector("#userName");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");

const body = document.querySelector("body");

const sunIcon = document.querySelector("i");

const blogPostForm = document.querySelector("#blogPost");

const addSubmitButton = document.querySelector("#submit-button");

addSubmitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const userObject = {
        userName: userNameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    }
    let savedPosts = localStorage.getItem("userPosts");
    let postsArray = savedPosts ? JSON.parse(savedPosts) : [];

    postsArray.push(userObject);
    localStorage.setItem("userPosts", JSON.stringify(postsArray));

   window.location.href = "blog.html";
});

function myFunction(x) {
    x.querySelector('i').classList.toggle("bi-brightness-high-fill");
    x.querySelector('i').classList.toggle("bi-moon-fill");
}
const handleToggle = function(){
    const element = document.body;
    element.classList.toggle("dark-mode");
 
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

buttonToggle.addEventListener('click', handleToggle);