import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import {fetchData} from './api';

function App() {
  const [messages, setMessages] = useState();
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] =useState(true);
  // Get Post API when Query and page changed

  const msgURL = 'https://twittersucksbad.herokuapp.com/messages/';
  const userUrl = 'https://twittersucksbad.herokuapp.com/users/';
  useEffect( () => {
    getMessages(msgURL);
    getUsers(userUrl);
  }, []);

  const getMessages = (url) => {
    setIsLoading(true);
    const endpoint = encodeURI(url);
     // Get message  from API
    fetchData(endpoint).then( (data) =>{
      setIsLoading(false);
      setMessages(data);
    })
  }

  const getUsers = (url) => {
    setIsLoading(true);
    const endpoint = encodeURI(url);
     // Get message  from API
    fetchData(endpoint).then( (data) =>{
      setIsLoading(false);
      setUsers(data.data);
      console.log(data.data)
    })
  }

  const dispalyMessages = () =>{
    if(isLoading){
      return <span className="spinner"> 
        <i className="fas fa-spinner"></i>
      </span>
    }
    else if(!messages.length){
      return <span className="error-message">Try again! No Twitts  were found</span>
    }
    else{
      return <Sidebar messages={messages} users={users}/>
    }

  }

  return (
    <div className="App">
      
      {/* <Header />
      <Main /> */}
       {messages && users && dispalyMessages()}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
