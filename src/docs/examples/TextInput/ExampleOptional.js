import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Optional TextBox */
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInput htmlId="example-optional" name="firstname" label="First Name" onChange={() => {}}/>
    )
  }
}