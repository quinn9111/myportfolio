import React from 'react';
import coverImagePortfolio from '../../assets/cover/project.jpg';
import coverImageProjectOne from '../../assets/cover/projectOne.png';
import coverImageProjectTwo from '../../assets/cover/projectTwo.png';
function Portfolio() {
  return (
    <section className="my-5">
      <h1 id="portfolio">My Portfolio</h1>
      <img src={coverImagePortfolio} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>QuizMe : https://quinn9111.github.io/project-quiz/
        </p>
        <img src={coverImageProjectOne} className="my-2" style={{ width: "100%" }} alt="projectOne"  />
        <p>Clothing Gurusss : https://project2clothingurusss.herokuapp.com/login
        </p>
        <img src={coverImageProjectTwo} className="my-2" style={{ width: "100%" }} alt="projectOne"  />
      </div>
    </section>
  );
}

export default Portfolio;
