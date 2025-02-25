// TODO: Create a variable that selects the form element 
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

const blogForm = document.getElementById('blogForm');

blogForm.addEventListener('submit', function(submit) {
    submit.preventDefault();

const inputFields = document.querySelectorAll('input, textarea');
let allFieldsFilled = true;

for (let i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value === "") {
        alert("Please complete the form.");
        allFieldsFilled = false;
        break;
    }
}
if (allFieldsFilled) {
    const newBlogEntry = {
        username: document.getElementById('username').value,
        title: document.getElementById('title').value,
        content: document.getElementById('content').value,
    }
    storeLocalStorage(newBlogEntry)
    redirectPage('blog.html');
    }
})


