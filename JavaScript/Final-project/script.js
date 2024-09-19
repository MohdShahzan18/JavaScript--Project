const toggleButton = document.getElementById('toggle-button');
const body = document.body;

// Load mode from localStorage
if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
}

// Toggle dark/light mode on button click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('mode', mode); // Save the mode in localStorage
});
