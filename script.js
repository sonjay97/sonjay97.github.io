document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    // Check if user has a stored preference, if not default to dark mode
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode === null || storedMode === 'true') {
        document.documentElement.classList.add('dark');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
        localStorage.setItem('darkMode', 'true');
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }

    modeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        // Toggle icon visibility
        moonIcon.style.display = document.documentElement.classList.contains('dark') ? 'block' : 'none';
        sunIcon.style.display = document.documentElement.classList.contains('dark') ? 'none' : 'block';
        // Save preference to localStorage
        localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
    });
});
