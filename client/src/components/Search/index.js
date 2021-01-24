import React from 'react';
import '../../style.css'

const Search = props => {
    return (
        <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search"
            id="search"
          />
          <br />
          <button onClick={props.handleFormSubmit} className="btn btn-primary">
            Search
            </button>
        </div>
      </form>
    )
};

export default Search 