import {
  X,
  Phone,
  Video,
} from "lucide-react";

import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";

const ChatHeader = () => {
  const {
    selectedUser,
    setSelectedUser,
  } = useChatStore();

  const {
    onlineUsers = [],
  } = useAuthStore();

  const isOnline =
    onlineUsers.includes(
      selectedUser?._id
    );

  if (!selectedUser) {
    return null;
  }

  return (
    <div
      className="
      sticky
      top-0

      z-30

      bg-base-100/70

      backdrop-blur-xl

      border-b
      border-base-300

      shadow-md
    "
    >
      {/* TOP GRADIENT */}

      <div
        className="
        h-[3px]

        w-full

        bg-gradient-to-r

        from-primary
        via-secondary
        to-primary
      "
      />

      <div
        className="
        px-8
        py-5

        flex

        items-center

        justify-between
      "
      >
        {/* LEFT */}

        <div
          className="
          flex

          items-center

          gap-5
        "
        >
          {/* AVATAR */}

          <div
            className="
            relative
          "
          >
            <img
              src={
                selectedUser
                  ?.profilePic ||
                "/avatar.png"
              }
              alt={
                selectedUser
                  ?.fullName
              }
              className="
              size-16

              rounded-3xl

              object-cover

              shadow-xl

              border
              border-base-300
            "
            />

            <span
              className={`
              absolute

              bottom-1
              right-1

              size-4

              rounded-full

              ring-4
              ring-base-100

              ${
                isOnline
                  ? "bg-green-500"
                  : "bg-zinc-500"
              }
            `}
            />
          </div>

          {/* INFO */}

          <div>

            <h2
              className="
              text-xl

              font-bold
            "
            >
              {
                selectedUser
                  ?.fullName
              }
            </h2>

            <p
              className="
              text-sm

              opacity-60
            "
            >
              {isOnline
                ? "Active now"
                : "Offline"}
            </p>

          </div>
        </div>

        {/* ACTIONS */}

        <div
          className="
          flex

          items-center

          gap-3
        "
        >
          <button
            className="
            btn

            btn-circle

            bg-base-200

            hover:scale-105

            hover:bg-primary

            hover:text-white

            transition
          "
          >
            <Phone size={18} />
          </button>

          <button
            className="
            btn

            btn-circle

            bg-base-200

            hover:scale-105

            hover:bg-secondary

            hover:text-white

            transition
          "
          >
            <Video size={18} />
          </button>

          <button
            onClick={() =>
              setSelectedUser(
                null
              )
            }
            className="
            btn

            btn-circle

            bg-base-200

            hover:bg-error

            hover:text-white

            transition
          "
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;