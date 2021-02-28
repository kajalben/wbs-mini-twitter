import React, { useEffect, useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import { fetchData } from "./api";
import { Grid } from "@material-ui/core";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import Users from "./components/Users";
import Filter from './components/Filter';

function App() {
  const [messages, setMessages] = useState();
  const [users, setUsers] = useState();
  const [myUser, setMyUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [userInput, setUserInput] = useState();
  const [query, setQuery] = useState();
  const [isCheck, setIsCheck] = useState(false);


  const userUrl = "https://twittersucksbad.herokuapp.com/users/";
  const myUserUrl =
    "https://twittersucksbad.herokuapp.com/messages/6038c20f6a1c98b418758f2f";

  useEffect(() => {
    getMessages();
    getUsers(userUrl);
    getMyUser(myUserUrl);
  }, []);

  useEffect(() => {
    getMessages();
  }, [query, isCheck]);

  const handleChangeInput = (e) => {
    if(e.key === "Enter") setQuery(userInput);
    setUserInput(e.target.value);
  };

  const getMessages = () => {
    setIsLoading(true);
    let URL = 'https://twittersucksbad.herokuapp.com/messages/'
  
    if (query) {
      const sanitizedInput = query.replace(/[^\w\d\s.]+/g, "").toLowerCase();
      // const newResults =
      //   messages &&
      //   messages.filter((message) =>
      //     message.text.toLowerCase().includes(sanitizedInput.toLowerCase())
      //   );
      // setIsLoading(false);
      // setMessages(newResults);

      URL = `https://twittersucksbad.herokuapp.com/messages?text=${sanitizedInput}`;
    }
    //sort post by date 
    if(isCheck){
      URL = `https://twittersucksbad.herokuapp.com/messages?date=desc`;
    }
      const endpoint = encodeURI(URL);
      fetchData(endpoint).then((data) => {
        setIsLoading(false);
        setMessages(data);
      });
  };

  const getUsers = (url) => {
    setIsLoading(true);
    const endpoint = encodeURI(url);
    // Get message  from API
    fetchData(endpoint).then((data) => {
      setIsLoading(false);
      setUsers(data.data);
    });
  };

  const getMyUser = (url) => {
    setIsLoading(true);
    const endpoint = encodeURI(url);
    // Get message  from API
    fetchData(endpoint).then((data) => {
      setIsLoading(false);
      setMyUser(data);
    });
  };

  const dispalyMessages = () => {
    if (isLoading) {
      return (
        <span className="spinner">
          <i className="fas fa-spinner"></i>
        </span>
      );
    } else if (!messages.length) {
      return (
        <span className="error-message">Try again! No Twitts were found</span>
      );
    } else {
      return <Messages messages={messages} users={users} />;
    }
  };

  const handleDateFilter = () =>{
    setIsCheck(!isCheck);
  }

  return (
    <div className="App">
      <Grid className="grid-contianer" className="grid-container" container>
        <Grid item xs={12}>
          <Header onClick={handleChangeInput} />
        </Grid>
        <Grid
          container
          style={{ minHeight: "calc(100vh - 136px)", marginTop: "0.5rem" }}
        >
          <Grid item xs={12} sm={12} md={2}>
            <Sidebar onClick={ () => setQuery('')}/>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Switch>
              <Route exact path="/">
                {messages && users && dispalyMessages()}
              </Route>
              <Route path="/post/:type/:id?">
                {messages && users && dispalyMessages()}
              </Route>
              <Route exact path="/profile/">
                {myUser && <Profile {...myUser} />}
              </Route>
            </Switch>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            {users && <Filter checked={isCheck}  onChange={handleDateFilter}/>}
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            {users && <Users users={users} />}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
