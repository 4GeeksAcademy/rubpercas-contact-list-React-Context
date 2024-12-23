import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Add } from "./views/add";
import { User } from "./views/user";
import injectContext from "./store/appContext";
import { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	const { store, actions } = useContext(Context);
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route
							path="/"
							element={
								store.isLoggedIn ? <Home /> : <Navigate to="/user" replace />
							}
						/>
						<Route
							path="/add"
							element={
								store.isLoggedIn ? <Add /> : <Navigate to="/user" replace />
							}
						/>
						<Route
							path="/editContact/:id"
							element={
								store.isLoggedIn ? <Add /> : <Navigate to="/user" replace />
							}
						/>
						<Route
							path="/user"
							element={<User />}
						/>
						<Route
							path="*"
							element={<h1>Not found!</h1>}
						/>
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
