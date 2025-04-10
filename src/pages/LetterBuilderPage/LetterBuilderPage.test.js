import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LetterBuilderPage from './LetterBuilderPage';

jest.mock('../../../letter-builder/LetterBuilderLeftSide/LetterBuilderLeftSide', () => {
  return function MockLetterBuilderLeftSide() {
    return <div data-testid="letter-builder-left-side">Left Side Component</div>;
  };
});

jest.mock('../../../letter-builder/LetterBuilderRightSide', () => ({
  LetterBuilderSetting: function MockLetterBuilderSetting() {
    return <div data-testid="letter-builder-setting">Settings Component</div>;
  }
}));

jest.mock('../../../letter-builder/LetterConstructorWorkspace/LetterConstructorWorkspace', () => {
  return function MockLetterConstructorWorkspace() {
    return <div data-testid="letter-constructor-workspace">Workspace Component</div>;
  };
});

jest.mock('@/components/molecules/LetterBuilderHeader', () => {
  return function MockLetterBuilderHeader() {
    return <div data-testid="letter-builder-header">Header Component</div>;
  };
});

jest.mock('@mui/material', () => ({
  Box: ({ children, sx }) => (
    <div data-testid="mui-box" data-sx={JSON.stringify(sx)}>
      {children}
    </div>
  ),
  Stack: ({ children, direction, height }) => (
    <div data-testid="mui-stack" data-direction={direction} data-height={height}>
      {children}
    </div>
  ),
}));

describe('LetterBuilderPage', () => {
  it('renders correctly with all components', () => {
    render(<LetterBuilderPage />);
    
    const boxContainer = screen.getByTestId('mui-box');
    expect(boxContainer).toBeInTheDocument();
    
    const sxProps = JSON.parse(boxContainer.getAttribute('data-sx'));
    expect(sxProps.width).toBe('100%');
    expect(sxProps.height).toBe('100%');
    expect(sxProps.overFlow).toBe('hidden');
    expect(sxProps.scrollbarWidth).toBe('none');

    const stackContainer = screen.getByTestId('mui-stack');
    expect(stackContainer).toBeInTheDocument();
    expect(stackContainer.getAttribute('data-direction')).toBe('row');
    expect(stackContainer.getAttribute('data-height')).toBe('100%');
    
    expect(screen.getByTestId('letter-builder-header')).toBeInTheDocument();
    expect(screen.getByTestId('letter-builder-left-side')).toBeInTheDocument();
    expect(screen.getByTestId('letter-constructor-workspace')).toBeInTheDocument();
    expect(screen.getByTestId('letter-builder-setting')).toBeInTheDocument();
  });
});