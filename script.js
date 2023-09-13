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
        link.addEventListener('click', (e) => {
            if (e.target.classList.contains('dropdown__item')) {
                e.preventDefault(); // Prevent the default link behavior
                e.stopPropagation(); // Stop the event from propagating to the parent menu item
                link.classList.toggle('submenu-open'); // Toggle a class to open/close the submenu
            } else {
                toggleMenu(); // Close the menu when a regular menu item is clicked
            }
        });
    });
};

showMenu('nav-toggle', 'nav-menu');
const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownItems.forEach((item) => {
  const toggle = item.querySelector('.nav__link');
  const submenu = item.querySelector('.dropdown__menu');

  if (toggle && submenu) {
    toggle.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent the link from navigating

      // Toggle a class on the submenu to control its visibility
      submenu.classList.toggle('open');
      
      // Toggle the arrow icon if you have one
      const arrow = toggle.querySelector('.dropdown__arrow');
      if (arrow) {
        arrow.classList.toggle('open');
      }
    });
  }
});

