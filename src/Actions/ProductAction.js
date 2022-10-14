import * as productApi from "../Api/ProductRequest.js";

export const createProduct = (formData) => async (dispatch) => {
	dispatch({ type: "PRODUCT_START" });
	try {
		const { data } = await productApi.createProduct(formData);
		dispatch({ type: "PRODUCT_SUCCESS", data: data });
	} catch (error) {
		console.log(error);
		dispatch({ type: "PRODUCT_FAIL" });
	}
};

export const productUpdate = (formData) => async (dispatch) => {
	dispatch({ type: "PRODUCT_START" });
	try {
		const { data } = await productApi.updateProduct(formData);
		dispatch({ type: "PRODUCT_SUCCESS", data: data });
	} catch (error) {
		console.log(error);
		dispatch({ type: "PRODUCT_FAIL" });
	}
};

export const deleteProduct = async (data) => {
    try {
        await productApi.deleteProduct(data);
    } catch (error) {
        console.error(error.message);
    }
}