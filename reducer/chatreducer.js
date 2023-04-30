const rootReducer = (state, action) => {
    switch (action.type) {
      case 'ANALYZED':
        return {
          ...state,
          phrases: action.payload.phrases,
          sentiments: action.payload.sentiments,
          analyzedText: action.payload.analyzedText,
        };
      case 'UPDATE_TEXT':
        return {
          ...state,
          payload: action.payload,
        };
      default:
        return state;
    }
  };

  export default rootReducer;