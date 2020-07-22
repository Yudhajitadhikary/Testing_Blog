import React from "react";
import {mount} from './component/enzyme';
import { shallowToJson } from "enzyme-to-json";
import App  from "./App";
import { Provider } from 'react-redux';
import store from './store';
let wrapper
it("should render TextFieldAtom component", () => {
  wrapper = mount(<Provider store={store}><App/></Provider>);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
  

});

