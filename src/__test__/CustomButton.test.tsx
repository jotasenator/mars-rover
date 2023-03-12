import { jest } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import { CustomI18nButton } from "../components/buttons/CustomI18nButton";

describe("CustomButton component", () => {
  // Mock the useTranslation hook and the i18n.changeLanguage function
  const mockChangeLanguage = jest.fn();
  jest.mock("react-i18next", () => ({
    useTranslation: () => ({
      i18n: {
        changeLanguage: mockChangeLanguage,
      },
    }),
  }));

  // Create a mock flag icon
  const mockFlagIcon = <span data-testid="flag-icon">🇺🇸</span>;

  test("should render the component with initial lang of en", () => {
    render(
      <CustomI18nButton
        flagIcon={mockFlagIcon}
        iso639_1="en"
        customClass="custom-button"
      />
    );
    const button = screen.getByRole("button");
    const flagIcon = screen.getByTestId("flag-icon");
    expect(button).toBeInTheDocument();
    expect(flagIcon).toBeInTheDocument();
    expect(flagIcon).toHaveTextContent("🇺🇸");
  });
});
