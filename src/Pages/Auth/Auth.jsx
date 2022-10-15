import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../Actions/AuthAction";

export default function Auth() {
	const loading = useSelector((state) => state.authReducers.loading);
	const dispatch = useDispatch();

	const [isSignIn, setIsSignIn] = useState(false);
	const [confirmPass, setconfirmPass] = useState(false);
	const [isSuccess, setisSuccess] = useState(false);

	const initialState = {
		email: "",
		username: "",
		firstname: "",
		lastname: "",
		password: "",
		cpassword: "",
	};

	const [data, setData] = useState(initialState);

	const handleChange = (e) => {
		setData({ ...data, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(isSignIn);
		if (isSignIn) {
			if (data.password === data.cpassword) {
				signUp(data);
				setData(initialState); //to clear form
				setisSuccess(true);
				return setconfirmPass(false);
			} else {
				setisSuccess(false);
				return setconfirmPass(true);
			}
		}

		return dispatch(logIn(data));
	};

	const login = () => {
		return (
			<div className="max-w-6xl mx-auto px-7 flex justify-center">
				<form
					class="relative flex flex-col bg-clip-border bg-white text-gray-700 shadow-md mt-5 login p-3"
					onSubmit={handleSubmit}
				>
					<div
						className="bg-white text-gray text-center"
						style={{ fontSize: "25px" }}
					>
						<h1>Login</h1>
					</div>
					<input
						type="email"
						id="email"
						name="email"
						className="form-input"
						placeholder="Email"
						onChange={handleChange}
					/>
					<input
						type="password"
						id="password"
						name="password"
						className="form-input"
						placeholder="Password"
						onChange={handleChange}
					/>

					<div className="flex justify-between my-5">
						<div>
							<span
								style={{ cursor: "pointer" }}
								onClick={() => setIsSignIn(true)}
							>
								Don't have an account
							</span>
						</div>

						<div>
							<button
								type="submit"
								className="py-2 px-2 font-medium text-white w-28 text-center bg-green-500 rounded hover:bg-green-400 transition duration-300"
							>
								Log In
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	};

	const signIn = () => {
		return (
			<div className="max-w-6xl mx-auto px-7 flex justify-center">
				<form
					class="relative flex flex-col bg-clip-border bg-white text-gray-700 shadow-md mt-5 login p-3"
					onSubmit={handleSubmit}
				>
					<div
						className="bg-white text-gray text-center"
						style={{ fontSize: "25px" }}
					>
						<h1>Sign In</h1>
					</div>
					<input
						type="email"
						id="email"
						name="email"
						className="form-input"
						placeholder="Email"
						value={data.email}
						onChange={handleChange}
					/>
					<input
						type="text"
						id="username"
						name="username"
						className="form-input"
						placeholder="Username"
						value={data.username}
						onChange={handleChange}
					/>
					<input
						type="text"
						id="firstname"
						name="firstname"
						className="form-input"
						placeholder="First Name"
						value={data.firstname}
						onChange={handleChange}
					/>
					<input
						type="text"
						id="lastname"
						name="lastname"
						className="form-input"
						placeholder="Last Name"
						value={data.lastname}
						onChange={handleChange}
					/>
					<input
						type="password"
						id="password"
						name="password"
						className="form-input"
						placeholder="Password"
						value={data.password}
						onChange={handleChange}
					/>
					<input
						type="password"
						id="cpassword"
						name="cpassword"
						className="form-input"
						placeholder="Confirm Password"
						value={data.cpassword}
						onChange={handleChange}
					/>

					<div className="flex justify-between my-5">
						<div>
							<span
								style={{ cursor: "pointer" }}
								onClick={() => setIsSignIn(!isSignIn)}
							>
								already have an account?
							</span>
						</div>

						<div>
							<button
								type="submit"
								className="py-2 px-2 font-medium text-white w-28 text-center bg-green-500 rounded hover:bg-green-400 transition duration-300"
							>
								Sign Up
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	};

	const alert = () => {
		if (isSuccess) {
			return (
				<>
					<div
						id="alert-3"
						className="flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200"
						role="alert"
					>
						<svg
							aria-hidden="true"
							className="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clip-rule="evenodd"
							></path>
						</svg>
						<span className="sr-only">Info</span>
						<div className="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
							Registration Success!
						</div>
						<button
							type="button"
							className="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300"
							data-dismiss-target="#alert-3"
							aria-label="Close"
						>
							<span className="sr-only">Close</span>
							<svg
								aria-hidden="true"
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>
					</div>
				</>
			);
		}

		if (confirmPass) {
			return (
				<>
					<div
						id="alert-2"
						class="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200"
						role="alert"
					>
						<svg
							aria-hidden="true"
							class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clip-rule="evenodd"
							></path>
						</svg>
						<span class="sr-only">Info</span>
						<div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
							Password And Confirm Password does not match
						</div>
						<button
							type="button"
							class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300"
							data-dismiss-target="#alert-2"
							aria-label="Close"
						>
							<span class="sr-only">Close</span>
							<svg
								class="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>
					</div>
				</>
			);
		}
	};

	const loadingComponent = () => {
		return (
			<>
				<div className="loading">Loading...</div>
			</>
		);
	};

	return (
		<div>
			{loading && loadingComponent()}
			<div className="text-center text-lg mt-5">
				<span>*Note: use dummy email to sign in</span>

				{isSignIn && alert()}
			</div>
			{isSignIn ? signIn() : login()}
		</div>
	);
}
