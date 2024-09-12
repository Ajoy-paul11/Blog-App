import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className=" h-screen w-full flex flex-wrap bg-[#222831]">
      <div className="w-full ">
        <Header />
        <main className=" bg-[#393E46] min-h-48 pt-20">
          <Outlet />
        </main>
        <div className="w-full block">
          <Footer />
        </div>
      </div>
    </div>
  ) : null;
}

export default App;
