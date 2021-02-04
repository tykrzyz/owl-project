import './Participant.css'
export default function Participant(props){
    let stageStatus = props.onStage ? 'on stage' : 'in session'
    return(
        <div className='participant'>
            <div className='avatar'>
                <img src={props.avatar} alt={props.name + `'s avatar`} />
            </div>
            <div className='info'>
                <h2>{props.name}</h2>
                <p>{stageStatus}</p>
            </div>
        </div>
    )
}