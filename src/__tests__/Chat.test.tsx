import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Chat from "../components/Chat/Chat";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

global.setImmediate =
  global.setImmediate ||
  ((fn: any, ...args: any) => global.setTimeout(fn, 0, ...args)); // to get rid of the jest error

const history = createMemoryHistory();
history.push("/chat?name=test&room=room1");

jest.mock("../components/Messages/Messages", () => () => {
  return <div>mocked messages component</div>;
});

describe("Chat Component", () => {
  beforeEach(() => {
    render(
      <Router location={history.location} navigator={history}>
        <Chat />
      </Router>
    );
  });

  it("renders Send button", () => {
    expect(getButton()).toBeInTheDocument();
  });
  it("renders Input field", () => {
    expect(getInputField()).toBeInTheDocument();
  });
  it("renders close Icon", () => {
    expect(screen.getByAltText("close")).toBeInTheDocument();
  });
  it("renders Room name heading", () => {
    expect(screen.getByRole("heading", { name: "room1" })).toBeInTheDocument();
  });
  it("renders People currently chatting text", () => {
    expect(screen.getByText(/People online/i)).toBeInTheDocument();
  });
  it("change the input field value by typing", () => {
    const field = getInputField();
    user.type(field, "hello");
    expect(field.value).toBe("hello");
  });
  it("renders Messages component ", () => {
    expect(screen.getByText(/mocked messages component/i)).toBeInTheDocument();
  });
});

function getButton() {
  return screen.getByRole("button");
}

function getInputField() {
  return screen.getByRole("textbox") as HTMLInputElement;
}
