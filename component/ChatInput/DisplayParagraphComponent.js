import React, { Component } from 'react';
import {connect  } from "react-redux";

class DisplayParagraphComponent extends Component {
    render() {
        return (
            <section>
                <h2>Textual Mood</h2>
                <p>
                    {this.props.sentiments && this.props.sentiments.map(({ sentiment, offset, length }) => {
                        const subtext = this.props.analyzedText.substr(offset, length);
                        const color = COLORS[sentiment];
                        return <span key={offset} style={{ color }}>{subtext} </span>;
                    })}
                </p>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    sentiments: state.sentiments,
    analyzedText: state.analyzedText
  });

const COLORS = {
    positive: 'green',
    neutral: 'orange',
    negative: 'red',
  };

export default connect(mapStateToProps)(DisplayParagraphComponent);