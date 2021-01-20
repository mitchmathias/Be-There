import React from "react";

function Event(){
    return(
      <li className="list-group-item">
        <Container>
          <Row>
            <Col size="xs-8 sm-9">
              <h3>{title}</h3>
              <a href={href} />
            </Col>
          </Row>
        </Container>
      </li>
    )
}

export default Event;