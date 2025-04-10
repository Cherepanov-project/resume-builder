import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LetterBuilderHeader from "./LetterBuilderHeader";
import { Visibility, VisibilityOff } from "@mui/icons-material";

jest.mock("../CustomizedMenus", () => {
  return jest.fn(() => <div data-testid="customized-menus">Меню</div>);
});

jest.mock("@mui/icons-material", () => {
  return {
    Visibility: jest.fn(() => <div data-testid="visibility-icon">Visibility Icon</div>),
    VisibilityOff: jest.fn(() => <div data-testid="visibility-off-icon">VisibilityOff Icon</div>)
  };
});

describe("LetterBuilderHeader Функциональные тесты", () => {
  // Сбрасываем моки перед каждым тестом
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("должен правильно обрабатывать клики на кнопку видимости структуры", () => {
    render(<LetterBuilderHeader />);
    
    expect(Visibility).toHaveBeenCalledTimes(1);
    expect(VisibilityOff).not.toHaveBeenCalled();
    
    const toggleButton = screen.getByText("Отобразить структуру").closest("button");
    fireEvent.click(toggleButton);
    
    expect(VisibilityOff).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Скрыть структуру")).toBeInTheDocument();
    
    fireEvent.click(toggleButton);
    
    expect(Visibility).toHaveBeenCalledTimes(2);
    expect(screen.getByText("Отобразить структуру")).toBeInTheDocument();
  });

  test("должен использовать правильное начальное состояние", () => {
    render(<LetterBuilderHeader />);
    
    expect(Visibility).toHaveBeenCalled();
    expect(VisibilityOff).not.toHaveBeenCalled();
    expect(screen.getByText("Отобразить структуру")).toBeInTheDocument();
  });

  test("кнопки должны быть кликабельными", () => {
    render(<LetterBuilderHeader />);
    
    const saveButton = screen.getByText("Сохранить");
    const continueButton = screen.getByText("Продолжить");
    
    expect(saveButton).toBeInTheDocument();
    expect(continueButton).toBeInTheDocument();
    
    expect(saveButton.tagName).toBe("BUTTON");
    expect(continueButton.tagName).toBe("BUTTON");
  });

  test("должен иметь ожидаемую структуру DOM", () => {
    const { container } = render(<LetterBuilderHeader />);
    
    const leftSection = container.querySelector("div[class*='flex items-center h-full divide-x']");
    expect(leftSection).toBeInTheDocument();
    
    const rightSection = container.querySelector("div[class*='flex items-center mr-4 space-x-4']");
    expect(rightSection).toBeInTheDocument();
    
    const rightSectionButtons = rightSection.querySelectorAll("button");
    expect(rightSectionButtons.length).toBe(2);
  });
  
  test("текст кнопки должен соответствовать состоянию компонента", () => {
    render(<LetterBuilderHeader />);
    
    expect(screen.getByText("Отобразить структуру")).toBeInTheDocument();
    
    fireEvent.click(screen.getByText("Отобразить структуру").closest("button"));
    
    expect(screen.getByText("Скрыть структуру")).toBeInTheDocument();
  });
});