import React from 'react';
import TextInputCSSModules from 'ps-react/TextInputCSSModules';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInputCSSModules
        htmlId="example-optional"
        name="firstname"
        label="First Name"
        onChange={() => {}}
        required
        error="First name is required."
      />
    )
  }
}