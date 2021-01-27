import React, { Component } from 'react';
import { Col, Row, Container } from "../Grid";
import API from '../../utils/API'
import { List, ListItem } from "../List";
import FakeFeed from './FakeFeed'

class Feed extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="" >
                        <FakeFeed />
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default Feed 