import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/Search';
import Saved from './pages/Saved';
//import Nav from './pages/Nav;

function App() {
  //i decided to move these state components to their own page to hopefully make it easier to code.
//   const [items, setItems] = useState([])
//   const [formObject, setFormObject] = useState({})

//   useEffect(()=> {
//     initialize()
//   },[])

//   function initialize() {
// API.makeCall()
// .then(res => setItems(res.data)
//   )
//   .catch(err => console.log(err));
//   };
   // componentDidMount() {
  //   axios.get('https://www.googleapis.com/books/v1/volumes?q=roman')
  // .then((res) =>{
  //   console.log(res)
  //   const vault = res.data;
  //   const bookone = res.data.items[0].searchInfo.textSnippet;
  //   const booktwo = res.data.items[1].searchInfo.textSnippet;
  //   const titleone = res.data.items[0].volumeInfo.title;
  //   const smimgone = res.data.items[0].volumeInfo.imageLinks.smallThumbnail;
  //   this.setState({smimgone});
  //   this.setState({titleone})
  //   this.setState({bookone});
  //   this.setState({booktwo});
  //   console.log(vault.items);
  //   console.log(vault.items[1].searchInfo);
  //   this.setState({vault});
  // })}


  //having the router lines causes an error that i dont understand, so i have commented them out.
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/Search"]}>
            <Search />
          </Route>
          <Route exact path="/Saved">
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>    
  );
}


export default App;

{/* So, i cannot figure out how to make this response work.  i Spent all my time trying to figure out how to make the page display the results from google book but i honestly cannot.  I keep getting a werid error that says objects cannot be childeren of react elements.
i do know that if i could a response that works, i would just drill those props in the searchcard element and let those
objects be saved to the database.*/}