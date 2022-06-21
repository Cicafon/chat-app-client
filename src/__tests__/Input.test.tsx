import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Input from "../components/Input/Input";

const setMessage = jest.fn();
const sendMessage = jest.fn(e => e.preventDefault());
const props = {
  message: "test",
  setMessage: setMessage,
  sendMessage: sendMessage,
};

describe("Input Component", () => {
  beforeEach(() => {
    render(<Input {...props} />);
  });
  it("renders input field with default value", () => {
    expect(getInput()).toBeInTheDocument();
    expect(getInput().value).toBe("test");
  });
  it("setMessage is called by typing into the input", () => {
    user.type(getInput(), "a");
    expect(setMessage).toBeCalledWith("testa");
    expect(setMessage).toBeCalledTimes(1);
  });
  it("sendMessage is called by clicking on the Send button", () => {
    const button = screen.getByRole("button", { name: /send/i });
    user.click(button);
    expect(sendMessage).toBeCalledTimes(1);
  });
});

function getInput() {
  return screen.getByRole("textbox") as HTMLInputElement;
}
