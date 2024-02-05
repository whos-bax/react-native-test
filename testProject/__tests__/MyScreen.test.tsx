import React from "react";

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
import MyScreen from "../src/MyScreen.tsx";

const tree =  renderer.create(<MyScreen/>);

it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
});

it("useEffect setStatus MyText", () => {
    act(() => jest.runAllTimers());
    const helloText = tree.root.findByProps({testID: "MyText"}).props;
    expect(helloText.children).toEqual("Hello")

    // act(() => jest.runAllTimers())
    // const byeText = tree.root.findByProps({testID: "MyText"}).props;
    // expect(byeText.children).toEqual("Bye")
})
