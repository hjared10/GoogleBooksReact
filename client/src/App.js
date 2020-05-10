import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Search from './pages/Search';
import Saved from './pages/Saved';
//import Nav from './pages/

class App extends Component {
  state = {
    
  };

  componentDidMount() {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=roman')
  .then((res) =>{
    console.log(res)
    const vault = res.data;
    const bookone = res.data.items[0].searchInfo.textSnippet;
    const booktwo = res.data.items[1].searchInfo.textSnippet;
    this.setState({bookone});
    this.setState({booktwo});
    console.log(vault.items);
    console.log(vault.items[1].searchInfo);
    this.setState({vault});
  })}

render() {
  return (
    <div>
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/Search"]}>
            <Search>

            </Search>
          </Route>
          <Route exact path="/Saved">
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
    <div>
      {this.state.bookone}
    </div>
    </div>
  );
}
};


export default App;

{/* So, i cannot figure out how to make this response work.  i Spent all my time trying to figure out how to make the page display the results from google book but i honestly cannot.  I keep getting a werid error that says objects cannot be childeren of react elements.
i do know that if i could a response that works, i would just drill those props in the searchcard element and let those
objects be saved to the database.*/}