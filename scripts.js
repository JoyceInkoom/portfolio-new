// Data for Education and Experience sections
const educationData = [
    { date: "2010 - 2014", title: "Bachelor of Computer Science", roles: "Studied software engineering, algorithms, and databases.", location: "XYZ University" },
    { date: "2015 - 2017", title: "Master of Data Science", roles: "Focused on machine learning, AI, and big data analysis.", location: "ABC University" },
    { date: "2018", title: "Certificate in Web Development", roles: "Acquired skills in HTML, CSS, JavaScript, and frameworks.", location: "Online Course" },
    { date: "2019", title: "Advanced React Course", roles: "Specialized in modern web development using React.js.", location: "Online Course" },
    { date: "2020", title: "Full Stack Bootcamp", roles: "Learned full-stack development (MERN stack).", location: "Tech Institute" }
];

const experienceData = [
    { date: "2015 - 2017", title: "Junior Developer", roles: "Worked on front-end web development.", location: "XYZ Company" },
    { date: "2018 - 2019", title: "Software Engineer", roles: "Developed backend services using Node.js.", location: "ABC Technologies" },
    { date: "2019 - 2021", title: "Full Stack Developer", roles: "Built full-stack applications using React and MongoDB.", location: "DEF Ltd." },
    { date: "2021 - 2023", title: "Lead Developer", roles: "Led a team of developers to create scalable web apps.", location: "GHI Solutions" },
    { date: "2023 - Present", title: "CTO", roles: "Overseeing the technology department of the company.", location: "JKL Enterprises" }
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
