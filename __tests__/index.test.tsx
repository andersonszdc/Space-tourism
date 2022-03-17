import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";

describe("Home", () => {
  beforeEach(() => {
    // ResizeObserver isn't available in test environment
    const mockResizeObserver = jest.fn();
    mockResizeObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.ResizeObserver = mockResizeObserver;
  });

  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /space/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
