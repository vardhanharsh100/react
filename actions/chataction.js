export const ANALYZED = 'ANALYZED';
export const UPDATE_TEXT = 'UPDATE_TEXT';

export const updateText = (message) =>{
    return {
        type: UPDATE_TEXT,
        payload: message
    };
};

export const analyzeMessage = (phrases, sentiments, analyzedText) => {
  return {
    type: ANALYZED,
    payload: {
        phrases,
        sentiments, 
        analyzedText
    }
  };
};

export const getTextAnalysisResult = async (endpoint, text) =>{
    const url = "https://microsoft-text-analytics1.p.rapidapi.com/" + endpoint;
    const response = await fetch(url, {
      "method": "POST",
      "headers": {
        "x-rapidapi-host": "microsoft-text-analytics1.p.rapidapi.com",
        "x-rapidapi-key": "your-api-key",
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        "documents": [{
          "id": "1",
          "language": "en",
          "text": text,
        }],
      }),
    });
    const body = await response.json();
    return body.documents[0];
}