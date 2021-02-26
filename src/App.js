import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { fetchData } from "./api";
import { Row } from "react-bootstrap";
import { Grid } from "@material-ui/core";

function App() {
  const [messages, setMessages] = useState();
  const [users, setUsers] = useState();
  const [myUser, setMyUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // Get Post API when Query and page changed

  const msgURL = "https://twittersucksbad.herokuapp.com/messages/";
  const userUrl = "https://twittersucksbad.herokuapp.com/users/";
  const myUserUrl = 'https://twittersucksbad.herokuapp.com/messages/6038c20f6a1c98b418758f2f';
  useEffect(() => {
    getMessages(msgURL);
    getUsers(userUrl);
    getMyUser(myUserUrl);
  }, []);

  const getMessages = (url) => {
    setIsLoading(true);
    const endpoint = encodeURI(url);
    // Get message  from API
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
      console.log(data);
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
      return <Sidebar messages={messages} users={users} myUser={myUser}/>;
    }
  };

  return (
    <div className="App">
      <div className='main_container'></div>
      <Grid container>
        {/* <Grid item xs={12}>
          <Header />
        </Grid> */}

        <Grid  item xs={12}>{messages && users && dispalyMessages()}</Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
