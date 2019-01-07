import React, { Component } from "react";

class ShortenerResolution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const urlShortener = match.params.urlShortener;
    fetch(`http://localhost:3333/urls/${urlShortener}`)
      .then(res => res.json())
      .then(res => {
        const { originalURL } = res;
        window.location = originalURL;
      })
      .catch(console.log);
  }

  render() {
    const { loading, error } = this.state;
    if (loading) return <p>...loading</p>;
    if (error) return <p>{error}</p>;

    return (
      <div>
        <p>asdasdas</p>
      </div>
    );
  }
}

export default ShortenerResolution;
