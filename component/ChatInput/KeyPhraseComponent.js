import React, { Component } from 'react';
import { connect } from "react-redux";

class KeyPhraseComponent extends Component {
    render() {
        return (
            <section>
                <h2>Key Phrases</h2>
                {this.props.phrases &&
                    <ul>
                        {this.props.phrases.map(phrase => (
                            <li key={phrase}>{phrase}</li>
                        ))}
                    </ul>
                }
            </section>
        )
    }

}

const mapStateToProps = state => ({
    phrases: state.phrases
  });

  export default connect(mapStateToProps)(KeyPhraseComponent);