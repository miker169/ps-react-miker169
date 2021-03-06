import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInput
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