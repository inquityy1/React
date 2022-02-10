const initialState = {
  cards: [
    {
      id: 1,
      title: "Alex",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 2,
      title: "Wilma",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 3,
      title: "Jhon",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
  ],
  users: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_CARD":
      let newCard = state.cards.filter((card) => {
        return action.id !== card.id;
      });
      return {
        ...state,
        cards: newCard,
      };
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
