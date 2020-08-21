import React from 'react';
import axios from 'axios';

class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const url = 'https://post-a-form.herokuapp.com/api/movies/';
    axios
      .post(url, this.state)
      .then((response) => response.data)
      .then((response) => {
        alert(`Le film a été ajouté avec l'ID ${response.id} !`);
      })
      .catch((error) => {
        console.error(error);
        alert(`Erreur lors de l'ajout du film: ${error.message}`);
      });
  };

  render() {
    return (
      <div className="FormMovie">
        <h1>Saisie d'un film</h1>

        <form onSubmit={this.handleSubmit}>
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
              <label htmlFor="poster">Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.handleChange}
                value={this.state.poster}
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
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovie;
