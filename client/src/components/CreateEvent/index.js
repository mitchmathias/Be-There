import React from "react";

function CreateEvent() {
  return (
    <div className="container mt-5">
      <div className="Card">
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
        <button type="button" class="btn btn-secondary">
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateEvent;
