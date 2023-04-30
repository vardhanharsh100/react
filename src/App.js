import React from "react";
import ChatInputComponent from '../component/ChatInput/ChatInputComponent';
import DisplayParagraphComponent from '../component/ChatInput/DisplayParagraphComponent';
import KeyPhraseComponent from '../component/ChatInput/KeyPhraseComponent'

const App = () => {
    return (
        <div className='app'>
            <ChatInputComponent />
            <div className='results'>
                <DisplayParagraphComponent />
                <KeyPhraseComponent/>
            </div>
        </div>
    )
}

export default App