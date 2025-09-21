import './styles.css';

const dropdowns = document.querySelectorAll('.dropdown-btn');

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (e) => {
        const dropdownOptions = dropdown.nextElementSibling;
        
        const dropdownVisibility = dropdownOptions.checkVisibility({visibilityProperty: true});

        if (dropdownVisibility) {
            dropdownOptions.style.visibility = 'hidden';
            dropdown.style.width = '40px'
            dropdownOptions.classList.remove('animate');
        } else {
            dropdown.style.width = '100%'
            dropdownOptions.style.visibility = 'visible';
            dropdownOptions.classList.add('animate')     
        }
        
    })
})