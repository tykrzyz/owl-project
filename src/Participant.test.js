import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './Participant';

const participant = {
    id: 1,
    name: 'Koren Templeton',
    avatar:
        'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
    inSession: true,
    onStage: true
}

describe('<Participant />', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Participant {...participant}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<Participant {...participant}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
        });
})