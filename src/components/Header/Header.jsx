import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 w-full shadow bg-[#222831] fixed">
      <Container>
        <nav className="flex flex-col md:flex-row items-center">
          <div className="mr-4">
            <Link to="/">
              <Logo>
                <p className=" text-gray-200 text-2xl font-bold">
                  Paul<span className=" text-blue-600">DEV</span>
                </p>
              </Logo>
            </Link>
          </div>
          <ul className="flex md:ml-auto items-center justify-around gap-x-3">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className=" text-navitem text-lg">
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-2 md:px-6 py-2 duration-200 hover:bg-[#393E46] rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
