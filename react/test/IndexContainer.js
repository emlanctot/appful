import IndexContainer from 'containers/IndexContainer'
import { mount } from 'enzyme';
import React from 'react';

describe('IndexContainer', function() {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<IndexContainer />);
  });

  it('should have a specified initial state', () => {
    expect(wrapper.state()).toEqual({ sites: [] });
  })

  it('should render a new site form component', () => {
    expect(wrapper.find(SiteForm)).toBePresent();
  })

  it('should render an all sites component', () => {
    expect(wrapper.find(AllSites)).toBePresent();
  })

})
