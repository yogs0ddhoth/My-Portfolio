import quizmaster from './images/Quizmaster.png';
import gymDiary from './images/Gym-Diary.png';
import blogme_v2 from './images/blogme_v2.jpg';
// import blogme from './images/blogme.png'; // legacy project
import cinematic from './images/CineMatic.png';
import findYourForecase from './images/Find-Your-Forecast.png';
// import showWhatYouKnow from './images/Show-What-You-Know.png'; // legacy project
import underConstruction from './images/under-construction.jpg';

export interface ProjectType {
  name: string;
  description: string;
  technologies: string;
  repoLink: string;
  deployedApp: string;
  img: string;
}
export const Projects: ProjectType[] = [
  {
    name: 'Blogme',
    description: 'A Full-Stack Blog',
    technologies:
      '{Flask, SQLAlchemy, REST, MaterialUI React Library, Tailwindcss}',
    repoLink: 'https://github.com/yogs0ddhoth/blogme-v2',
    deployedApp: 'https://yogs0ddhoth-blogme-v2.herokuapp.com/',
    img: blogme_v2,
  },
  {
    name: 'Gym Diary',
    description: 'A Workout Tracking App',
    technologies: '{Express.js, MySQL, Sequelize ORM, REST APIs}',
    repoLink: 'https://github.com/ItzDerian/gym-diary',
    deployedApp: 'https://tranquil-reaches-54677.herokuapp.com',
    img: gymDiary,
  },
  {
    name: 'Quizmaster',
    description: 'A Trivia Question Exchange',
    technologies:
      '[MERN Stack, Semantic UI React Library, Stripe Payment Services API]',
    repoLink: 'https://github.com/yogs0ddhoth/QuizMaster',
    deployedApp: 'https://polar-island-54317.herokuapp.com',
    img: quizmaster,
  },
  {
    name: 'CineMatic',
    description: 'A Movie Search Engine',
    technologies: '[ES6, JQuery/AJAX, Web API, Bootstrap]',
    repoLink: 'https://github.com/tnoonan88/Cinematic-Film-Finder',
    deployedApp: 'https://tnoonan88.github.io/Cinematic-Film-Finder/',
    img: cinematic,
  },
  {
    name: 'Find Your Forecast',
    description: 'A Weather Forecast Application',
    technologies: '[HTML, JQuery/AJAX, Bootstrap, CSS]',
    repoLink: 'https://github.com/yogs0ddhoth/find-your-forecast',
    deployedApp: 'https://yogs0ddhoth.github.io/find-your-forecast/',
    img: findYourForecase,
  },
  // {
  //   name: "Show What You Know",
  //   description: "A Timed Quiz on Javascript",
  //   technologies: "[HTML, JS, Web API, CSS]",
  //   repoLink: "",
  //   deployedApp: "https://yogs0ddhoth.github.io/Show-what-you-know/",
  //   img: showWhatYouKnow
  // },
  {
    name: 'Coming Soon!',
    description: '',
    technologies: '',
    repoLink: '',
    deployedApp: '',
    img: underConstruction,
  },
];
