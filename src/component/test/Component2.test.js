import React from "react";
import { mount } from "../enzyme";
import { shallowToJson } from "enzyme-to-json";
import Component2 from '../Component2';
import { Provider } from 'react-redux';
import store from '../../store';
 let props={
     action:jest.fn()
 }
let wrapper;
it("should render TextFieldAtom component", () => {
  wrapper = mount(<Provider store={store}><Component2 {...props}/></Provider>);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
//   console.log(shallowToJson(wrapper).children[0].children[0].children[0])
  wrapper.find('#button').simulate('click')

});

