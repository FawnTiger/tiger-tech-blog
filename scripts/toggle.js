// Toggle between dark and light mode
const toggleButton = document.getElementById('toggleMode');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        toggleButton.innerText = 'Dark Mode';
    } else {
        toggleButton.innerText = 'Light Mode';
    }
});
