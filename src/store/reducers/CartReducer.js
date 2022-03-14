const initState = {
    products: [],
    TotalPrice: 0,
    TotalQuantity: 0
}
const CartReducer = (state = initState, action) => {
    let TQuantity;
    let TPrice;
    let product;


    switch (action.type) {

        case "ADD-TO-CART":

            const check = state.products.find((arprd) => action.payload.product.id === arprd.id)
            if (check) {
                return state
            } else {
                const { product } = action.payload
                TQuantity = state.TotalQuantity + product.quantity;
                TPrice = state.TotalPrice + product.discountPrice * product.quantity
                return { ...state, products: [...state.products, product], TotalPrice: TPrice, TotalQuantity: TQuantity }
            }
            break;
        case "INCREMENT":
            product = action.payload.product;


            TQuantity = state.TotalQuantity + 1;
            TPrice = state.TotalPrice + product.discountPrice 
            product.quantity += 1
            return { ...state, products: [...state.products], TotalPrice: TPrice, TotalQuantity: TQuantity }
            break;

        case "DECREMENT":
            product = action.payload.product;
            if (product.quantity > 1) {

                product.quantity -= 1
                TQuantity = state.TotalQuantity - 1;
                TPrice = state.TotalPrice - product.discountPrice
                return { ...state, products: [...state.products], TotalPrice: TPrice, TotalQuantity: TQuantity }
            } else {
                return state;
            }
            break;
        case "DELETE":
            product = action.payload.product;
            const found = state.products.filter(arprd => product.id !== arprd.id)
            TQuantity = state.TotalQuantity - product.quantity;
            TPrice = state.TotalPrice - (product.discountPrice * product.quantity)
            return { ...state, products: [...found], TotalPrice: TPrice, TotalQuantity: TQuantity }
            break;




        default:
            return state;

    }
}
export default CartReducer;