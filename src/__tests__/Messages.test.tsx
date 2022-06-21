import { render, screen } from "@testing-library/react";
import Messages from "../components/Messages/Messages";

const props = {
  messages: [
    { user: "my name", text: "Hello" },
    { user: "other name", text: "Hi back" },
  ],
  name: "My Name",
};

describe("Messages Component", () => {
  beforeEach(() => {
    render(<Messages {...props} />);
  });
  it("renders users and texts from messages props", () => {
    expect(screen.getByText(/my name/i)).toBeInTheDocument();
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText(/other name/i)).toBeInTheDocument();
    expect(screen.getByText("Hi back")).toBeInTheDocument();
  });
});
