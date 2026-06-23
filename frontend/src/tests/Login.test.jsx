import { render } from "@testing-library/react";
import LoginPage from "../pages/LoginPage";
import TestWrapper from "./TestWrapper";

test("renders login page", () => {
  render(
    <TestWrapper>
      <LoginPage />
    </TestWrapper>
  );
});