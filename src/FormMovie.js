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

  handleChange = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div className="FormMovie">
        <h1>Saisie d'un film</h1>

        <form>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="title">Titre</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="url">Poster</label>
              <input
                type="text"
                id="url"
                name="url"
                onChange={this.handleChange}
                value={this.state.url}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Commentaires</label>
              <textarea
                id="comment"
                name="comment"
                onChange={this.handleChange}
                value={this.state.comment}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovie;
