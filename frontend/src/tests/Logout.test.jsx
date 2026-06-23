import { render } from "@testing-library/react";
import { vi } from "vitest";

import Navbar from "../components/Navbar";
import TestWrapper from "./TestWrapper";

vi.mock("../store/useAuthStore", () => ({
  useAuthStore: () => ({
    authUser: {
      fullName: "Ganesh",
      profilePic: "/avatar.png",
    },

    logout: vi.fn(),
  }),
}));

test("logout renders", () => {
  render(
    <TestWrapper>
      <Navbar />
    </TestWrapper>
  );
});