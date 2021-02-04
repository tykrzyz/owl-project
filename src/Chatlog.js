import dummyList from './dummyList'
import Participant from './Participant'

export default function Chatlog(){
    let log = [];
    
    dummyList.chatEvents.forEach(event => {
        if(event.type === 'message'){
            log.push(<SendMessage name={event.participantId} time={formatTime(event.timestamp)} message={event.message} />)
        }
        else{
            log.push(<SendReact name={event.participantId} text='test' />)
        }
        // switch(event.type){
        //     case 'message':
        //         log.push(<SendMessage name={event.participantId} time={event.time} message={event.messsage} />)
        //         break;
        //     case 'thumbs-up':
        //         log.push(<SendThumbsUp name={event.participantId} />)
        //         break;
        //     case 'thumbs-down':
        //         log.push (<SendThumbsDown name={event.participantId} />)
        //         break;
        //     case 'clap':
        //         log.push(<SendClap name={event.participantId} />)
        //         break;
        //     case 'raise-hand':
        //         log.push(<SendRaisedHand name={event.participantId} />)
        //         break;
        //     default:
        //         log.push(<p>Who Knows</p>)
        // }
    })
    console.log(log);
    return(
        <div className='log'>
            {log}
        </div>
    )
}

function SendMessage(props){
    return(
        <div className='message'>
            <p><b>{props.name}</b>{props.time}</p>
            <p>{props.message}</p>
        </div>
    )
}

function SendReact(props){
    return(
        <div className='react'>
            <p><b>{props.name}</b>{props.text}</p>
        </div>
    )
}

function formatTime(time){
    let [hour, minute, second] = new Date(time).toLocaleTimeString("en-US").split(/:| /)
    return `${hour}:${minute}`;
}