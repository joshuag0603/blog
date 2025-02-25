// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

const themeSwitcher = document.querySelector('#theme-switcher'); // Targeting by ID
const container = document.querySelector('body');

let mode = 'dark';

const savedMode = localStorage.getItem('mode');
if (savedMode) {
  mode = savedMode;
  container.setAttribute('class', mode);
}

themeSwitcher.addEventListener('click', function() {
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  } else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }

  localStorage.setItem('mode', mode);
});


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. 
function readLocalStorage () {
  const blogEntry = JSON.parse(localStorage.getItem('blogposts'));
  if (blogEntry === null) {
      return [];
  }

  return(blogEntry);
}


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage (newBlogEntry) {
  const blogEntry = readLocalStorage()
  blogEntry.push(newBlogEntry);

  localStorage.setItem('blogposts', JSON.stringify(blogEntry));
}

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

