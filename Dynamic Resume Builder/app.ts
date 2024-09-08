document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeSection = document.getElementById('resume-section') as HTMLElement;
    const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
    const displayPicture = document.getElementById('display-picture') as HTMLImageElement;
    const shareableLink = document.getElementById('shareable-link') as HTMLElement;
    const linkUrl = document.getElementById('link-url') as HTMLAnchorElement;
    const themeToggleButton = document.getElementById('theme-toggle') as HTMLButtonElement;
    const bodyElement = document.body;

    // Theme toggle functionality
    themeToggleButton?.addEventListener('click', () => {
        bodyElement.classList.toggle('light-mode');
    });

    // Form submission event listener
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        // Get input values from the form
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;
        const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;

        // Dynamically update the resume section with user input
        (document.getElementById('display-name') as HTMLElement).textContent = name;
        (document.getElementById('display-email') as HTMLElement).textContent = email;
        (document.getElementById('display-phone') as HTMLElement).textContent = phone;
        (document.getElementById('display-education') as HTMLElement).textContent = education;
        (document.getElementById('display-skills') as HTMLElement).textContent = skills;
        (document.getElementById('display-work-experience') as HTMLElement).textContent = workExperience;

        // Display the profile picture if uploaded
        const file = profilePictureInput.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e: ProgressEvent<FileReader>) {
                if (e.target && e.target.result) {
                    displayPicture.src = e.target.result as string;
                }
            };
            reader.readAsDataURL(file);
        }

        // Show the resume section
        resumeSection.style.display = 'block';
    });

});
