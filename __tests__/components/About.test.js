// About.react-test.js
import React from 'react';
import About from '../../app/js/app/components/About';
import renderer from 'react-test-renderer';

test('About page renders', () => {
    const component = renderer.create(<About/>);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
