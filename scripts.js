// Data for Education and Experience sections
const educationData = [
    { date: "2024 - 2024", title: "Junior Web Developer", roles: "Studied frontend web development.", location: "MEST and Generation Ghana" },
    { date: "2023", title: "Certificates", roles: "Studied Project Management, Strategic thinking, Ethical Action and Growth Mindset", location: "Baobag/Arozona State University" },
    { date: "2018 - 2022", title: "Bachelor of Science", roles: "Studied Medical Laboratory Science.", location: "University of Ghane" },
    { date: "2021", title: "Certificate", roles: "Studied Coastal Ocean, Climate Change and Action and Sustainable climate smart solutions.", location: "Coastal Ocean Environment Summer School" },
    { date: "2014-2017", title: "High School Diploma", roles: "Studied General Science.", location: "Swedru Senior High School" }
];

const experienceData = [
    { date: "2024", title: "Junior Developer", roles: "Worked on front-end web development.", location: "MEST Ghana" },
    { date: "2024", title: "Horticulture Business Challlenge", roles: "Won the Horticulture Business Challenge organised.", location: "GNBCC" },
    { date: "2022 - 2023", title: "National Service Personnel", roles: "Worked as a medical laboratory scientist.", location: "Our Lady of Grace Hospital." },
    { date: "2021 - Date", title: "Founder and Team Lead", roles: "Performed adminsitrative, organisational and project management duties.", location: "Dominas Groups of Companies" },
    { date: "2021 - 2022", title: "Health Officer", roles: "Health Officer for UGMELSSA.", location: "University of Ghana" }
];

// Function to generate resume boxes
function generateResumeGrid(data, containerId) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
        const box = document.createElement('div');
        box.classList.add('resume-box');

        box.innerHTML = `
            <h3>${item.title}</h3>
            <p><strong>Date:</strong> ${item.date}</p>
            <p><strong>Roles:</strong> ${item.roles}</p>
            <p class="location"><strong>Location:</strong> ${item.location}</p>
        `;

        container.appendChild(box);
    });
}

// Populate the grids on page load
window.onload = () => {
    generateResumeGrid(educationData, 'education-grid');
    generateResumeGrid(experienceData, 'experience-grid');
};


document.addEventListener("DOMContentLoaded", function () {
    const skillCategories = document.querySelectorAll(".skill-category");
  
    const fadeInOnScroll = () => {
      skillCategories.forEach((category) => {
        const categoryPosition = category.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
  
        if (categoryPosition < screenPosition) {
          category.style.opacity = "1";
          category.style.transform = "translateY(0)";
        }
      });
    };
  
    window.addEventListener("scroll", fadeInOnScroll);
  });
  