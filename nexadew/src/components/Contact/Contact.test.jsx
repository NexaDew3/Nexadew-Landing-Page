import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "./Contact";

// Mock logo import
jest.mock("../../assets/logo.png", () => "logo.png");

// Mock fetch API
global.fetch = jest.fn();

describe("Contact Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("renders heading and contact info", () => {
    render(<Contact />);
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("Nexadew")).toBeInTheDocument();
    expect(screen.getByText("📞 +91 9900502164")).toBeInTheDocument();
    expect(screen.getByText("📧 hello@nexadew.com")).toBeInTheDocument();
  });

  test("fills the form fields correctly", () => {
    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Subject/i), {
      target: { value: "Test Subject" },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: "Hello world!" },
    });

    expect(screen.getByDisplayValue("John Doe")).toBeInTheDocument();
    expect(screen.getByDisplayValue("1234567890")).toBeInTheDocument();
    expect(screen.getByDisplayValue("john@example.com")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Test Subject")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Hello world!")).toBeInTheDocument();
  });

  test("displays success message after successful submission", async () => {
    fetch.mockResolvedValueOnce({ ok: true });

    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: "9999999999" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Subject/i), {
      target: { value: "Subject" },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: "Message content" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

    await waitFor(() =>
      expect(screen.getByText(/Message sent successfully!/i)).toBeInTheDocument()
    );
  });

  test("displays failure message after failed submission", async () => {
    fetch.mockResolvedValueOnce({ ok: false });

    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: "9999999999" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Subject/i), {
      target: { value: "Subject" },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: "Message content" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

    await waitFor(() =>
      expect(
        screen.getByText(/Failed to send message. Try again later./i)
      ).toBeInTheDocument()
    );
  });
});
