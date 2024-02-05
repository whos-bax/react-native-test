import React from "react";

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
import HomeScreen from "../src/HomeScreen.tsx";

const tree =  renderer.create(<HomeScreen/>);

it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
});

it("button Press", () => {
    // press the button
    const button = tree.root.findByProps({testID: "HomeButton"}).props;
    act(() => button.onPress());
    // expect text to equal "Button Pressed"
    const text = tree.root.findByProps({testID: "HomeText"}).props;
    expect(text.children).toEqual("Button Pressed")
})
