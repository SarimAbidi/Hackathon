// Toggle Skills Section Visibility
var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
// Theme Toggle Functionality
var themeToggleButton = document.getElementById('theme-toggle');
var bodyElement = document.body;
themeToggleButton === null || themeToggleButton === void 0 ? void 0 : themeToggleButton.addEventListener('click', function () {
    bodyElement.classList.toggle('light-mode');
});
