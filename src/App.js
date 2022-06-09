import React from "react";
import "./styles.css";

export default class FetchRandomUser extends React.Component {
  state ={
    loading: true,
    loading: null,
  };

  async componentDidMount () {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0], loading: false});
  }

  render () {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
             <div>loading...</div>
        ) : (
          <div>
            <div>
             <div> {this.state.person.name.title}</div>
             <div> {this.state.person.name.first}</div>
             <div> {this.state.person.name.last}</div>
             <img src={this.state.person.picture.large} /> 
            </div>
          </div>
        )}
      </div>
    );
  }
  }

  // The first thing that occurs upon refresh is the component loads via "loading..."
  // Next ComponentDIdMount gets called and we fetch the data and get the data from response
  // The component loads twice. Once for the initial loading and the second time with the person.
  // Conditionally rendering components 