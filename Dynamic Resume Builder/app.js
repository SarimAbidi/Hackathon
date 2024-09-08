document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeSection = document.getElementById('resume-section');
    var profilePictureInput = document.getElementById('profile-picture');
    var displayPicture = document.getElementById('display-picture');
    var shareableLink = document.getElementById('shareable-link');
    var linkUrl = document.getElementById('link-url');
    var themeToggleButton = document.getElementById('theme-toggle');
    var bodyElement = document.body;
    // Theme toggle functionality
    themeToggleButton === null || themeToggleButton === void 0 ? void 0 : themeToggleButton.addEventListener('click', function () {
        bodyElement.classList.toggle('light-mode');
    });
    // Form submission event listener
    form.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault();
        // Get input values from the form
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        var workExperience = document.getElementById('work-experience').value;
        // Dynamically update the resume section with user input
        document.getElementById('display-name').textContent = name;
        document.getElementById('display-email').textContent = email;
        document.getElementById('display-phone').textContent = phone;
        document.getElementById('display-education').textContent = education;
        document.getElementById('display-skills').textContent = skills;
        document.getElementById('display-work-experience').textContent = workExperience;
        // Display the profile picture if uploaded
        var file = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                if (e.target && e.target.result) {
                    displayPicture.src = e.target.result;
                }
            };
            reader.readAsDataURL(file);
        }
        // Show the resume section
        resumeSection.style.display = 'block';
    });
});
