const buttonToggle = document.querySelector("#toggle");
const postsContainerEl = $('#root');
let savedPosts = localStorage.getItem("userPosts");
let postsArray = savedPosts ? JSON.parse(savedPosts) : [];

postsArray.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>Author:</strong> ${post.userName}</p>
        <p>${post.content}</p>
        `;
    postsContainerEl.append(postElement);
});

postsContainerEl.children("div").filter(function() {
    return $(this).is("div");
}).css("border", "1px solid black");

function myFunction(x) {
    x.querySelector('i').classList.toggle("bi-brightness-high-fill");
    x.querySelector('i').classList.toggle("bi-moon-fill");
}
const handleToggle = function(){
    const element = document.body;
    element.classList.toggle("dark-mode");
 
    //This code will handle the toggle from day to night.
}
buttonToggle.addEventListener('click', handleToggle);
