import { useEffect, useRef } from "react";

import { MessageSquare } from "lucide-react";

import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";

import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages = [],
    selectedUser,

    getMessages,

    subscribeToMessages,
    unsubscribeFromMessages,

    isMessagesLoading,
  } = useChatStore();

  const { authUser } =
    useAuthStore();

  const messageEndRef =
    useRef(null);

  useEffect(() => {
    if (!selectedUser?._id)
      return;

    getMessages(
      selectedUser._id
    );

    subscribeToMessages();

    return () =>
      unsubscribeFromMessages();
  }, [
    selectedUser?._id,

    getMessages,

    subscribeToMessages,

    unsubscribeFromMessages,
  ]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  /* EMPTY */

  if (!selectedUser) {
    return (
      <div
        className="
        flex-1

        flex

        items-center

        justify-center

        bg-gradient-to-b

        from-base-100
        to-base-200
      "
      >
        <div
          className="
          text-center
        "
        >
          <div
            className="
            size-28

            rounded-[32px]

            bg-gradient-to-r

            from-primary
            to-secondary

            mx-auto

            flex

            items-center

            justify-center

            shadow-2xl
          "
          >
            <MessageSquare
              size={50}
              className="text-white"
            />
          </div>

          <h2
            className="
            mt-8

            text-4xl

            font-bold
          "
          >
            Welcome 👋
          </h2>

          <p
            className="
            mt-3

            opacity-60
          "
          >
            Select a conversation
          </p>
        </div>
      </div>
    );
  }

  /* LOADING */

  if (isMessagesLoading) {
    return (
      <div
        className="
        flex-1

        flex

        flex-col
      "
      >
        <ChatHeader />

        <MessageSkeleton />

        <MessageInput />
      </div>
    );
  }

  return (
    <div
      className="
      flex-1

      flex

      flex-col

      bg-gradient-to-b

      from-base-100
      to-base-200
    "
    >
      <ChatHeader />

      {/* MESSAGE AREA */}

      <div
        className="
        flex-1

        overflow-y-auto

        px-8
        py-8

        space-y-6
      "
      >
        {messages.map(
          (message) => {
            const isMine =
              message.senderId ===
              authUser?._id;

            return (
              <div
                key={
                  message._id
                }
                className={`chat ${
                  isMine
                    ? "chat-end"
                    : "chat-start"
                }`}
              >
                {/* AVATAR */}

                <div className="chat-image">

                  <img
                    src={
                      isMine
                        ? authUser
                            ?.profilePic ||
                          "/avatar.png"
                        : selectedUser?.profilePic ||
                          "/avatar.png"
                    }
                    alt="avatar"
                    className="
                    size-10

                    rounded-full

                    object-cover
                  "
                  />

                </div>

                {/* TIME */}

                <div
                  className="
                  chat-header

                  mb-2
                "
                >
                  <time
                    className="
                    text-xs

                    opacity-50
                  "
                  >
                    {formatMessageTime(
                      message.createdAt
                    )}
                  </time>
                </div>

                {/* BUBBLE */}

                <div
                  className="
                  chat-bubble

                  rounded-3xl

                  px-5
                  py-3

                  shadow-lg

                  max-w-[70%]

                  flex

                  flex-col
                "
                >
                  {message.image && (
                    <img
                      src={
                        message.image
                      }
                      alt="sent"

                      className="
                      max-w-[280px]

                      rounded-2xl

                      mb-3
                    "
                    />
                  )}

                  {message.text && (
                    <p
                      className="
                      leading-7
                    "
                    >
                      {
                        message.text
                      }
                    </p>
                  )}
                </div>
              </div>
            );
          }
        )}

        <div
          ref={
            messageEndRef
          }
        />
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;