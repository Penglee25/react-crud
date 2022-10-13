import React, { useState } from "react";
import Table from "../../Components/Content/Table/Table";
import "./Dashboard.scss";

export default function Dashboard() {
	const initRow = {
		username: "sample1",
		email: "sample1",
		gender: "sample1",
		phone: "sample1",
	};
	const [rowdata, setRowData] = useState([initRow]);
	const onAddRowClick = () => {
		setRowData(
			rowdata.concat({
				username: "asd",
				email: "asd",
				gender: "asd",
				phone: "asd",
			})
		);
	};
	const columns = [
		{
			Header: "Name",
			accessor: "username",
		},
		{
			Header: "Email",
			accessor: "email",
		},
		{
			Header: "Gender",
			accessor: "gender",
		},
		{
			Header: "Phone",
			accessor: "phone",
		},
	];

	return (
		<div>
			<Table columns={columns} data={rowdata} />
		</div>
	);
}
