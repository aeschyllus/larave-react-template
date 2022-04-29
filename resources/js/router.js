import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { store } from "./redux/store";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import CustomContainer from "./components/CustomContainer";
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from "./pages/PageNotFound";

const Router = () => {
  const routes = [
    { path: "/", element: <Students /> },
    { path: "/students/create", element: <AddStudent /> },
    { path: "/students/:id/edit", element: <EditStudent /> },
    { path: "*", element: <PageNotFound /> },
  ];

  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <CustomContainer>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes>
            {routes.map((route) => (
              <Route
                exact
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </CustomContainer>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;

// DOM element
if (document.getElementById("root")) {
  render(<Router />, document.getElementById("root"));
}
