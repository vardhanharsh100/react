import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateText, analyzeMessage, getTextAnalysisResult } from '../../actions/chataction';

class ChatInputComponent extends Component {
    handleChange = (event) => {
        this.props.updateUserInputMessage(event.target.value);
    }
    analyzeText = async () => {
        const phrasesResult = await getTextAnalysisResult('keyPhrases', this.props.payload);
        const sentimentsResult = await getTextAnalysisResult('sentiment', this.props.payload);
        this.props.analyzeText(phrasesResult.keyPhrases, sentimentsResult.sentences, 
            this.props.payload);
    }

    render() {       
        return (          
                <section>
                    <h2>Paragraph to Analyze</h2>
                    <textarea autoFocus onChange={this.handleChange}></textarea>
                    <div><button onClick={this.analyzeText}>Analyze Text</button></div>
                </section>           
        );
    }
}
const mapStateToProps = (state) => {
    return {
        payload: state.payload
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateUserInputMessage: (userInput) => dispatch( updateText(userInput)),
        analyzeText: (evaluatedPhrases, evaluatedSentiments, userInput) => dispatch(
            analyzeMessage(evaluatedPhrases, evaluatedSentiments, userInput)      
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatInputComponent);


