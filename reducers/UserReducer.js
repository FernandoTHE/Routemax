//armazenamentos de dados do usuário//

//armazena avatar//
export const initialState = {
  avatar: '',
  favorites: [],
  appointments: [],
};
//uso das informações em todas as telas//
export const userReducer = (state, action) => {
  switch (action.type) {
    //troca avatar
    case 'setAvatar':
      return {...state, avatar: action.payload.avatar};
    default:
      return state;
  }
};
