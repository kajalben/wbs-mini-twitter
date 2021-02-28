import Card from "./Card";
import { useParams } from "react-router-dom";

const Messages = ({ messages, users }) => {
  const { id, type } = useParams();

  const dispalyMessages = () => {
    if(type === 'messages'){
      if (id) {
        return messages
          .filter((msg) => msg._id === id)
          .map((msg) => <Card key={msg._id} {...msg} users={users} />);
      } else {
         return messages.map((message) => {
          return <Card key={message._id} {...message} users={users} />;
        });
      }
    }
    

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
