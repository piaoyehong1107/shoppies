import React from "react";
import DisplayNominatedMovie from '../src/DisplayNominatedMovie'
import DisplaySearchedMovie from '../src/DisplaySearchedMovie'

class Search extends React.Component {
    state = {
        searchedValue: "",
        searchedMovie: null,
        nominatedMovie: []
      };
  
      fetchData = (searchedValue) => {
        const url = `http://www.omdbapi.com/?s=${searchedValue}&apikey=38e6a265&`
        fetch(
          url,
          {
            method: "GET"
          }
        )
          .then((response) => response.json())
          .then((data) => {
              console.log(data)
            this.setState({
                searchedMovie: data.Search,
                searchedValue: ''
            });
          })
          .catch((err) => {
            this.setState({
                searchedMovie: null,
            });
          });
      };

    render() {
        console.log(this.state.searchedMovie)
        return (
          <div>
            <input
            value={this.state.searchedValue}
            onChange={(e) => {
            this.setState({ searchedValue: e.target.value})
          }}
          style={{
            marginRight: '8px',
            marginBottom: '8px'
          }}
        />
        <button onClick={() => this.fetchData(this.state.searchedValue)} >Search</button>
        <div>Result for </div>
        <div style={{marginBottom: '32px'}}>
            <DisplaySearchedMovie Movie={this.state.searchedMovie} />
        </div>
        <div>Nominations</div>
        <div>
            <DisplayNominatedMovie nominatedMovie={this.state.nominatedMovie} />
        </div>
          </div>
        );
      }
  }
  export default Search;