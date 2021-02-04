import ParticipantList from './ParticipantsList'
import dummyList from './dummyList'


export default function ChatAndPeopleWindow(){
    let onParticipantScreen = true;
    return 

    function useCorrectScreen(){
        if(onParticipantScreen)
            <ParticipantList participants={dummyList.list}/>
        else{
            
        }
    }
}