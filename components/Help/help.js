// script.js - Nike Help Page Functionality

document.addEventListener('DOMContentLoaded', () => {

    // Search functionality
    const searchBtn = document.querySelector('.search-container button');
    const searchInput = document.querySelector('.search-container input');

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if(query) {
            alert(`Searching for: "${query}"`);
            searchInput.value = ''; // clear input after searching
        } else {
            alert('Please enter a search query.');
        }
    });

    searchInput.addEventListener('keyup', (e) => {
        if(e.key === 'Enter'){
            searchBtn.click(); // trigger click on enter
        }
    });

    // Quick Assists - Expandable "View all" simulation
    document.querySelectorAll('.quick-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`You clicked: "${link.textContent}"`);
            // Here, you can add functionality to open the detailed pages.
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.find-store a').addEventListener('click', (e) => {
          e.preventDefault();
          alert('Redirecting to store locator...');
          // You could add redirection or other logic here
        });
      
        document.querySelectorAll('.option').forEach(option => {
          option.addEventListener('click', () => {
            alert(`You clicked on: ${option.querySelector('h3').textContent}`);
            // Add real functionality like opening chat, dialing phone, etc.
          });
        });
      });
      

});
