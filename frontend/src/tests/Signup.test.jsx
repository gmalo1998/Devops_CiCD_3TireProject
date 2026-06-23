import { render } from "@testing-library/react";
import SignUpPage from "../pages/SignUpPage";
import TestWrapper from "./TestWrapper";

test("renders signup page", () => {
  render(
    <TestWrapper>
      <SignUpPage />
    </TestWrapper>
  );
});