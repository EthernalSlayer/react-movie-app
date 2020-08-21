import React from 'react';
import axios from 'axios';

class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '',
      comment: '',
    };
  }

  render() {
    return <div className="FormMovie">Movie</div>;
  }
}

export default FormMovie;
