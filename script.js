// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('contrastToggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'high-contrast') {
        document.body.classList.add('high-contrast');
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        let theme = 'normal';
        if (document.body.classList.contains('high-contrast')) {
            theme = 'high-contrast';
        }
        localStorage.setItem('theme', theme);
    });
});
