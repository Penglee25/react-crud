import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, deleteProduct, productUpdate } from "../../../Actions/ProductAction";

export default function Table({ columns }) {

	const initProduct = {
		product_name: "",
		price: "",
		qty: "",
	};

	const dispatch = useDispatch();
	const loading = useSelector((state) => state.productReducer.productloading)

	const [products, setProducts] = useState(initProduct);
	const [toggleModal, setToggleModal] = useState(false);
	const [updateModalToggle, setUpdateModalToggle] = useState(false);

	
	const [data, setData] = useState([]);

	const handleChange = (e) => {
		e.preventDefault()
		setProducts({...products, [e.target.id]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(createProduct(products))
		setToggleModal(!toggleModal)
		setProducts({product_name: "", price: "", qty: "",})
	}

	const getAllProduct = async () => {
		const API = axios.create({ baseURL: "http://localhost:5000" });
		try {
			const {data: response} = await API.get("/product/list");
			setData(response)
		} catch (error) {
			console.error(error.message);
		}
	};
	
	useEffect(() => {
		getAllProduct();
	}, [])

	const handleDelete = (e) => {
		e.preventDefault()
		deleteProduct(e.target.id);
		window.location.reload(false)
	}

	const loadingComponent = () => {
		return (
			<>
				<div className="loading">Loading...</div>
			</>
		);
	};

	// update
	const [idUpdate, setIdUpdate] = useState(null);
	const [updateProducts, setUpdateProducts] = useState(initProduct);

	const handleUpdateSubmit = (e) => {
		e.preventDefault()
		dispatch(productUpdate(updateProducts))
		setUpdateModalToggle(!updateModalToggle)
		setProducts({product_name: "", price: "", qty: "",})
	}

	const handleUpdateChange = (e) => {
		e.preventDefault()
		setUpdateProducts({...updateProducts, [e.target.id]: e.target.value})

	}

	const handleClickUpdate = (e) => {
		setUpdateModalToggle(true)
		const id = e.target.dataset.id;
		const product = e.target.dataset.product;
		const price = e.target.dataset.price;
		const qty = e.target.dataset.qty;
		setUpdateProducts({id: id, product_name: `${product}`, price: price, qty: qty,})
		setIdUpdate(id)
	}

	const modal = () => {
		return <>
			<div className={toggleModal ? "fixed z-10 overflow-y-auto top-0 w-full left-0" : "fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"} id="modal">
				{loading && loadingComponent()}
				<div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					<div className="fixed inset-0 transition-opacity">
						<div className="absolute inset-0 bg-gray-900 opacity-75" />
					</div>
					<form onSubmit={handleSubmit} className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<span className='text-4xl'>Add Product</span>
							<hr className='my-3'/>
							<label>Product</label>
							<input 
							type="text" 
							className="w-full bg-gray-100 p-2 mt-2 mb-3" 
							id="product_name"
							onChange={handleChange}
							value={products.product_name}
							/>
							<label>Price</label>
							<input 
							type="number" 
							className="w-full bg-gray-100 p-2 mt-2 mb-3" 
							id="price"
							onChange={handleChange}
							value={products.price}
							/>
							<label>Quantity</label>
							<input 
							type="number" 
							className="w-full bg-gray-100 p-2 mt-2 mb-3" 
							id="qty"
							onChange={handleChange}
							value={products.qty}
							/>
						</div>
						<div className="bg-gray-200 px-4 py-3 text-right">
							<button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => setToggleModal(!toggleModal)}><i className="fas fa-times"></i> Cancel</button>
							<button type="submit" className="py-2 px-2 font-medium text-white text-center bg-green-500 rounded hover:bg-green-400 transition duration-300"><i className="fas fa-plus"></i> Create</button>
						</div>
					</form>
				</div>
			</div>
			</>
	}

	
	const updateModal = () => {
		return <>
			<div className={updateModalToggle ? "fixed z-10 overflow-y-auto top-0 w-full left-0" : "fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"} id="modal">
				{loading && loadingComponent()}
				<div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					<div className="fixed inset-0 transition-opacity">
						<div className="absolute inset-0 bg-gray-900 opacity-75" />
					</div>
					<form onSubmit={handleUpdateSubmit} className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<span className='text-4xl'>Update Product</span>
							<hr className='my-3'/>
							<label>Product</label>
							<input type="text" id="id" value={idUpdate} hidden onChange={handleUpdateChange}/>
							<input 
							type="text" 
							className="w-full bg-gray-100 p-2 mt-2 mb-3" 
							id="product_name"
							onChange={handleUpdateChange}
							value={updateProducts.product_name}
							/>
							<label>Price</label>
							<input 
							type="number" 
							className="w-full bg-gray-100 p-2 mt-2 mb-3" 
							id="price"
							onChange={handleUpdateChange}
							value={updateProducts.price}
							/>
							<label>Quantity</label>
							<input 
							type="number" 
							className="w-full bg-gray-100 p-2 mt-2 mb-3" 
							id="qty"
							onChange={handleUpdateChange}
							value={updateProducts.qty}
							/>
						</div>
						<div className="bg-gray-200 px-4 py-3 text-right">
							<button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => setUpdateModalToggle(!updateModalToggle)}><i className="fas fa-times"></i> Cancel</button>
							<button type="submit" className="py-2 px-2 font-medium text-white text-center bg-orange-500 rounded hover:bg-orange-400 transition duration-300"><i className="fas fa-plus"></i> Update</button>
						</div>
					</form>
				</div>
			</div>
			</>
	}

	return (
		<div className="max-w-6xl mx-auto px-7">
		{toggleModal && modal()}
		{updateModalToggle && updateModal()}
			<div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-5">
				<div class="p-6 text-center">
					<h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 mb-2">
						<div className="flex justify-between">
							<div>Item</div>
							<div>
								<button class="secondary-button" onClick={() => window.location.reload(true)}>Refresh</button>
								<button class="primary-button" onClick={() => setToggleModal(true)}>Add</button>
							</div>
						</div>
					</h4>
					<hr />
					<div>
						<div className="container mx-auto mt-4 overflow-x-auto">
							<div className="align-middle inline-block min-w-full shadow sm:rounded-lg border-b border-gray-200">
								<table
									className="min-w-full divide-y divide-gray-200">
									<thead>
										<tr className="border-b">
											<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">Product</th>
											<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">Price</th>
											<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">Quanty</th>
											<th scope="col" class="text-sm w-32 font-medium text-gray-900 px-6 py-4">Action</th>
										</tr>
									</thead>
									<tbody>
										{data.map((res, key) => (
											<>
											<tr className="bg-white border-b">
												<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{res.product_name}</td>
												<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${res.price}</td>
												<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{res.qty}</td>
												<td className="text-sm text-right text-gray-900 font-light px-6 py-4 whitespace-nowrap">
												<button onClick={handleClickUpdate} 
												data-id={res._id} 
												data-product={res.product_name} 
												data-price={res.price}
												data-qty={res.qty}
													className="py-2 font-medium text-white w-20 text-center bg-green-500 rounded hover:bg-green-400 transition duration-300">
													Update
												</button>
												<button id={res._id} onClick={handleDelete}
													className="py-2 font-medium text-white w-20 text-center bg-red-500 rounded hover:bg-red-400 transition duration-300">
													Delete
												</button>
												</td>
											</tr>
											</>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
