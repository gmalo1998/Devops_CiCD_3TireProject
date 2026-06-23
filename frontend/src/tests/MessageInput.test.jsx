import { render, screen } from "@testing-library/react";
import MessageInput from "../components/MessageInput";

test("message input renders", () => {
  render(<MessageInput />);

  expect(
    screen.getByRole("textbox")
  ).toBeInTheDocument();
});