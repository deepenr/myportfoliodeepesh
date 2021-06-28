import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Tilt from "react-tilt";
import Card from "react-bootstrap/Card";
import L_INZINT from "../../assets/experience/inzint4.png";
import "../../pages/experience/experience.style.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_INZINT}
                  alt="INZINT"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Associate Software Engineer
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Mern Stack Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> React JS,Js, Node js,
                    MS-SQL,PostgreSQL, Python, graphql
                    <br />
                    <strong>Duration:</strong> July 2020- December 2020
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed &amp; enhanced</strong> multiple
                        features with customizability option across web
                        application.
                      </li>

                      <li>
                        <strong>Created</strong>Enhanced Service Response to
                        extract data from the vendor to the back end and
                        performed CRUD operations on databases to load/ remove
                        data according to the business requirements. •
                      </li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
