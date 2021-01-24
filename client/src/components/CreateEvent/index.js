import React from "react";
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const CreateEvent = () => {
  return (
    <Container>
      <Box  component="span" m={1} >
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
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Event Date
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Date"
            aria-label="Date"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Description</span>
          <textarea
            className="form-control"
            aria-label="Description"
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
          />
        </div>
        <button type="button" className="btn btn-secondary">
          Create
        </button>
      </Box>
    </Container>
  );
}

export default CreateEvent;
