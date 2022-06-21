import { render, screen } from "@testing-library/react";
import InfoBar from "../components/InfoBar/InfoBar";

describe("InfoBar Component", () => {
  beforeEach(() => {
    render(<InfoBar roomName="room 1" />);
  });
  it("renders InfoBar heading", () => {
    const roomNameHeading = screen.getByRole("heading", { name: "room 1" });
    expect(roomNameHeading).toBeInTheDocument();
  });
  it("renders icons", () => {
    const onlineIcon = screen.getByAltText("online");
    const closeIcon = screen.getByAltText("close");
    expect(onlineIcon).toBeInTheDocument();
    expect(closeIcon).toBeInTheDocument();
  });
  it("close the chat bz clicking on close icon ", () => {
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});
