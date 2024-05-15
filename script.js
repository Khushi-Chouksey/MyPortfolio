let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle("fa-x");
    navbar.classList.toggle('active');
}



document.addEventListener('DOMContentLoaded', function () {
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreText = document.querySelector('.more-text');

    readMoreBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (moreText.style.display === 'none') {
            moreText.style.display = 'block';
            readMoreBtn.textContent = 'Show less';
        } else {
            moreText.style.display = 'none';
            readMoreBtn.textContent = 'Read more';
        }
    });
});


// scroll section active//


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset  && top< offset +height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}



const skillDetails = {
    java: {
        title: 'Core Java',
        text: 'I have strong proficiency in Core Java, including OOP principles, collections framework, and multithreading. I utilize Java to solve complex problems and build scalable applications.'
    },
    dsa: {
        title: 'DSA',
        text: 'Expert in Data Structures and Algorithms, adept at solving a wide range of problems efficiently using Java. I have extensive practice with competitive programming and algorithm optimization.'
    },
    javascript: {
        title: 'JavaScript',
        text: 'Skilled in JavaScript, enabling me to create interactive and dynamic web applications. I leverage modern JavaScript frameworks and libraries to enhance user experience.'
    },
    html: {
        title: 'HTML5',
        text: 'Proficient in HTML5 for crafting well-structured, semantic web pages. My knowledge ensures accessibility and compatibility across various devices and browsers.'
    },
    css: {
        title: 'CSS3',
        text: 'Expert in CSS3, enabling me to design responsive and visually appealing websites. I use modern CSS techniques like Flexbox, Grid, and animations to enhance UI/UX.'
    },
    database: {
        title: 'SQL/MongoDB',
        text: 'Proficient in SQL for relational databases and MongoDB for NoSQL solutions. I am skilled in database design, querying, and optimizing data access for various applications.'
    },
    'node-js': {
        title: 'Node.js',
        text: 'Experienced in building scalable and efficient server-side applications using Node.js. I utilize Node.js to create RESTful APIs and handle asynchronous operations effectively.'
    },
    github: {
        title: 'GitHub',
        text: 'Proficient in using GitHub for version control and collaboration. I manage repositories, contribute to open source projects, and utilize best practices for code management.'
    }
};




document.addEventListener('DOMContentLoaded', function () {
    // Get all the read more buttons in services boxes
    const readMoreButtons = document.querySelectorAll('.services-box .btn');

    // Get the modal and its close button
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');

    // Function to open the modal with specified title and text
    function openModal(title, text) {
        modalTitle.textContent = title;
        modalText.textContent = text;
        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Loop through each read more button and add click event
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            // Get the data-skill attribute value from the button
            const skill = this.getAttribute('data-skill');
            // Check if the skill exists in skillDetails object
            if (skillDetails[skill]) {
                // Open modal with skill details
                openModal(skillDetails[skill].title, skillDetails[skill].text);
            }
        });
    });

    // Close modal when close button is clicked
    closeModalButton.addEventListener('click', closeModal);

    // Close modal when clicking outside the modal
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Existing code for other functionalities (menu icon, scroll reveal, etc.)
    // Ensure your existing code remains intact without any changes
});

















// sticky header 

let header = document.querySelector('header');
header.classList.toggle('sticky' , window.scrollY>100);

//  remove toggle icon and navbar 
menuIcon.classList.remove('fa-x');
navbar.classList.remove('active');


let navLinksArray = document.querySelectorAll('header nav a');
navLinksArray.forEach(navLink => {
    navLink.addEventListener('click', () => {
        menuIcon.classList.remove('fa-x');
        navbar.classList.remove('active');
    });
});

// scroll Reveal
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay: 200,
})

ScrollReveal().reveal('.home-content ,heading ', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-container , .portfolio-box,contact , form ' ,{origin:'button'});
ScrollReveal().reveal('.home-contact h1 , .about-img' ,{origin:"left"});
ScrollReveal().reveal('.home-contact p , .about-content' , {origin:"right"});



////////////////////////// typed js/////////////////////

// const typed = new Typed('.multiple-text',{
//     strings :['Frontend Developer' ,'Web Designer' ,'programmer'],
//     typeSpeed:70,
//     backSpeed:70,
//     backDelay: 1000,
//     loop: true,
// });


document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Web Designer', 'Programmer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});