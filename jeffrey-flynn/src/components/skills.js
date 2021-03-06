import React, { Component } from "react";
import glamorous from "glamorous";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";


const Container = glamorous.div({
  background: "linear-gradient(black, #1F1F1F)",
  width: `${window.innerWidth - window.scrollWidth}`,
  display: "flex",
  flexDirection: "column",
});

const Header = glamorous.div({
  color: "#73C2FB",
  fontFamily: "Syncopate, sans-serif",
  fontWeight: 800,
  fontSize: "3.5vw",
  width: "100%",
  textShadow: "0 0 3px #ffffff",
  margin: "3%",
});

const Content = glamorous.div({
  width: "85%",
  color: "white",
  fontFamily: "Open Sans, sans-serif",
  fontSize: "1.8em",
  lineHeight: "1.8",
  margin: "0 auto",
  textAlign: "center",
  marginBottom: "4%"
});

const CardContainer = glamorous.div({
  width: "100%",
  height: "100%",
  display: "grid",
  grid: "100% / 25% 25% 25%",
  gridGap: "0 3%", // space between rows, space between columns
  justifyContent: "center",
  alignContent: "center",
  marginBottom: "1.5%"
});

const SkillCard = glamorous.div({
  width: "100%",
  height: "100%",
  borderRadius: "5px",
  background: "linear-gradient(#1F1F1F, black)",
  boxShadow: "0 0 5px 1px #ebebeb",
  display: "grid",
  grid: "15% 80% / 100%",
  gridGap: "2% 0"
});

const CardTitle = glamorous.div({
  width: "100%",
  height: "100%",
  color: "#73C2FB",
  fontFamily: "Syncopate, sans-serif",
  fontWeight: 800,
  fontSize: "2.5em",
  textAlign: "center",
  borderBottom: "1px solid #73C2FB",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1% 0"
});

const CardList = glamorous.div({
  width: "100%",
  height: "100%",
});

const Item = glamorous.div({
  width: "100%",
  color: "white",
  fontFamily: "Open Sans, sans-serif",
  fontSize: "1.5em",
  lineHeight: "1.8",
});

class Skills extends Component {
  render() {

    const frontend = ["React", "Redux", "Context API", "CSS3", "Glamorous", "Styled Components", "AJAX (Axios)", "LESS", "Media Queries", "WebGL (Three.js)"];
    const backend = ["Node", "Mongo", "Mongoose", "Passport", "Express", "Firestore", "Algolia", "Django", "mLab", "0Auth", "JWT"];
    const industry = ["JavaScript, Python, C, Go", "Git", "RESTful API", "HTTP", "Big-O", "Data Structures", "Unit Testing", "Computer Architecture", "Heroku", "Netlify", "Firebase"];
    
    return (
      <Container>

          <Header>Skills</Header>
          
          <Content>
            My persuit of a career in software engineering began in early 2018 when I enrolled in Lambda School.
            
            For the ensuing six months, I spent nearly all of my free time immersed in course material, technical documentation, and raw syntax.

            The culmination of this desire for knowledge and mastery is listed below.
          </Content>

          <CardContainer>
            <SkillCard>
              <CardTitle>Front End</CardTitle>
              <CardList>
                {frontend.map((skill, index) => <Item id={index}><FontAwesomeIcon icon={faCheckCircle} color="#73C2FB" style={{margin: "0 2%"}} />{skill}</Item>)}
              </CardList>
            </SkillCard>

            <SkillCard>
              <CardTitle>Back End</CardTitle>
              <CardList>
                {backend.map((skill, index) => <Item id={index}><FontAwesomeIcon icon={faCheckCircle} color="#73C2FB" style={{margin: "0 2%"}} />{skill}</Item>)}
              </CardList>
            </SkillCard>

            <SkillCard>
              <CardTitle>Industry Knowledge</CardTitle>
              <CardList>
                {industry.map((skill, index) => <Item id={index}><FontAwesomeIcon icon={faCheckCircle} color="#73C2FB" style={{margin: "0 2%"}} />{skill}</Item>)}
              </CardList>
            </SkillCard>
          </CardContainer>
      </Container>
    )
  }
}

export default Skills;