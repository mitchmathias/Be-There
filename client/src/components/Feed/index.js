import React, { Component } from 'react';
import { Col, Row, Container } from "../Grid";
import API from '../../utils/API'
import '../../style.css'
import { List, ListItem } from "../List";
import EventCard from '../EventCard';

class Feed extends Component {

    state = {
        search: "",
        events: [],
        filtEvents: []
    }

    componentDidMount() {
        this.getEvents()
    }

    handleInputChange = (e) => {
        const title = e.target.title;
        const value = e.target.value;
        this.setState({ [title]: value }, function () {
            const searched = this.state.search.toLowerCase()
            const filteredEvents = this.state.events.filter(evs => {
                let title = `${evs.title}`
                title = title.toLowerCase()
                return title.includes(searched)
            })
            this.setState({ filtEvents: filteredEvents })
        })
    }

    keyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
        }
    }

    getEvents = () => {
        API.getEvents().then(res => {
            console.log(res.data.results)
            this.setState({ events: res.data.results, filtEvents: res.data.results })
        })
    }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">

                    </Col>
                    <Col size="md-6 sm-12">

                            <List>
                                    <ListItem filtEvents ={this.state.filtEvents}/>
                                    <EventCard />
                            </List>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default Feed 