import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import {
  LogOut,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";

const Navbar = () => {
  const { authUser, logout } =
    useAuthStore();

  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  if (hideNavbar) return null;

  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0

      z-50

      bg-base-100/70

      backdrop-blur-xl

      border-b
      border-base-300

      shadow-lg
    "
    >
      <div
        className="
        max-w-[1600px]

        mx-auto

        px-6

        h-20

        flex

        items-center

        justify-between
      "
      >
        {/* LOGO */}

        <Link
          to="/"
          className="
          flex
          items-center
          gap-4
        "
        >
          <div
            className="
            size-12

            rounded-3xl

            bg-gradient-to-r

            from-primary
            to-secondary

            flex

            items-center

            justify-center

            shadow-lg
          "
          >
            <MessageSquare
              className="
              text-white
              "
            />
          </div>

          <div>

            <h1
              className="
              text-2xl

              font-bold
            "
            >
              HelloChat
            </h1>

            <p
              className="
              text-xs

              opacity-60
            "
            >
              Real-time messaging
            </p>

          </div>

        </Link>

        {/* ACTIONS */}

        <div
          className="
          flex
          items-center
          gap-3
        "
        >
          <Link
            to="/settings"
            className="
            btn
            btn-sm

            rounded-2xl

            bg-base-200

            hover:bg-primary
            hover:text-white
          "
          >
            <Settings size={18} />
            <span className="hidden sm:block">
              Settings
            </span>
          </Link>

          {authUser && (
            <>
              <Link
                to="/profile"
                className="
                btn
                btn-sm

                rounded-2xl

                bg-base-200

                hover:bg-primary
                hover:text-white
              "
              >
                <User size={18} />

                <span className="hidden sm:block">
                  Profile
                </span>
              </Link>

              <button
                onClick={logout}
                className="
                btn
                btn-sm

                rounded-2xl

                btn-error

                text-white
              "
              >
                <LogOut size={18} />

                <span className="hidden sm:block">
                  Logout
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;