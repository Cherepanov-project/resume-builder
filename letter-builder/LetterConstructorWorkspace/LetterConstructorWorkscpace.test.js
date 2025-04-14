import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

let mockUseTypedSelector = jest.fn();

jest.mock('@hooks/cvTemplateHooks', () => ({
  useTypedSelector: (...args) => mockUseTypedSelector(...args)
}), { virtual: true });

jest.mock('@store/landingBuilder/layoutSlice', () => ({
  IGridContainers: {}
}), { virtual: true });

jest.mock('react-custom-scroll', () => ({
  CustomScroll: ({ children, heightRelativeToParent }) => (
    <div 
      data-testid="custom-scroll" 
      data-height-relative-to-parent={heightRelativeToParent}
    >
      {children}
    </div>
  )
}), { virtual: true });

jest.mock('@mui/material', () => ({
  Box: ({ children, sx }) => (
    <div data-testid="mui-box" data-sx={JSON.stringify(sx)}>
      {children}
    </div>
  )
}), { virtual: true });

jest.mock('react-grid-layout/css/styles.css', () => ({}), { virtual: true });
jest.mock('react-resizable/css/styles.css', () => ({}), { virtual: true });
jest.mock('../molecules/FullWidthTabs/ScrollBar.scss', () => ({}), { virtual: true });

jest.mock('./LetterConstructorWorkspace.module.scss', () => ({
  workspace: 'workspace-class',
  wrapper: 'wrapper-class'
}), { virtual: true });

jest.mock('../LetterGridContainer/LetterGridContainer', () => ({
  LetterGridContainer: (props) => (
    <div 
      data-testid={`grid-container-${props.id}`} 
      data-props={JSON.stringify(props)}
      className="letter-grid-container"
    >
      Grid Container {props.id}
    </div>
  )
}), { virtual: true });

import LetterConstructorWorkspace from './LetterConstructorWorkspace';

describe('LetterConstructorWorkspace Integration', () => {
  const mockGridContainers = [
    { 
      id: '1', 
      title: 'Container 1', 
      layout: { x: 0, y: 0, w: 2, h: 2 },
      items: [{ id: 'item1', content: 'Content 1' }]
    },
    { 
      id: '2', 
      title: 'Container 2', 
      layout: { x: 2, y: 0, w: 1, h: 1 },
      items: [{ id: 'item2', content: 'Content 2' }]
    }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    
    mockUseTypedSelector.mockImplementation((selector) => {
      return selector({
        letterLayout: {
          gridContainers: mockGridContainers
        }
      });
    });
  });

  test('передает все свойства из Redux в дочерние компоненты', () => {
    render(<LetterConstructorWorkspace />);
    
   mockGridContainers.forEach(container => {
      const gridContainer = screen.getByTestId(`grid-container-${container.id}`);
      const props = JSON.parse(gridContainer.getAttribute('data-props'));
      
     expect(props.id).toBe(container.id);
      expect(props.title).toBe(container.title);
      expect(props.layout).toEqual(container.layout);
      expect(props.items).toEqual(container.items);
    });
  });
  
  test('правильно отображает контейнеры из Redux', () => {
    const { container } = render(<LetterConstructorWorkspace />);
    
    const gridContainers = screen.getAllByTestId(/grid-container-/);
    expect(gridContainers).toHaveLength(mockGridContainers.length);
    
    expect(screen.getByTestId('grid-container-1')).toHaveTextContent('Grid Container 1');
    expect(screen.getByTestId('grid-container-2')).toHaveTextContent('Grid Container 2');
  });
});