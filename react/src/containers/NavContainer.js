import React from 'react';
import SearchBar from '../components/SearchBar';

class NavContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      filtered_data: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.getSearchResults();
  }

  getSearchResults() {
    let body = { search: this.state.query }
    fetch(`/api/v1/searches`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ site: filtered_data })
    });
    // this.getSearchResults();
  }

  handleSearchTermChange(event){
    this.setState({ query: event.target.value })
  }



  render() {
    console.log(this.state.filtered_data)
    return(
      <div>
        <h1> Navigation </h1>

        <div className='searchbar'>
          <SearchBar
            query = {this.state.query}
            onSubmit = {this.handleSubmit}
            onChange = {this.handleSearchTermChange}
          />
        </div>

        {this.props.children}
      </div>

    )
  }
}

export default NavContainer;
