import React from 'react';
import { shallow } from 'enzyme';
import Grid from '../Grid';

it('renders a default grid with 3 columns', () => {
  const wrapper = shallow(<Grid>test</Grid>);
  expect(wrapper.prop('style').gridTemplateColumns).toEqual('1fr 1fr 1fr ');
});

it('renders a 5 column grid', () => {
  const wrapper = shallow(<Grid columns={5}>test</Grid>);
  expect(wrapper.prop('style').gridTemplateColumns).toEqual('1fr 1fr 1fr 1fr 1fr ');
});

it('overwrites the columns if a string is passed in', () => {
  const wrapper = shallow(<Grid columns="auto 1fr 20%">test</Grid>);
  expect(wrapper.prop('style').gridTemplateColumns).toEqual('auto 1fr 20%');
});
