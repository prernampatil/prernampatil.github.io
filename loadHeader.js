// Load the header dynamically
fetch('./header.html') // Increment the version number if needed
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data)
    .catch(error => console.error('Error loading header:', error));
