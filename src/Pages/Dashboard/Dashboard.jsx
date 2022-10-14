import React, { useState } from "react";
import Table from "../../Components/Content/Table/Table";
import "./Dashboard.scss";

export default function Dashboard() {
	const initRow = {
		product: "asd",
		price: "asd",
		qty: "asd",
	};
	const [rowdata, setRowData] = useState([initRow]);
	
	const columns = [
		{
			Header: "Product",
			accessor: "product_name",
		},
		{
			Header: "Price",
			accessor: "price",
		},
		{
			Header: "Quantity",
			accessor: "qty",
		},
	];

	return (
		<div>
			<Table columns={columns}/>
		</div>
	);
}
