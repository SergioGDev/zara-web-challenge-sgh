import { HeroFinderContextProvider } from "@/contexts/HeroFinderContext/HeroFinderContextProvider";
import { fireEvent, render, screen } from "@testing-library/react";
import FinderInput from "./FinderInput";

describe("<FinderInput /> test", () => {
  const setup = () => {
    const utils = render(
      <HeroFinderContextProvider>
        <FinderInput />
      </HeroFinderContextProvider>,
    );
    const input = screen.getByTestId("finder-input") as HTMLInputElement;
    const inputContainer = screen.getByTestId("input-container");
    // const contextProvider = screen.getByTestId("hero-finder-context-provider");

    return { inputContainer, input, ...utils };
  };

  test("Input is in the screen", () => {
    const { input, inputContainer } = setup();

    expect(inputContainer).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("Input value changes correctly", () => {
    const { input } = setup();

    fireEvent.change(input, { target: { value: "Spider-man" } });

    expect(input.value).toBe("Spider-man");
  });

});
