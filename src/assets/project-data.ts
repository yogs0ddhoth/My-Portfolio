import quizmaster from './images/Quizmaster.png';
import gymDiary from './images/Gym-Diary.png';
import blogme_v2 from './images/blogme_v2.jpg';
// import blogme from './images/blogme.png'; // legacy project
import cinematic from './images/CineMatic.png';
import findYourForecase from './images/Find-Your-Forecast.png';
// import showWhatYouKnow from './images/Show-What-You-Know.png'; // legacy project
import underConstruction from './images/under-construction.jpg';

export interface ProjectData {
  name: string;
  description: string;
  technologies: string;
  repoLink: string;
  deployedApp?: string;
  img: string;
}
export const Projects: ProjectData[] = [
  {
    name: 'Cinematic v2',
    description: 'A Better Movie Search Engine',
    technologies:
      '[Nest.js, JWT Auth, GraphQL API, Apollo Federation Microservices, SQLite3/Prisma, MongoDB/Mongoose]',
    repoLink: 'https://github.com/yogs0ddhoth/Cinematic_v2',
    img: underConstruction,
  },
  {
    name: 'Blogme',
    description: 'A Full-Stack Blogging Application',
    technologies:
      '[Flask, SQLAlchemy, REST API, React-Query, MaterialUI React Library, Tailwindcss]',
    repoLink: 'https://github.com/yogs0ddhoth/blogme-v2',
    deployedApp: 'https://yogs0ddhoth-blogme-v2.herokuapp.com',
    img: blogme_v2,
  },
  {
    name: 'Gym Diary',
    description: 'A Workout Tracking Application',
    technologies: '[Express.js, MySQL, Sequelize ORM, REST API, Handlebars]',
    repoLink: 'https://github.com/ItzDerian/gym-diary',
    deployedApp: 'https://salty-reaches-53151.herokuapp.com',
    img: gymDiary,
  },
  {
    name: 'Quizmaster',
    description: 'A Trivia Question Exchange',
    technologies:
      '[MERN Stack, JWT Auth, Semantic UI React Library, Stripe Payment Services API]',
    repoLink: 'https://github.com/yogs0ddhoth/QuizMaster',
    deployedApp: 'https://yogs0ddhoth-quizmaster.herokuapp.com',
    img: quizmaster,
  },
  {
    name: 'CineMatic',
    description: 'A Movie Search Engine',
    technologies: '[JQuery/AJAX, Web API, Bootstrap]',
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
];
