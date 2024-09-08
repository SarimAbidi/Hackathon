// Toggle Skills Section Visibility
const toggleSkillsButton = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');

toggleSkillsButton?.addEventListener('click', () => {
    if (skillsSection?.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection!.style.display = 'none';
    }
});

// Theme Toggle Functionality
const themeToggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;

themeToggleButton?.addEventListener('click', () => {
    bodyElement.classList.toggle('light-mode');
});
