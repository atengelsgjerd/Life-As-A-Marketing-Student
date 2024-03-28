const postsContainer = document.getElementById('posts-container');
let savedPosts = localStorage.getItem("userPosts");
let postsArray = savedPosts ? JSON.parse(savedPosts) : [];

postsArray.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>Author:</strong> ${post.userName}</p>
        <p>${post.content}</p>
        `;
    postsContainer.appendChild(postElement);
});
