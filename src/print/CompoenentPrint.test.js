import React from "react";
import { mount } from "../component/enzyme";
import { shallowToJson } from "enzyme-to-json";
import ComponentPrint from './ComponentPrint';
import { Provider } from 'react-redux';
import store from './../store';
 
let wrapper;
it("should render TextFieldAtom component", () => {
  wrapper = mount(<Provider store={store}><ComponentPrint/></Provider>);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
  

});

