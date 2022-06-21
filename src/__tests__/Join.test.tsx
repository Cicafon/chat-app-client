import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Join from "../components/Join/Join";
import { BrowserRouter as Router } from "react-router-dom";

describe("Join Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <Join />
      </Router>
    );
  });
  it("renders Join header", () => {
    expect(getHeading()).toBeInTheDocument();
  });
  it("renders Join button", () => {
    expect(getButton()).toBeInTheDocument();
  });
  it("renders Name field", () => {
    expect(getName()).toBeInTheDocument();
  });
  it("renders Room field", () => {
    expect(getRoom()).toBeInTheDocument();
  });
  it("Change the value of Name field", () => {
    user.type(getName(), "My Name");
    expect(getName().value).toBe("My Name");
  });
  it("Change the value of Room field", () => {
    user.type(getRoom(), "My Room");
    expect(getRoom().value).toBe("My Room");
  });
  it("Test the router link's href after filling Name and Room fields", async () => {
    user.type(getName(), "My Name");
    user.type(getRoom(), "My Room");
    expect(getButton()).not.toHaveAttribute("disabled");
    expect(getLink()).toHaveAttribute(
      "href",
      "/chat?name=My Name&room=My Room"
    );
  });
  it("Button is disabled if Name or Room are empty", () => {
    expect(getButton()).toHaveAttribute("disabled");
  });
});

function getHeading() {
  return screen.getByRole("heading", { name: "Join" });
}

function getButton() {
  return screen.getByRole("button", { name: "Join to chat" });
}

function getName() {
  return screen.getByPlaceholderText("Name") as HTMLInputElement;
}

function getRoom() {
  return screen.getByPlaceholderText("Room") as HTMLInputElement;
}

function getLink() {
  return screen.getByRole("link");
}
