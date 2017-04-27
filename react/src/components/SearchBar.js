import React from 'react';
import { browserHistory, Link } from 'react-router';

const SearchBar = (props) => {
  return(
    <div className="searchbar">
      <form>
        <input name="query" type="text" onChange={props.onChange} value={props.query} placeholder= 'Search For An App...'/>
      </form>
    </div>
  )
}

export default SearchBar;
