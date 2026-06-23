import { MemoryRouter } from "react-router-dom";

export default function TestWrapper({
  children,
}) {
  return (
    <MemoryRouter>
      {children}
    </MemoryRouter>
  );
}