import React from 'react';
import SearchBar from '../components/SearchBar';

class NavContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search_term: '',
      filtered_data: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSubmit(){
    event.preventDefault();
  }

  handleSearchTermChange(){
    this.setState({ search_term: event.target.value })
  }

  render() {
    return(
      <div>
        <h1> Navigation </h1>

        <div className='searchbar'>
          <SearchBar
            search_term = {this.state.search_term}
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
