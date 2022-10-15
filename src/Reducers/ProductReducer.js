const productReducer = (
	state = {
		productData: [],
		productloading: false,
		error: false,
	},
	action
) => {
	switch (action.type) {
		case "PRODUCT_START":
			return { ...state, productloading: true, error: false };
		case "PRODUCT_SUCCESS":
            console.log('pumasok');
			return {
				...state,
				productData: action.data,
				productloading: false,
				error: false,
			};
		case "PRODUCT_FAIL":
			return { ...state, productloading: false, error: true };


		default:
			return state;
	}
};

export default productReducer;
