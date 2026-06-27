import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } =
    useChatStore();

  return (
    <div
      className="
      h-screen

      bg-gradient-to-br

      from-base-300
      via-base-200
      to-base-300

      overflow-hidden
    "
    >
      {/* PAGE CONTAINER */}

      <div
        className="
        pt-24

        px-5
        pb-5

        h-full
      "
      >
        {/* GLASS WRAPPER */}

        <div
          className="
          w-full

          h-[calc(100vh-7rem)]

          rounded-[36px]

          overflow-hidden

          border
          border-base-300

          shadow-2xl

          bg-base-100/50

          backdrop-blur-xl
        "
        >
          <div
            className="
            flex

            h-full
          "
          >
            {/* SIDEBAR */}

            <Sidebar />

            {/* CONTENT */}

            <div
              className="
              flex-1

              min-w-0

              flex

              flex-col
            "
            >
              {!selectedUser ? (
                <NoChatSelected />
              ) : (
                <ChatContainer />
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;