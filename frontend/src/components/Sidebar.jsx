import { useEffect, useMemo, useState } from "react";
import { Users } from "lucide-react";

import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";

import SidebarSkeleton from "./skeletons/SidebarSkeleton";

const Sidebar = () => {
  const {
    users,
    selectedUser,
    setSelectedUser,
    getUsers,
    isUsersLoading,
  } = useChatStore();

  const {
    onlineUsers = [],
  } = useAuthStore();

  const [showOnlineOnly, setShowOnlineOnly] =
    useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers =
    useMemo(() => {
      return showOnlineOnly
        ? users.filter((u) =>
            onlineUsers.includes(u._id)
          )
        : users;
    }, [
      users,
      onlineUsers,
      showOnlineOnly,
    ]);

  if (isUsersLoading) {
    return <SidebarSkeleton />;
  }

  return (
    <aside
      className="
      h-full

      w-24
      lg:w-[340px]

      bg-base-100/60

      backdrop-blur-xl

      border-r
      border-base-300

      flex
      flex-col
    "
    >
      {/* HEADER */}

      <div
        className="
        p-6

        border-b
        border-base-300
      "
      >
        <div
          className="
          flex
          items-center
          gap-3
        "
        >
          <div
            className="
            size-12

            rounded-3xl

            bg-primary/10

            flex

            items-center

            justify-center
          "
          >
            <Users
              className="
              text-primary
              "
            />
          </div>

          <div className="hidden lg:block">
            <h2
              className="
              text-lg
              font-bold
            "
            >
              Contacts
            </h2>

            <p
              className="
              text-sm
              opacity-60
            "
            >
              Your conversations
            </p>
          </div>
        </div>

        {/* FILTER */}

        <div
          className="
          hidden
          lg:flex

          items-center

          justify-between

          mt-6
        "
        >
          <label
            className="
            flex
            items-center
            gap-3
            cursor-pointer
          "
          >
            <input
              type="checkbox"
              checked={
                showOnlineOnly
              }
              onChange={(e) =>
                setShowOnlineOnly(
                  e.target.checked
                )
              }
              className="
              checkbox
              checkbox-primary
              checkbox-sm
            "
            />

            <span>
              Online only
            </span>
          </label>

          <span
            className="
            text-xs

            opacity-60
          "
          >
            {
              onlineUsers.length
            } online
          </span>
        </div>
      </div>

      {/* USERS */}

      <div
        className="
        flex-1

        overflow-y-auto

        px-3
        py-4

        space-y-2
      "
      >
        {filteredUsers.map(
          (user) => {
            const isSelected =
              selectedUser?._id ===
              user._id;

            const isOnline =
              onlineUsers.includes(
                user._id
              );

            return (
              <button
                key={user._id}
                onClick={() =>
                  setSelectedUser(
                    user
                  )
                }
                className={`
                w-full

                p-3

                rounded-3xl

                flex

                items-center

                gap-4

                transition-all

                hover:bg-base-200

                ${
                  isSelected
                    ? `
                      bg-primary/10
                      border
                      border-primary/30
                    `
                    : ""
                }
              `}
              >
                {/* AVATAR */}

                <div
                  className="
                  relative

                  mx-auto
                  lg:mx-0
                "
                >
                  <img
                    src={
                      user.profilePic ||
                      "/avatar.png"
                    }
                    alt={
                      user.fullName
                    }
                    className="
                    size-14

                    rounded-3xl

                    object-cover

                    shadow-md
                  "
                  />

                  <span
                    className={`
                    absolute

                    bottom-1
                    right-1

                    size-3

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

                <div
                  className="
                  hidden
                  lg:block

                  text-left

                  min-w-0
                "
                >
                  <div
                    className="
                    font-semibold

                    truncate
                  "
                  >
                    {
                      user.fullName
                    }
                  </div>

                  <div
                    className="
                    text-sm

                    opacity-60
                  "
                  >
                    {isOnline
                      ? "Online"
                      : "Offline"}
                  </div>
                </div>
              </button>
            );
          }
        )}

        {!filteredUsers.length && (
          <div
            className="
            text-center

            mt-10

            opacity-60
          "
          >
            No users found
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;