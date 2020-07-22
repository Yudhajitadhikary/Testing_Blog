import React from "react";
import { mount } from "../enzyme";
import { shallowToJson } from "enzyme-to-json";
import Component1 from '../Component1';
import { Provider } from 'react-redux';
import store from '../../store';
 
let wrapper;
it("should render TextFieldAtom component", () => {
  wrapper = mount(<Provider store={store}><Component1/></Provider>);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
  

});

