import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../Actions/AuthAction";

export default function Navigation() {
	const dispatch = useDispatch();
	const [isShow, setIsShow] = useState(false);
	const data = useSelector((state) => state.authReducers.authData);
	const { user, ...token } = data;

	const handleLogOut = () => {
		dispatch(logOut());
	};

	return (
		<div>
			<nav className="bg-white shadow-lg">
				<div className="max-w-6xl mx-auto px-4">
					<div className="flex justify-between">
						<div className="flex space-x-7">
							<div>
								<a
									href="#"
									className="flex items-center py-4 px-2"
								>
									<span className="font-semibold text-gray-500 text-lg">
										Hi {user.username}!
									</span>
								</a>
							</div>
						</div>
						<div className="hidden md:flex items-center space-x-3 ">
							<button
								onClick={handleLogOut}
								className="py-2 px-2 font-medium text-white bg-red-500 rounded hover:bg-red-400 transition duration-300"
							>
								Log Out
							</button>
						</div>
						<div className="md:hidden flex items-center">
							<button
								className="outline-none mobile-menu-button"
								onClick={() => setIsShow((prev) => !prev)}
							>
								<svg
									className=" w-6 h-6 text-gray-500 hover:text-green-500 "
									x-show="!showMenu"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M4 6h16M4 12h16M4 18h16"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className={isShow ? "mobile-menu" : "hidden mobile-menu"}>
					<ul className="">
						<li className="active text-right">
							<button
								onClick={handleLogOut}
								className="py-2 px-2 font-medium text-white bg-red-500 rounded hover:bg-red-400 transition duration-300"
							>
								Log Out
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
