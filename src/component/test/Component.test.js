import React from "react";
import { mount } from "../enzyme";
import { shallowToJson } from "enzyme-to-json";
import Component from '../Component';
import { mapStateToProps, mapDispatchToProps } from "../Component";
 import { Provider } from 'react-redux';
 import store from '../../store';
let wrapper;
it("should render TextFieldAtom component", () => {
  wrapper = mount(<Provider store={store}><Component/></Provider>, { attachTo: document.body });
  expect(shallowToJson(wrapper)).toMatchSnapshot();
  wrapper.find('#testOnClick').simulate('click')
  shallowToJson(wrapper).children[0].children[0].node.instance.handleClick()
  shallowToJson(wrapper).children[0].children[0].node.instance.childrenClick()
  shallowToJson(wrapper).children[0].children[0].children[0].children[0].props.content()
  shallowToJson(wrapper).children[0].children[0].children[0].children[4].children[0].props.onSubmit({email:'',password:'',address:'',pincode:''})
  wrapper.setProps({})
//   console.log(shallowToJson(wrapper).children[0])
//   console.log(shallowToJson(wrapper).node.instance.childrenClick)
  // shallowToJson(wrapper).node.instance.childrenClick()
});
it("should map state to props", () => {
  const initialState = {
    email: '',
    password:'',
    address:'',
    pincode:'',
    phoneno:''
  };
  expect(mapStateToProps(initialState).email).toEqual('');
});
it("should call mapDispatchToProps", () => {
  const dispatch = jest.fn();
  mapDispatchToProps(dispatch).submitAction();
});