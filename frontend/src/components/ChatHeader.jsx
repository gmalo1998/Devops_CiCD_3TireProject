import { X, Phone, Video } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const {
    selectedUser,
    setSelectedUser,
  } = useChatStore();

  const {
    onlineUsers = [],
  } = useAuthStore();

  const isOnline =
    onlineUsers?.includes(
      selectedUser?._id
    );

  if (!selectedUser) {
    return (
      <div
        className="
        h-20

        flex
        items-center
        justify-center

        border-b
        border-base-300

        bg-base-100/80

        backdrop-blur-xl
      "
      >
        <p className="opacity-60">
          Select a conversation
        </p>
      </div>
    );
  }

  return (
    <div
      className="
      sticky
      top-0

      z-20

      border-b
      border-base-300

      bg-base-100/80

      backdrop-blur-xl
    "
    >
      {/* Glow */}

      <div
        className="
        absolute
        top-0

        left-0

        h-[2px]

        w-full

        bg-gradient-to-r
        from-primary
        via-secondary
        to-primary
      "
      />

      <div
        className="
        px-6
        py-4

        flex
        items-center
        justify-between
      "
      >
        {/* LEFT */}

        <div className="flex items-center gap-4">

          {/* Avatar */}

          <div className="relative">

            <img
              src={
                selectedUser?.profilePic ||
                "/avatar.png"
              }
              alt={
                selectedUser?.fullName
              }
              className="
                size-14

                rounded-2xl

                object-cover

                border
                border-base-300

                shadow-lg
              "
            />

            <div
              className={`
              absolute
              bottom-0
              right-0

              size-4

              rounded-full

              border-2
              border-base-100

              ${
                isOnline
                  ? "bg-green-500"
                  : "bg-gray-500"
              }
            `}
            />

          </div>

          {/* INFO */}

          <div>

            <h2
              className="
              font-bold
              text-lg
            "
            >
              {selectedUser?.fullName}
            </h2>

            <p
              className="
              text-sm

              opacity-60
            "
            >
              {isOnline
                ? "Active now"
                : "Last seen recently"}
            </p>

          </div>

        </div>

        {/* ACTIONS */}

        <div className="flex items-center gap-2">

          <button
            className="
            btn
            btn-ghost

            btn-circle
          "
          >
            <Phone size={18} />
          </button>

          <button
            className="
            btn
            btn-ghost

            btn-circle
          "
          >
            <Video size={18} />
          </button>

          <button
            onClick={() =>
              setSelectedUser(null)
            }
            className="
            btn

            btn-circle

            btn-ghost

            hover:bg-error/20
            hover:text-error
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