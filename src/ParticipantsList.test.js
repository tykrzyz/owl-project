import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantsList from './ParticipantsList';

const participants = [
    {
        id: 1,
        name: 'Koren Templeton',
        avatar:
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    },
    {
        id: 2,
        name: 'Caty Flucker',
        avatar:
            'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
    }
]

describe('<ParticipantList />', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ParticipantsList participants={participants}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<ParticipantsList participants={participants}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
        });
})