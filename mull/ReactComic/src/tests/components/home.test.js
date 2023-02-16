import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Home } from '../pages/home/Home';

describe('Home', () => {
  it('renders welcome message', () => {
    const wrapper = shallow(<Home />);
    const welcome = <h2>Welcome to the Homepage!</h2>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });
});