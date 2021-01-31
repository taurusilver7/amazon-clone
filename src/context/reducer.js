export const initialState = {
    cart: [],
    user: null,
}
// The reducer action causes the changes in the state. The state is placed in the Product component.

// Cart subtotal calculations
export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);
// intial amount: 0, add item.price to amount to give total subtotal.

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(cartItem => cartItem.id === action.id);
            let newCart = [...state.cart];
            
            if(index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.id}) as it's not in the cart!`);
            }
            return {
                ...state,
                cart: newCart,
            }
        case 'EMPTY_CART':
            return {
                ...state,
                cart: [],
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
};

export default reducer;