import React from 'react';
import { shallow, mount } from 'enzyme';
import Calculator from '../Calculator';

it('appends the integer to the input value on numeric button click', () => {
  const wrapper = mount(<Calculator />);
  wrapper.instance().handleNumericButtonClick(1);
  expect(wrapper.state('inputValues')[0]).toEqual(1);
  wrapper.instance().handleNumericButtonClick(5);
  expect(wrapper.state('inputValues')[0]).toEqual(15);
});

it('sets operation to "+" and selects second input on "+" click', () => {
  const wrapper = mount(<Calculator />);
  wrapper.instance().handleAddSubtractClick('+');
  expect(wrapper.state('operation')).toEqual('+');
});

it('sets operation to "-" and selects second input on "-" click', () => {
  const wrapper = mount(<Calculator />);
  wrapper.instance().handleAddSubtractClick('-');
  expect(wrapper.state('operation')).toEqual('-');
});

it('sets the value of the selected input on input change', () => {
  const wrapper = mount(<Calculator />);
  const event = { preventDefault: () => {}, target: { value: '123' } }
  wrapper.instance().handleInputChange(event);
  expect(wrapper.state('inputValues')[0]).toEqual(123);
});

it('does not set the value if it is NaN', () => {
  const wrapper = mount(<Calculator />);
  wrapper.setState({
    inputValues: [123, 0]
  });
  const event = { preventDefault: () => {}, target: { value: 'adsfsf' } }
  wrapper.instance().handleInputChange(event);
  expect(wrapper.state('inputValues')[0]).toEqual(123);
});

it('sets operation to "+" and selects second input when "+" key is pressed', () => {
  const wrapper = mount(<Calculator />);
  const event = { preventDefault: () => {}, key: '+' }
  wrapper.instance().handleInputKeyUp(event);
  expect(wrapper.state('operation')).toEqual('+');
});

it('sets operation to "-" and selects second input when "-" key is pressed', () => {
  const wrapper = mount(<Calculator />);
  const event = { preventDefault: () => {}, key: '-' }
  wrapper.instance().handleInputKeyUp(event);
  expect(wrapper.state('operation')).toEqual('-');
});

it('adds the value of the two inputs', () => {
  const wrapper = mount(<Calculator />);
  wrapper.setState({
    inputValues: [128, 200]
  });
  wrapper.instance().calculate();
  expect(wrapper.state('result')).toEqual(328);
});

it('subtracts the value of the two inputs', () => {
  const wrapper = mount(<Calculator />);
  wrapper.setState({
    inputValues: [128, 200],
    operation: '-'
  });
  wrapper.instance().calculate();
  expect(wrapper.state('result')).toEqual(-72);
});
