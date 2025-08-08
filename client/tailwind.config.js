/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/Services/services.jsx",
    "./src/components/Project/project.jsx",
    "./src/components/Portfolio/Portfolio.jsx",
    "./src/components/Navbar1/navbar.jsx",
    "./src/components/Navbargallery/navbar.jsx",
    "./src/components/Main/main.jsx",
    "./src/components/Footer/footer.jsx",
    "./src/components/Footer/footer2.jsx",
    "./src/components/Feedback/feedback.jsx",
    "./src/components/Appointment/appointment.jsx",
    "./src/components/about/about.jsx",
    "./src/components/MeetTheTeam/meettheteam.jsx",
    "./src/pages/newenglish/newenglish.jsx",
    "./src/pages/about/about.jsx",
    "./src/pages/service/service.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

