import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import MainContent from './components/mainContent';
import MovieDetail from './components/movieDetail';

function App() {

  const [watchList,setWatchList] = useState([]);
  
  useEffect(() => {
        getWatchListLocal();
  }, []);

  function getWatchListLocal(){
      if (localStorage.getItem('watchList') !== null) {
          setWatchList(JSON.parse(localStorage.getItem('watchList')));
      }
  }

  return (
      <div className="App">
          <Router>
          <Nav watchList={watchList} setWatchList={setWatchList} />
            <Switch>
              <Route path="/movie/:id" component={MovieDetail} />
              <Route path='/login' component={Login}/>
              <Route path='/signup' component={Signup}/>
               {/* <Login/> */}
              <MainContent watchList={watchList} setWatchList={setWatchList} />
            </Switch>
          </Router>
      </div>
  );
}

export default App;
