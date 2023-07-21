import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./typeReducer";

const initialState = JSON.parse(window.localStorage.getItem("cart")) || [];

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};


const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const productInCartIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productInCartIndex >= 0) {
        const newState = [
          ...state.slice(0, productInCartIndex),
          {
            ...state[productInCartIndex],
            quantity: state[productInCartIndex].quantity + 1,
          },
          ...state.slice(productInCartIndex + 1),
        ];
        updateLocalStorage(newState);
        return newState;
      }
      const newState = [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ];
      updateLocalStorage(newState);
      return newState;
    }
    case REMOVE_FROM_CART:{ 
        const newState=state.filter((product=>product.id !== action.payload.id))
        updateLocalStorage(newState)
        return newState
    }
    case CLEAR_CART:{ 
        updateLocalStorage([])
        return []
    }
    default:
      return state;
  }
};
export default cartReducer;
