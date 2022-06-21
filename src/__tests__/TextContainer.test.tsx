import { render, screen } from "@testing-library/react";
import TextContainer from "../components/TextContainer/TextContainer";

const props = {
  users: [
    { id: "11", name: "Ben", room: "1" },
    { id: "22", name: "Bill", room: "1" },
  ],
};

describe("Messages Component", () => {
  beforeEach(() => {
    render(<TextContainer {...props} />);
  });
  it("renders People currently chatting text", () => {
    expect(screen.getByText(/People online/i)).toBeInTheDocument();
  });
  it("renders user name texts", () => {
    expect(screen.getByText(/Ben/)).toBeInTheDocument();
    expect(screen.getByText(/Bill/)).toBeInTheDocument();
  });
  it("renders active icons", () => {
    const icons = screen.getAllByAltText("online");
    expect(icons).toHaveLength(props.users.length);
  });
});
