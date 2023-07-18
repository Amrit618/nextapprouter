import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Here is some information about me and my work.</p>

      <h2>About Me</h2>
      <p>
        I am a passionate web developer with expertise in frontend technologies
        such as HTML, CSS, and JavaScript. I have experience working with
        various frameworks and libraries, including React and Next.js.
      </p>

      <h2>Skills</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>Responsive Web Design</li>
      </ul>

      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Project 1</h3>
          <p>
            Description of your project 1. Explain the technologies used, your
            role in the project, and any notable features or challenges you
            encountered.
          </p>
        </li>
        <li>
          <h3>Project 2</h3>
          <p>
            Description of your project 2. Provide details similar to project 1.
          </p>
        </li>
        {/* Add more projects */}
      </ul>

      <h2>Contact Me</h2>
      <p>
        Feel free to reach out to me for any inquiries or collaboration
        opportunities. You can contact me via email at example@example.com or
        connect with me on LinkedIn.
      </p>
    </div>
  );
};

export default HomePage;
