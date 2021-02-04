import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ParticipantList from './ParticipantsList';
import dummyList from './dummyList'
import Stage from './Stage'
import Chatlog from './Chatlog'


export default function App(){
      return (
        <main>
            <ParticipantList participants={dummyList.list}/>
            <Stage />
            <Chatlog />
        </main>
      )
}
