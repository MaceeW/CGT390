import styles from '../styles/about.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2>About This Project</h2>
      <p>
        This page was created as part of Lab 3, where we were tasked with building a dynamic profile app using React and JSX. The goal of this lab was to create reusable components, including a header, an introduction section, and card components, while applying custom styles to enhance the design. Through this assignment, I explored the fundamentals of React, component-based architecture, and styling techniques.
      </p>
    </div>
  );
};

export default About;