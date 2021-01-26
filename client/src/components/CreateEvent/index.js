import React, { useState } from "react";
import axios from "axios";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Jumbotron from '../Jumbotron'
import HomeNav from '../Navs/HomeNav'
import Wrapper from '../Wrapper'




const CreateEvent = () => {

  const [organization, setOrganization] = useState("")
  const [eventName, setEventName] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("2017-05-24")
  const [description, setDescription] = useState("")
  const [imgUrl, setImgUrl] = useState("")

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));




  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("/api/events", {
        organization: organization,
        title: eventName,
        photoUrl: imgUrl,
        location: location,
        body: description
      })
      .then((response) => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful submit");
        }
      })
      .catch((error) => {
        console.log("submit error: ");
        console.log(error);
      });
  }


  return (
    <Wrapper>
    <Jumbotron />
    < HomeNav />
    <Container>

      <Box component="span" m={1} >
        <form className={useStyles.container} noValidate onSubmit={handleSubmit}>
          <h1>Create Your Event</h1>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Organization Name
          </span>
            <input
              type="text"
              className="form-control"
              placeholder="Organization"
              aria-label="Organization"
              aria-describedby="basic-addon1"
              value={organization}
              onChange={e => setOrganization(e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Event Name
          </span>
            <input
              type="text"
              className="form-control"
              placeholder="Event"
              aria-label="Event"
              aria-describedby="basic-addon1"
              value={eventName}
              onChange={e => setEventName(e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Event Location
          </span>
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              aria-label="Location"
              aria-describedby="basic-addon1"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </div>
          <div>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                
                value={date}
                onChange={e => setDate(e.target.value)}
                className={useStyles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
      
        </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Description</span>
              <textarea
                className="form-control"
                placeholder="ie: time of the event"
                aria-label="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="addon-wrapping">
                @
          </span>
              <input
                type="text"
                className="form-control"
                placeholder="Linke to your image"
                aria-label="image url"
                aria-describedby="addon-wrapping"
                value={imgUrl}
                onChange={e => setImgUrl(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-secondary" onClick={handleSubmit}>
              Create
        </button>
        </form>
      </Box>
    </Container>
    </Wrapper> 
  );
      }

export default CreateEvent;
