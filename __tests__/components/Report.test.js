// Report.react-test.js
import React from 'react';
import Report from '../../app/js/app/components/Report';
import renderer from 'react-test-renderer';

test('Report page renders', () => {
    const component = renderer.create(<Report/>);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
