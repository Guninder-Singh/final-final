/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    // Check if toggle and nav elements exist
    if (!toggle || !nav) {
        console.error('Toggle or nav element not found.');
        return;
    }

    toggle.addEventListener('click', () => {
        // Toggle the 'show-menu' class on the nav element
        nav.classList.toggle('show-menu');

        // Optionally, toggle a class on the toggle button for styling
        toggle.classList.toggle('active'); // Add a class like 'active' for styling purposes
    });
};

showMenu('nav-toggle', 'nav-menu');

