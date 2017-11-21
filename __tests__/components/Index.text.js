// Index.react-test.js
import React from 'react';
import Index from '../../app/js/app/components/Index';
import renderer from 'react-test-renderer';

test('Index page renders', () => {
    const component = renderer.create(<Index/>);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
