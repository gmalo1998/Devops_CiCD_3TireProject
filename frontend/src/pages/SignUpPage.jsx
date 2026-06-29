import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";

import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim())
      return toast.error("Full name is required");

    if (!formData.email.trim())
      return toast.error("Email is required");

    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email");

    if (!formData.password)
      return toast.error("Password required");

    if (formData.password.length < 6)
      return toast.error(
        "Password must be at least 6 characters"
      );

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      signup(formData);
    }
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

      <div className="flex items-center justify-center p-8">

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
          {/* Logo */}

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
              <MessageSquare className="size-9 text-primary-content" />
            </div>

            <h1 className="text-4xl font-black mt-6">
              Create Account
            </h1>

            <p className="mt-2 text-base-content/60">
              Start chatting with your friends
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* NAME */}

            <InputField
              icon={<User size={18} />}
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fullName: e.target.value,
                })
              }
            />

            {/* EMAIL */}

            <InputField
              type="email"
              icon={<Mail size={18} />}
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />

            {/* PASSWORD */}

            <div className="relative">

              <InputField
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                icon={<Lock size={18} />}
                placeholder="Password"
                value={formData.password}
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
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="
                  absolute
                  right-5
                  top-4
                  text-base-content/40
                "
              >
                {showPassword
                  ? <EyeOff />
                  : <Eye />}
              </button>

            </div>

            {/* BUTTON */}

            <button
              disabled={isSigningUp}
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
              {isSigningUp ? (
                <>
                  <Loader2 className="animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Account"
              )}
            </button>

          </form>

          <div className="text-center mt-8">

            <p className="text-base-content/60">

              Already have an account?

              <Link
                to="/login"
                className="
                  ml-2
                  text-primary
                  font-bold
                  hover:underline
                "
              >
                Sign In
              </Link>

            </p>

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <AuthImagePattern
        title="Welcome to HelloChat"
        subtitle="Lets connect world with your friends and family !!"
      />

    </div>
  );
};

const InputField = ({
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
        text-base-content/40
      "
    >
      {icon}
    </div>

    <input
      {...props}
      className="
        input
        w-full

        h-14

        pl-14
        pr-12

        rounded-2xl

        bg-base-200

        focus:border-primary
        focus:outline-none
      "
    />

  </div>
);

export default SignUpPage;