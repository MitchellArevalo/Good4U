// <<<<<<< HEAD:src/reducer/cartReducer.js
// import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, SUBTRACT_TO_CART } from "./typeReducer";

// const initialState = JSON.parse(window.localStorage.getItem("cart")) || {
//   cardProducts: [],
// };

// export const updateLocalStorage = (state) => {
//   window.localStorage.setItem("cart", JSON.stringify(state));
// };

// const cartReducer = (state = initialState, action) => {
//   console.log(state.cardProducts);
//   switch (action.type) {
//     case ADD_TO_CART: {
//       const productInCartIndex = state.cardProducts.findIndex(
//         (product) => product.id === action.payload.id
//       );
//       console.log(productInCartIndex);

//       // if (productInCartIndex >= 0) {
//       //   const newCardProducts = [...state.cardProducts];
//       //   const newState = {
//       //     ...state,
//       //     cardProducts: [
//       //       newCardProducts.slice(0, productInCartIndex),
//       //       {
//       //         ...state.cardProducts[productInCartIndex],
//       //         quantity: state.cardProducts[productInCartIndex].quantity + 1,
//       //       },
//       //       newCardProducts.slice(productInCartIndex + 1),
//       //     ],
//       //   };
//       //   updateLocalStorage(newState);
//       //   return newState;
//       // }
      
//       if (productInCartIndex >= 0) {
//         const newCardProducts = [...state.cardProducts];
//         newCardProducts[productInCartIndex].quantity += 1; // Actualizar la cantidad del producto existente
//         const newState = {
//           ...state,
//           cardProducts: newCardProducts,
//         };

//         updateLocalStorage(newState);
//         return newState;
//       }
//       const newState = {
//         ...state,
//         cardProducts: [
//           ...state.cardProducts,
//           {
//             ...action.payload,
//             quantity: 1,
//           },
//         ],
//       };
//       updateLocalStorage(newState);
//       return newState;
//     }

//     case SUBTRACT_TO_CART:{
//       const productInCartIndex=state.cardProducts.findIndex(item=>item.id===action.payload.id)

//       const newCardProducts=[...state.cardProducts] 
//       newCardProducts[productInCartIndex].quantity -=1

//       const newState={ 
//         ...state,cardProducts:newCardProducts
//       }
//       return newState
//     }
//     case REMOVE_FROM_CART: {
//       const newState = {
//         ...state,
//         cardProducts: state.cardProducts.filter(
//           (product) => product.id !== action.payload.id
//         ),
//       };
//       updateLocalStorage(newState);
//       return newState;
//     }
//     case CLEAR_CART: {
//       const newState = { ...state, cardProducts: [] };
//       updateLocalStorage(newState);
//       return newState;
//     }
//     default:
//       return state;
//   }
// };
// export default cartReducer;


// //Arreglar lógica y acomodar error de arrays vacios. 
// //Acomodar código para que sea más limpio, con reduxtoolkit.
// =======
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, SUBTRACT_TO_CART } from "./typeReducer";

const initialState = JSON.parse(window.localStorage.getItem("cart")) || {
  cardProducts: [],
};

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

const cartReducer = (state = initialState, action) => {
  console.log(state.cardProducts);
  switch (action.type) {
    case ADD_TO_CART: {
      const productInCartIndex = state.cardProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      console.log(productInCartIndex);

      // if (productInCartIndex >= 0) {
      //   const newCardProducts = [...state.cardProducts];
      //   const newState = {
      //     ...state,
      //     cardProducts: [
      //       newCardProducts.slice(0, productInCartIndex),
      //       {
      //         ...state.cardProducts[productInCartIndex],
      //         quantity: state.cardProducts[productInCartIndex].quantity + 1,
      //       },
      //       newCardProducts.slice(productInCartIndex + 1),
      //     ],
      //   };
      //   updateLocalStorage(newState);
      //   return newState;
      // }
      
      if (productInCartIndex >= 0) {
        const newCardProducts = [...state.cardProducts];
        newCardProducts[productInCartIndex].quantity += 1; // Actualizar la cantidad del producto existente
        const newState = {
          ...state,
          cardProducts: newCardProducts,
        };

        updateLocalStorage(newState);
        return newState;
      }
      const newState = {
        ...state,
        cardProducts: [
          ...state.cardProducts,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
      updateLocalStorage(newState);
      return newState;
    }

    case SUBTRACT_TO_CART:{
      const productInCartIndex=state.cardProducts.findIndex(item=>item.id===action.payload.id)

      const newCardProducts=[...state.cardProducts] 
      newCardProducts[productInCartIndex].quantity -=1

      const newState={ 
        ...state,cardProducts:newCardProducts
      }
      return newState
    }
    case REMOVE_FROM_CART: {
      const newState = {
        ...state,
        cardProducts: state.cardProducts.filter(
          (product) => product.id !== action.payload.id
        ),
      };
      updateLocalStorage(newState);
      return newState;
    }
    case CLEAR_CART: {
      const newState = { ...state, cardProducts: [] };
      updateLocalStorage(newState);
      return newState;
    }
    default:
      return state;
  }
};
export default cartReducer;


//Arreglar lógica y acomodar error de arrays vacios. 
//Acomodar código para que sea más limpio, con reduxtoolkit.
// >>>>>>> bf53f8c6aeed5a99eaa1e12247766abb71a1add1:code/frontend/src/reducer/cartReducer.js
//Arreglar frontend