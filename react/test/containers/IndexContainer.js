import IndexContainer from 'containers/IndexContainer';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import NewSiteForm from 'components/NewSiteForm';
import AllSites from 'components/AllSites';

describe('IndexContainer', function() {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<IndexContainer />);
  });

  it('should have a specified initial state', () => {
    expect(wrapper.state()).toEqual({
      sites: [],
      name: '',
      creator_id: 1,
      url: '',
      description: '',
      collaborators: '',
      github_url: '',
      experience: ''
    });
  });

  it('should render a new site form component', () => {
    expect(wrapper.find(NewSiteForm)).toBePresent();
  })

  it('should render an all sites component', () => {
    expect(wrapper.find(AllSites)).toBePresent();
  })

  it('should render an h1 (<h1>) with the title of the page', () => {
    expect(wrapper.find('h1').text()).toBe("Welcome to Appful");
  });

  //unsure if this test should be on the component where the state is changing or on the child

  // it('can fill in form', () => {
  //   wrapper.ref('name').simulate('change', {target: {value: 'Facebook'}});
  //   wrapper.ref('url').simulate('change', {target: {value: 'facebook.com'}});
  //   wrapper.ref('description').simulate('change', {target: {value: 'this is facebook, this is facebook, this is facebook, this is facebook'}});
  //   wrapper.find('form').simulate('submit');
  // })


})
