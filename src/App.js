import Home from "./Components/JS/Home.js";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/JS/Login.js";
import Banner from "./Components/JS/Banner_1";
import Row from "./Components/JS/Row.js";
import Nav from "./Components/JS/Nav";
import Signup from "./Components/JS/Signup.js";
import requests from "./Components/JS/requests";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
function App() {
  const [{ user }, dispatch] = useStateValue();

  //const history = useHistory("/");

  useEffect(() => {}, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          {!user ? (
            <>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </>
          ) : (
            <Route path="/home">
              <>
                <Nav />
                <Banner />
                <Row
                  title="Netflix Originals"
                  fetchURL={requests.fetchNetflixOriginals}
                  isLargeRow={true}
                ></Row>
                <Row
                  title="Trending Now"
                  fetchURL={requests.fetchTrending}
                ></Row>
                <Row title="Top Rated" fetchURL={requests.fetchTopRated}></Row>
                <Row
                  title="Action Movies"
                  fetchURL={requests.fetchActionMovies}
                ></Row>
                <Row
                  title="Comedy Movies"
                  fetchURL={requests.fetchComedyMovies}
                ></Row>
                <Row
                  title="Horror Movies"
                  fetchURL={requests.fetchHorrorMovies}
                ></Row>
                <Row
                  title="Romance Movies"
                  fetchURL={requests.fetchRomanceMovies}
                ></Row>
                <Row
                  title="Documentaries"
                  fetchURL={requests.fetchDocumentaries}
                ></Row>
              </>
            </Route>
          )}
          {/* <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
