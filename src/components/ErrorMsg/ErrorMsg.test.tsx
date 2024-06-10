import { render, screen } from "@testing-library/react"
import ErrorMsg from "./ErrorMsg"

describe('<ErrorMsg /> test', () => {
  test('ErrorMsg render the message correctly', () => {
    const errorMsg = "This is a error test message";
    render(<ErrorMsg errorMsg={errorMsg} />)

    const errorComponent = screen.getByTestId('error-message-container');
    expect(errorComponent).toBeInTheDocument();
    expect(errorComponent).toHaveTextContent(errorMsg)
  })
})