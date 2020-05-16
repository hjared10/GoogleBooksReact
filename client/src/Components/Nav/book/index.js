import React from 'react';
import Api from '../../../utils/API'

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            saved:false
        };
    };
    saveBook = event => {
        event.preventDefault();
        this.setState({ saved: true });
        API.saveBook({
          title: this.props.title,
          authors: this.props.authors,
          description: this.props.description,
          link: this.props.link,
          image: this.props.image,
          google_id: this.props.google_id
        })
          .then()
          .catch(err => console.log(err));
      };
}