import Participant from './Participant'
import './ParticipantList.css'

export default function ParticipantList(props){
    let key = 0
    let participantsHTML = props.participants.map(participant => {
        key++
        return <Participant name={participant.name} avatar={participant.avatar} id={participant.id} inSession={participant.inSession} onStage={participant.onStage} key={participant.id}/> 
    })

    return(
        <div className='participants-list'>
            {participantsHTML}
        </div>
    )
}

