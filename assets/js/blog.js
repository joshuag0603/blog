const selectMain = document.querySelector('main');
const selectBack = document.getElementById('back-button');

function displayBlogPosts(blogposts) {
    const container = document.getElementById('blogContainer');
    container.innerHTML = '';

    blogposts.forEach(post => {
        const article = document.createElement('article');

        const title = document.createElement('h2');
        title.textContent = post.title;
        article.appendChild(title);

        const blockquote = document.createElement('blockquote');
        const content = document.createElement('blockquote');
        content.textContent = post.content;
        blockquote.appendChild(content);
        article.appendChild(blockquote); 

        const username = document.createElement('p');
        username.textContent = `Posted by: ${post.username}`;
        article.appendChild(username);
        article.appendChild(username);

        container.appendChild(article);
    });
}

const noPost = () => {
    const container = document.getElementById('blogContainer');
    container.innerHTML = '<p>No blog posts available.</p>';
}
const renderBlogList = () => {
    const blogposts = readLocalStorage();

    if (blogposts.length === 0) {
        noPost();
    } else {
        displayBlogPosts(blogposts);
    }
}

document.addEventListener('DOMContentLoaded', function() { 
    renderBlogList();
});

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

const backButton = document.getElementById('back-button');
backButton.addEventListener('click', function() {
    redirectPage('index.html')
});
