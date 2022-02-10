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
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
