import React from 'react';
import { browserHistory, Link } from 'react-router';

const SearchBar = (props) => {
  return(
    <div className="searchbar">
      <form onSubmit={props.onSubmit}>
        <label> Search: </label>
        <input name="search-term" type="text" onChange={props.onChange} value={props.search_term}/>

        <input type="submit" value="Search"/>
      </form>
    </div>
  )
}

export default SearchBar;
