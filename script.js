const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    // Check if toggle and nav elements exist
    if (!toggle || !nav) {
        console.error('Toggle or nav element not found.');
        return;
    }

    // Use a function to handle the click event
    const toggleMenu = () => {
        // Toggle the 'show-menu' class on the nav element
        nav.classList.toggle('show-menu');

        // Optionally, toggle a class on the toggle button for styling
        toggle.classList.toggle('active'); // Add a class like 'active' for styling purposes
    };

    // Add a click event listener to the toggle button
    toggle.addEventListener('click', toggleMenu);

    // Optionally, you can close the menu when a menu item is clicked
    const navLinks = nav.querySelectorAll('.nav__link'); // Adjust the selector accordingly

    navLinks.forEach((link) => {
        link.addEventListener('click', toggleMenu);
    });
};

showMenu('nav-toggle', 'nav-menu');
