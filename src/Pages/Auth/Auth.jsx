import React, { useState } from "react";

export default function Auth() {
	const [isSignIn, setIsSignIn] = useState(false);

	const signUpHandleChange = (e) => {
	}

	const login = () => {
		return (
			<div className="max-w-6xl mx-auto px-7 flex justify-center">
				<div class="relative flex flex-col bg-clip-border bg-white text-gray-700 shadow-md mt-5 login p-3">
					<div
						className="bg-white text-gray text-center"
						style={{ fontSize: "25px" }}
					>
						<h1>Login</h1>
					</div>
					<input
						type="email"
						className="form-input"
						placeholder="Email"
					/>
					<input
						type="password"
						className="form-input"
						placeholder="Password"
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
							<a
								href=""
								className="py-2 px-2 font-medium text-white w-28 text-center bg-green-500 rounded hover:bg-green-400 transition duration-300"
							>
								Log In
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const signIn = () => {
		return (
			<div className="max-w-6xl mx-auto px-7 flex justify-center">
				<div class="relative flex flex-col bg-clip-border bg-white text-gray-700 shadow-md mt-5 login p-3">
					<div
						className="bg-white text-gray text-center"
						style={{ fontSize: "25px" }}
					>
						<h1>Sign In</h1>
					</div>
					<input
						type="email"
						className="form-input"
						placeholder="Email"
					/>
					<input
						type="text"
						className="form-input"
						placeholder="Username"
					/>
					<input
						type="password"
						className="form-input"
						placeholder="Password"
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
							<a
								href=""
								className="py-2 px-2 font-medium text-white w-28 text-center bg-green-500 rounded hover:bg-green-400 transition duration-300"
							>
								Sign Up
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div>
			<div className="text-center text-lg mt-5">
				<span>*Note: use dummy email to sign in</span>
			</div>
			{isSignIn ? signIn() : login()}
		</div>
	);
}
