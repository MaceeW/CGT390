import '../styles/Introduction.css';
const Introduction = () => {
  const introText = "This page was created as part of Lab 3, where we were tasked with building a dynamic profile app using React and JSX. The goal of this lab was to create reusable components, including a header, an introduction section, and card components, while applying custom styles to enhance the design. Through this assignment, I explored the fundamentals of React, component-based architecture, and styling techniques.";
  
  return (
    <section>
      <h2>About</h2>
      <p>{introText}</p>
    </section>
  );
};

export default Introduction;