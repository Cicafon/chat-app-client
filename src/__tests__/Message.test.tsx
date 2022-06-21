import { render, screen } from "@testing-library/react";
import Message from "../components/Messages/Message/Message";

const props = {
  name: "My name  ",
  message: { user: "my name", text: "Hello" },
};
const props2 = {
  name: "My name  ",
  message: { user: "other name", text: "Hello" },
};
describe("Messages Component", () => {
  it("renders user and text based on props when teh sender is the user", () => {
    render(<Message {...props} />);
    const trimmedName = props.name.trim().toLowerCase();
    expect(screen.getByText(trimmedName)).toBeInTheDocument();
    expect(screen.getByText(props.message.text)).toBeInTheDocument();
  });
  it("renders user and text based on props when the sender is not the user", () => {
    render(<Message {...props2} />);
    const trimmedName = props2.name.trim().toLowerCase();
    expect(screen.queryByText(trimmedName)).not.toBeInTheDocument();
    expect(screen.getByText(props2.message.user)).toBeInTheDocument();
    expect(screen.getByText(props2.message.text)).toBeInTheDocument();
  });
});
