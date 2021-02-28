import Card from "./Card";
import { useParams, useLocation } from "react-router-dom";

const Messages = ({ messages, users }) => {
  const { id, type } = useParams();
  const location = useLocation();

  const dispalyMessages = () => {

    if(location.pathname === '/' || type === 'messages'){
      if (id) {
        // get post by  post Id
        return messages
          .filter((msg) => msg._id === id)
          .map((msg) => <Card key={msg._id} {...msg} users={users} />);
      } else {
        //get all post
         return messages.map((message) => {
          return <Card key={message._id} {...message} users={users} />;
        });
      }
    }

    //get post by useId
    if(type === 'user' && id){
      return messages.filter( msg => msg.user === id).map( msg => <Card key={msg._id} {...msg} users={users} />);
    }
  };

  return (
    <div>
      {dispalyMessages()}
    </div>
  );
};

export default Messages;
