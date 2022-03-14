
const initState = {
    products: [
        { id: 1, name: 'bag', image: 'bag', price: 20, discount: 2, discountPrice: 20 - 2 / 100 * 20, quantity: 1, discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " },
        { id: 2, name: 'dslr', image: 'dslr', price: 300, discount: 5, discountPrice: 30 - 5 / 100 * 30, quantity: 1, discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " },
        { id: 3, name: 'glasses', image: 'glasses', price: 10, discount: 3, discountPrice: 10 - 3 / 100 * 10, quantity: 1, discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " },
        { id: 4, name: 'iPhone', image: 'iPhone', price: 60, discount: 7, discountPrice: 60 - 7 / 100 * 60, quantity: 1, discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " },
        { id: 5, name: 'laptop', image: 'laptop', price: 65, discount: 5, discountPrice: 65 - 5 / 100 * 65, quantity: 1, discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " },
        { id: 6, name: 'perfume', image: 'perfume', price: 15, discount: 3, discountPrice: 15 - 3 / 100 * 15, quantity: 1, discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " },
        { id: 7, name: 'shoes', image: 'shoes', price: 10, discount: 1, discountPrice: 10 - 1 / 100 * 10, quantity: 1, discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " },
        { id: 8, name: 'watch', image: 'watch', price: 14, discount: 4, discountPrice: 14 - 4 / 100 * 14, quantity: 1, discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " }
    ],
    product: {},
}

const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case "PRODUCT":
            return { ...state, product: state.products.find(product => product.id === action.payload.id) }
            break;
        default:
            return state;
    }

}
export default ProductReducer