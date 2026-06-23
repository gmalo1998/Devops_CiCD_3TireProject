import { render } from "@testing-library/react";
import { vi } from "vitest";
import ChatContainer from "../components/ChatContainer";

vi.mock("../store/useChatStore", () => ({
  useChatStore: () => ({
    messages: [],
    isMessagesLoading: false,

    selectedUser: {
      _id: "1",
      profilePic: "/avatar.png",
    },

    getMessages: vi.fn(),

    subscribeToMessages: vi.fn(),

    unsubscribeFromMessages: vi.fn(),
  }),
}));

vi.mock("../store/useAuthStore", () => ({
  useAuthStore: () => ({
    authUser: {
      _id: "123",
      profilePic: "/avatar.png",
    },
  }),
}));

test("chat container renders", () => {
  render(<ChatContainer />);
});