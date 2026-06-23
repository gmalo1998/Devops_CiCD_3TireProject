import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

import App from "./App";

vi.mock("./store/useAuthStore", () => ({
  useAuthStore: () => ({
    authUser: null,
    onlineUsers: [],
    checkAuth: vi.fn(),
  }),
}));

test("app renders without crashing", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});