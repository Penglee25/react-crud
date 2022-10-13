import React, { useState } from "react";
import { useTable } from "react-table";

export default function Table({ columns, data }) {

	const [toggleModal, setToggleModal] = useState(false);
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
	} = useTable({
		columns,
		data,
	});

	const modal = () => {
		return <>
			<div className={toggleModal ? "fixed z-10 overflow-y-auto top-0 w-full left-0" : "fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"} id="modal">
				<div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					<div className="fixed inset-0 transition-opacity">
						<div className="absolute inset-0 bg-gray-900 opacity-75" />
					</div>
					<div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<label>Name</label>
							<input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" />
							<label>Url</label>
							<input type="text" className="w-full bg-gray-100 p-2 mt-2 mb-3" />
						</div>
						<div className="bg-gray-200 px-4 py-3 text-right">
							<button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => setToggleModal(!toggleModal)}><i className="fas fa-times"></i> Cancel</button>
							<button type="button" className="py-2 px-2 font-medium text-white text-center bg-green-500 rounded hover:bg-green-400 transition duration-300"><i className="fas fa-plus"></i> Create</button>
						</div>
					</div>
				</div>
			</div>
			</>
	}

	return (
		<div className="max-w-6xl mx-auto px-7">
		{toggleModal && modal()}
			<div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-5">
				<div class="p-6 text-center">
					<h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 mb-2">
						<div className="flex justify-between">
							<div>Item</div>
							<div>
								<button class="primary-button" onClick={() => setToggleModal(true)}>Add</button>
							</div>
						</div>
					</h4>
					<hr />
					<div>
						<div className="container mx-auto mt-4 overflow-x-auto">
							<div className="align-middle inline-block min-w-full shadow sm:rounded-lg border-b border-gray-200">
								<table
									className="min-w-full divide-y divide-gray-200"
									{...getTableProps()}
								>
									<thead>
										{headerGroups.map((headerGroup) => (
											<tr
												{...headerGroup.getHeaderGroupProps()}
											>
												{headerGroup.headers.map(
													(column) => (
														<th
															className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
															{...column.getHeaderProps()}
														>
															{column.render(
																"Header"
															)}
														</th>
													)
												)}
											</tr>
										))}
									</thead>
									<tbody
										className="bg-white divide-y divide-gray-200"
										{...getTableBodyProps()}
									>
										{rows.map((row, i) => {
											prepareRow(row);
											return (
												<tr {...row.getRowProps()}>
													{row.cells.map((cell) => {
														return (
															<td
																className="px-6 py-4 text-left whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"
																{...cell.getCellProps()}
															>
																{cell.render(
																	"Cell"
																)}
															</td>
														);
													})}
												</tr>
											);
										})}
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
