import { Section, Content, Link } from './interfaces';

export const intro = {
  portfolioName: 'Your name right here!',
  blurb:
    "I'm a software engineer! I'm a Googler and I pushed this from my main branch! Even though my Github Pages deploys from my prod branch!",
};

export const socialMediaLinks: Link[] = [
  {
    name: 'github',
    url: 'github.com',
  },
  {
    name: 'linkedIn',
    url: 'linkedin.com',
  },
  {
    name: 'medium',
    url: 'medium.com',
  },
];

/** Project Section
 *  Customize these, if you'd like to add more be sure to copy the format (e.g. project1)
 *  below as well as include your addition in the projectSection.
 */
const project1: Content = {
  name: 'Project 1',
  id: 1,
  image: './assets/images/project.avif',
  position: 'string',
  text: 'Lorem impsum herm er askll moded',
  link: 'example.com',
};

const project2: Content = {
  name: 'Project 2',
  id: 2,
  image: './assets/images/project.avif',
  position: 'string',
  text: 'Lorem impsum herm er askll moded',
  link: 'example.com',
};

const project3: Content = {
  name: 'Project 3',
  id: 3,
  image: './assets/images/project.avif',
  position: 'string',
  text: 'Lorem impsum herm er askll moded',
  link: 'example.com',
};

export const projectSection: Section = {
  name: 'Projects',
  display: true,
  content: [
    project1,
    project2,
    project3,
    //Add more here
  ],
};

/** Experience Section
 *  Customize these, if you'd like to add more be sure to copy the format (e.g. experience1)
 *  below as well as include your addition in the experienceSection.
 */

const experience1: Content = {
  name: 'Job #1',
  id: 1,
  image: './assets/images/exp.avif',
  position: 'string',
  text: `<p><strong>Junior Software Engineer</strong><br>
    XYZ Tech Solutions, San Francisco, CA<br>
    March 2023 – Present</p>
    
    <p>As a Junior Software Engineer at XYZ Tech Solutions, I contribute to the development and maintenance of web applications and software solutions. My primary responsibilities include collaborating with senior developers to design, code, and test new features while ensuring high-quality performance and user experience.</p>
    
    <p>In my role, I have been involved in various projects, including the development of a customer management system using Angular and Node.js. I have actively participated in code reviews, debugging, and troubleshooting to enhance the functionality and efficiency of our software products. Additionally, I have gained experience with version control systems like Git and project management tools such as JIRA.</p>
    
    <p>One of my key achievements includes optimizing an existing application module, resulting in a 20% improvement in performance and a reduction in user-reported issues. I have also been responsible for writing comprehensive documentation and providing support to end-users to ensure smooth software deployment and usability.</p>
    
    <p>My role has also included working closely with cross-functional teams to gather requirements, identify technical challenges, and propose effective solutions. This experience has honed my problem-solving skills and ability to adapt to fast-paced, dynamic environments.</p>
    
    <p>Overall, my time at XYZ Tech Solutions has provided me with a solid foundation in software engineering principles and best practices. I am committed to continuing my professional growth and contributing to impactful software development projects.</p>
    `,
  link: 'example.com',
};

const experience2: Content = {
  name: 'Job #1',
  id: 2,
  image: './assets/images/exp.avif',
  position: 'string',
  text: `<p><strong>Junior Software Engineer</strong><br>
    XYZ Tech Solutions, San Francisco, CA<br>
    March 2023 – Present</p>
    
    <p>As a Junior Software Engineer at XYZ Tech Solutions, I contribute to the development and maintenance of web applications and software solutions. My primary responsibilities include collaborating with senior developers to design, code, and test new features while ensuring high-quality performance and user experience.</p>
    
    <p>In my role, I have been involved in various projects, including the development of a customer management system using Angular and Node.js. I have actively participated in code reviews, debugging, and troubleshooting to enhance the functionality and efficiency of our software products. Additionally, I have gained experience with version control systems like Git and project management tools such as JIRA.</p>
    
    <p>One of my key achievements includes optimizing an existing application module, resulting in a 20% improvement in performance and a reduction in user-reported issues. I have also been responsible for writing comprehensive documentation and providing support to end-users to ensure smooth software deployment and usability.</p>
    
    <p>My role has also included working closely with cross-functional teams to gather requirements, identify technical challenges, and propose effective solutions. This experience has honed my problem-solving skills and ability to adapt to fast-paced, dynamic environments.</p>
    
    <p>Overall, my time at XYZ Tech Solutions has provided me with a solid foundation in software engineering principles and best practices. I am committed to continuing my professional growth and contributing to impactful software development projects.</p>
    `,
  link: 'example.com',
};

const experience3: Content = {
  name: 'Job #1',
  id: 3,
  image: './assets/images/exp.avif',
  position: 'string',
  text: 'Lorem impsum herm er askll moded',
  link: 'example.com',
};

const experience4: Content = {
  name: 'Job #1',
  id: 4,
  image: './assets/images/exp.avif',
  position: 'string',
  text: 'Lorem impsum herm er askll moded',
  link: 'example.com',
};

export const experienceSection: Section = {
  name: 'Experience',
  display: true,
  content: [experience1, experience2, experience3, experience4],
};

/** Writing Section
 *  Customize these, if you'd like to add more be sure to copy the format (e.g. writing1)
 *  below as well as include your addition in the writingSection.
 */

const writing1: Content = {
  name: 'Blog Post #1',
  id: 1,
  image: './assets/images/writing.avif',
  position: 'string',
  text: 'Lorem impsum herm er askll moded',
  link: 'example.com',
};

const writing2: Content = {
  name: 'Blog Post #2',
  id: 2,
  image: './assets/images/writing.avif',
  position: 'string',
  text: 'Lorem impsum herm er askll moded',
  link: 'example.com',
};

const writing3: Content = {
  name: 'Blog Post #3',
  id: 3,
  image: './assets/images/writing.avif',
  position: 'string',
  text: 'Lorem impsum herm er askll moded',
  link: 'example.com',
};

export const writingSection: Section = {
  name: 'Writings',
  display: true,
  content: [writing1, writing2, writing3],
};
