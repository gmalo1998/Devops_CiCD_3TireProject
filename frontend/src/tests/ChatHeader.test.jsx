import { render } from "@testing-library/react";
import { vi } from "vitest";
import ChatHeader from "../components/ChatHeader";

vi.mock("../store/useChatStore", () => ({
  useChatStore: () => ({
    selectedUser: {
      _id: "1",
      fullName: "Ganesh",
      profilePic: "/avatar.png",
    },

    setSelectedUser: vi.fn(),
  }),
}));

vi.mock("../store/useAuthStore", () => ({
  useAuthStore: () => ({
    onlineUsers: ["1"],
  }),
}));

test("chat header renders", () => {
  render(<ChatHeader />);
});