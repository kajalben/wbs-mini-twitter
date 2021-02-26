import Card from "./Card";
import CardBig from "./CardBig";
import { useParams } from "react-router-dom";

const Messages = ({ messages, users }) => {
  const { id } = useParams();

  return (
    <div>
      {id
        ? messages
            .filter((msg) => msg._id ===  id)
            .map((msg) => <CardBig  key={msg._id} {...msg} users={users} />)
        : messages.map((message) => {
            return <Card key={message._id} {...message} users={users} />;
          })}
    </div>
  );
};

export default Messages;
