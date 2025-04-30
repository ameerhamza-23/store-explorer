import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Pagination from "components/Pagination";
import '@testing-library/jest-dom/vitest';

describe("Pagination", () => {
  it("should not render if totalPages is 1 or less", () => {
    const { container } = render(<Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should render the correct number of pages", () => {
    render(<Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("should call onPageChange when a page button is clicked", () => {
    const onPageChangeMock = vi.fn();
    render(<Pagination currentPage={1} totalPages={3} onPageChange={onPageChangeMock} />);

    const page2Button = screen.getByText("2");
    fireEvent.click(page2Button);

    expect(onPageChangeMock).toHaveBeenCalledTimes(1);
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  it("should highlight the current page button", () => {
    render(<Pagination currentPage={2} totalPages={3} onPageChange={() => {}} />);
    const page2Button = screen.getByText("2");

    expect(page2Button).toHaveStyle({
      backgroundColor: "#3498db",
      color: "#fff",
    });
  });
});
