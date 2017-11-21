import React from 'react';
import App from '../../app/js/app/App';
import { mount } from 'enzyme';
import NotFound from '../../app/js/app/components/internal/NotFound';

/**
 * Configure Enzyme
 */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



test('A not found page is present', () => {
    const mock = mount(<App/>);

    expect(mock.find(NotFound)).toHaveLength(1);
});
