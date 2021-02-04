import ParticipantList from './ParticipantsList'
import dummyList from './dummyList'
import './Stage.css'

export default function Stage(){
    let participantsOnStage = dummyList.list.filter(participant => {
        return participant.onStage === true;
    });

    return(
        <div className='stage'>
            <ParticipantList participants={participantsOnStage} />
        </div>
    )
}