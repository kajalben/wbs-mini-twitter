import Card from './Card';

const Messages = ({messages, users}) => {
    return (
        <div>
        {messages.map( (message) =>{
                return <Card key={message._id} {...message}  users={users}/>
        })}
        </div>
    )
}

export default Messages;