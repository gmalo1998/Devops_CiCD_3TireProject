import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";

import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
} from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const { login, isLoggingIn } =
    useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div
      className="
      min-h-screen

      bg-gradient-to-br
      from-indigo-950
      via-base-100
      to-purple-950

      grid
      lg:grid-cols-2
    "
    >
      {/* LEFT */}

      <div className="flex items-center justify-center px-6">

        <div
          className="
          w-full
          max-w-md

          rounded-[32px]

          bg-white/5

          backdrop-blur-2xl

          border
          border-white/10

          shadow-[0_20px_80px_rgba(0,0,0,.45)]

          p-10
        "
        >
          {/* HEADER */}

          <div className="text-center mb-10">

            <div
              className="
              mx-auto

              size-20

              rounded-3xl

              bg-gradient-to-br
              from-primary
              to-secondary

              flex
              items-center
              justify-center

              shadow-lg
              shadow-primary/40
            "
            >
              <MessageSquare className="size-9 text-white" />
            </div>

            <h1 className="text-4xl font-black mt-6">
              Welcome Back
            </h1>

            <p className="opacity-60 mt-2">
              Sign in and continue chatting
            </p>

          </div>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* EMAIL */}

            <Input
              icon={<Mail size={18} />}
              placeholder="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email:
                    e.target.value,
                })
              }
            />

            {/* PASSWORD */}

            <div className="relative">

              <Input
                icon={<Lock size={18} />}
                placeholder="Password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={
                  formData.password
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password:
                      e.target.value,
                  })
                }
              />

              <button
                type="button"
                className="
                  absolute
                  right-5
                  top-4

                  opacity-50
                  hover:opacity-100
                "
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                {showPassword
                  ? <EyeOff />
                  : <Eye />}
              </button>

            </div>

            {/* REMEMBER */}

            <div className="flex justify-between text-sm">

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                />

                <span className="opacity-60">
                  Remember me
                </span>

              </label>

              <button
                type="button"
                className="
                text-primary
                hover:underline
              "
              >
                Forgot Password?
              </button>

            </div>

            {/* BUTTON */}

            <button
              disabled={
                isLoggingIn
              }
              className="
                btn

                w-full

                h-14

                rounded-2xl

                bg-gradient-to-r
                from-primary
                to-secondary

                border-0

                text-white

                text-lg
                font-bold

                hover:scale-[1.02]

                transition
              "
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="animate-spin" />
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>

          </form>

          {/* FOOTER */}

          <div className="mt-8 text-center">

            <span className="opacity-50">
              New here?
            </span>

            <Link
              to="/signup"
              className="
                ml-2

                text-primary

                font-bold

                hover:underline
              "
            >
              Create Account
            </Link>

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <AuthImagePattern
        title="Continue Your Journey"
        subtitle="Reconnect with friends and continue your conversations instantly."
      />

    </div>
  );
};

const Input = ({
  icon,
  ...props
}) => (
  <div className="relative">

    <div
      className="
      absolute

      left-5

      top-1/2
      -translate-y-1/2

      opacity-50
    "
    >
      {icon}
    </div>

    <input
      {...props}
      className="
        input

        h-14

        w-full

        rounded-2xl

        pl-14

        bg-base-200/80

        border-white/10

        focus:border-primary

        transition
      "
    />

  </div>
);

export default LoginPage;