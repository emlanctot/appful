import React from 'react';
import { browserHistory, Link } from 'react-router';

const SearchBar = (props) => {
  return(
    <div className="searchbar">
      <form onSubmit={props.onSubmit}>
        <label> Search: </label>
        <input name="query" type="text" onChange={props.onChange} value={props.query} placeholder= 'Search for an app...'/>

        <input type="submit" value="Search"/>
      </form>
    </div>
  )
}

export default SearchBar;
