import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Fade from 'react-reveal/Fade';
import { css } from 'glamor';
import { colors } from './../constants/StyleConstants';

const aboutImage = css({
  width: '200px',
  border: '2px solid white',
  borderRadius: '4px',
  margin: '16px'
});

const topSkillsBox = css({
  backgroundColor: 'white',
  color: colors.darkBlue,
  borderRadius: '8px'
});

const webLink = css({
  textDecoration: 'none',
  color: 'white',
  ':hover': {
    color: colors.babyPink,
    textDecoration: 'none'
  }
});

const textContent = css({
  maxWidth: '550px'
});

const About = () => {
  return (
    <>
    <Fade>
      <Navbar />
      <div className={`container p-4 ${css({ color: 'white' })}`} id="about-page">
        <div className="row pt-4">
          <div className="col-lg-6 col-md-12 text-center pb-3">
            <img
              src="https://avatars2.githubusercontent.com/u/60608204?s=460&u=517fe81ca49a5627e1e845120537a7a5b6f3b346&v=4"
              alt="Simon the Coding Machine"
              className={aboutImage}
            />
          </div>
           <div className={`col-lg-6 col-md-12 pr-4 ${textContent}`}>
            <h2>Coding</h2>
              <p>
                I'm a recent graduate from a Full-Stack Web Development programme, during which I delivered 3 MVC apps using Ruby on Rails, PostgreSQL, JavaScript, HTML5, CSS3 and Bootstrap.
                Due to the fast pace of the course I have become a very fast learner and am eager to develop my skills and knowledge as a Front End Developer. I’m currently working on freelance projects using ReactJS and having strict code reviews with a Senior Developer.
              </p>
            </div>
          </div>
          <div className="row pt-4">
            <div className={`col-lg-6 col-md-12 pr-5 order-2 order-sm-1 ${textContent}`}>
              <h2>Coaching</h2>
              <p>
                I have experience working as a Positive Psychologist and Coach for tech companies. I have helped people to improve their communication and confidence skills by running workshops such as Presenting Skills and Having Difficult Conversations. More on my coaching work can be found <span><a href="https://inside.edited.com/why-we-put-wellbeing-at-the-heart-of-company-culture-cddee6550a90?gi=75e8b02e59e8" className={webLink}> here.</a></span>
              </p>
            </div>
             <div className="col-lg-6 col-md-12 text-center order-1 order-sm-2">
              <img
                src="https://static.wixstatic.com/media/0b83fe_699c6fcd2f404e63b0c87926143f23ff~mv2_d_3024_4032_s_4_2.jpg/v1/crop/x_1454,y_1730,w_1240,h_1009/fill/w_602,h_490,al_c,q_80,usm_0.66_1.00_0.01/Image%20from%20iOS%20(19).webp"
                alt="Simon the Coaching Machine"
                className={aboutImage}
              />
            </div>
          </div>

        </div>
        <div className={`container py-3 my-3 ${topSkillsBox}`}>
          <h3 className="text-center">Top Skills</h3>
          <div className="d-flex flex-wrap justify-content-center" id="top-skills">
            <li><i className="fab fa-react" /> <em>ReactJS</em></li>
            <li><i className="fab fa-js-square" /> <em>Javascript ES6</em></li>
            <li><i className="fas fa-gem" /> <em>Ruby on Rails</em></li>
            <li><i className="fab fa-bootstrap" /> <em>Bootstrap</em></li>
            <li><i className="fab fa-figma" /> <em>Figma</em></li>
            <li><i className="far fa-file-alt" /> <em>HTML5</em></li>
            <li><i className="fas fa-paint-brush" /> <em>SCSS</em></li>
            <li><i className="fas fa-palette" /> <em>Glamor</em></li>
          </div>
        </div>
      </Fade>
    </>
  )
}

export default About;
