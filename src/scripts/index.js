


// -------------------------- //
//     ----- NAVBAR -----     //
// -------------------------- //

//     ----- Change color on click -----    

// Get all the navigation links
const navLinks = document.querySelectorAll('ul li a');

// Add a click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Remove the active class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add the active class to the clicked link
        this.classList.add('active');
    });
});


//     ----- Change color on scroll -----

// Add a scroll event listener to change active link on scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Iterate through each section to check if it is in the viewport
    document.querySelectorAll('section').forEach(section => {
        const sectionId = section.getAttribute('id');
        const sectionOffsetTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionOffsetTop && scrollPosition < sectionOffsetTop + sectionHeight) {
            // Remove the active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add the active class to the corresponding link
            const correspondingLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
});