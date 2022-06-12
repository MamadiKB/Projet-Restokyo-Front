const initialState = {
  districtsList: [
    {
      id: 1,
      name: 'Shinjuku',
    },
    {
      id: 2,
      name: 'Ikebukuro',
    },
    {
      id: 3,
      name: 'Takadanobaba',
    },
    {
      id: 4,
      name: 'Asakusa',
    },
    {
      id: 5,
      name: 'Kagurazaka',
    },
    {
      id: 6,
      name: 'Akihabara',
    },
    {
      id: 7,
      name: 'Ueno',
    },
    {
      id: 8,
      name: 'Ginza',
    },
    {
      id: 9,
      name: 'Nakano',
    },
    {
      id: 10,
      name: 'Okubo',
    },
    {
      id: 11,
      name: 'Shibuya',
    },
    {
      id: 12,
      name: 'Harajuku',
    },
  ],
};

const districtsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default districtsReducer;
