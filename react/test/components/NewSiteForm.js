import NewSiteForm from 'components/NewSiteForm';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';


describe('NewSiteForm', function() {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <NewSiteForm
        nameValue= ''
        urlValue= ''
        descriptionValue= ''
        collaboratorsValue= ''
        githubUrlValue= ''
        experienceValue= ''
      />);
  });

  // **couldn't get this to work- instead found props to be an empty object
  it('should have a specified initial props', () => {
    expect(wrapper.props()).toEqual({
      nameValue: '',
      urlValue: '',
      descriptionValue: '',
      collaboratorsValue: '',
      githubUrlValue: '',
      experienceValue: ''
    });
  });


  it('should render an label (label) with the title of the page', () => {
    expect(wrapper.find('label').length).toEqual(6);
  });

})
