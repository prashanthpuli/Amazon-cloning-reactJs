export const initialState = {
    basket : [],

    user:null,
}

function reducer(state , action){
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic To Adding Item to basket
            return { 
                ...state,
                basket:[...state.basket, action.item]

            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            // let new_basket = state.basket.filter((item) => item.id!==action.id);

            if(index >= 0){
                newBasket.splice(index, 1);

            }else{
                console.warn(`Can't remove (id: ${action.id} as it not in basket`)
            }
            return {...state, basket : newBasket};

        default:
            return state;
    }

}

export default reducer