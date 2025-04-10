import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { setDraggableItem, addElement } from '@/store/landingBuilder/layoutSlice';

jest.mock('@mui/material/Box', () => ({
  __esModule: true,
  default: ({ children, sx }) => {
    if (sx && sx.width === '500px' && sx.height === '100%') {
      return (
        <div data-testid="main-container" data-sx={JSON.stringify(sx)}>
          {children}
        </div>
      );
    }
    return (
      <div data-testid="mui-box" data-sx={JSON.stringify(sx)}>
        {children}
      </div>
    );
  },
}));

jest.mock('../atoms/LetterCard', () => ({
  __esModule: true,
  default: ({ text, icon, id, name, draggable, onDragStart }) => (
    <div 
      data-testid={`letter-card-${id}`}
      data-text={text}
      data-name={name}
      data-draggable={draggable}
      draggable={draggable}
      onDragStart={onDragStart}
    >
      {icon && <div data-testid="icon">{icon}</div>}
      <span>{text}</span>
    </div>
  ),
}));

jest.mock('../atoms/LineCard', () => ({
  __esModule: true,
  default: ({ id, icon, draggable, onDragStart, onDrop, onDragOver }) => (
    <div 
      data-testid={`line-card-${id}`}
      data-draggable={draggable}
      draggable={draggable}
      onDragStart={onDragStart}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {icon && <div data-testid="line-icon">{icon}</div>}
      Line Card {id}
    </div>
  ),
}));

jest.mock('../molecules/FullWidthTabs', () => ({
  __esModule: true,
  default: ({ TabList, ElementCard, LineCard }) => (
    <div data-testid="full-width-tabs">
      <div data-testid="tab-list">
        {TabList.map((tab, index) => (
          <div key={index} data-testid={`tab-${index}`}>{tab.label}</div>
        ))}
      </div>
      <div data-testid="element-cards">{ElementCard}</div>
      <div data-testid="line-cards">{LineCard}</div>
    </div>
  ),
}));

jest.mock('@/utils/LetterTabList', () => [
  { id: 1, label: 'Tab 1' },
  { id: 2, label: 'Tab 2' }
]);


jest.mock('@/utils/LetterCardList', () => [
  {
    id: 101,
    name: 'Card 1',
    text: 'Card text 1',
    icon: 'Icon 1', 
    blockWidth: ['100%'],
    children: []
  },
  {
    id: 102,
    name: 'Card 2',
    text: 'Card text 2',
    icon: 'Icon 2', 
    blockWidth: ['50%', '50%'],
    children: []
  }
]);

jest.mock('@/utils/LetterLinesList', () => [
  {
    id: 201,
    name: 'Line 1',
    text: 'Line text 1',
    icon: 'Line Icon 1', 
    blockWidth: ['100%'],
    children: []
  },
  {
    id: 202,
    name: 'Line 2',
    text: 'Line text 2',
    icon: 'Line Icon 2', 
    blockWidth: ['50%', '50%'],
    children: []
  }
]);

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('@reduxjs/toolkit', () => ({
  ...jest.requireActual('@reduxjs/toolkit'),
  nanoid: jest.fn(),
}));

jest.mock('@/store/landingBuilder/layoutSlice', () => ({
  setDraggableItem: jest.fn().mockReturnValue({ type: 'setDraggableItem' }),
  addElement: jest.fn().mockReturnValue({ type: 'addElement' }),
}));

import LetterBuilderLeftSide from './LetterBuilderLeftSide';

describe('LetterBuilderLeftSide', () => {
  const mockDispatch = jest.fn();
  const mockNanoId = 'test-id-123';

  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockReturnValue(mockDispatch);
    nanoid.mockReturnValue(mockNanoId);
  });

  it('renders correctly with all components', () => {
    render(<LetterBuilderLeftSide />);
    
    const mainContainer = screen.getByTestId('main-container');
    expect(mainContainer).toBeInTheDocument();
    
    const sxProps = JSON.parse(mainContainer.getAttribute('data-sx'));
    expect(sxProps.width).toBe('500px');
    expect(sxProps.height).toBe('100%');
    
    const tabsComponent = screen.getByTestId('full-width-tabs');
    expect(tabsComponent).toBeInTheDocument();
    
    expect(screen.getByTestId('tab-0')).toHaveTextContent('Tab 1');
    expect(screen.getByTestId('tab-1')).toHaveTextContent('Tab 2');
    
    const elementCards = screen.getByTestId('element-cards');
    expect(elementCards).toBeInTheDocument();
    expect(screen.getByTestId('letter-card-101')).toBeInTheDocument();
    expect(screen.getByTestId('letter-card-102')).toBeInTheDocument();
    
    const lineCards = screen.getByTestId('line-cards');
    expect(lineCards).toBeInTheDocument();
    expect(screen.getByTestId('line-card-201')).toBeInTheDocument();
    expect(screen.getByTestId('line-card-202')).toBeInTheDocument();
  });

  it('has correct props for LetterCard components', () => {
    render(<LetterBuilderLeftSide />);
    
    const card1 = screen.getByTestId('letter-card-101');
    expect(card1).toHaveAttribute('data-text', 'Card text 1');
    expect(card1).toHaveAttribute('data-name', 'Card 1');
    expect(card1).toHaveAttribute('data-draggable', 'true');
    
    const card2 = screen.getByTestId('letter-card-102');
    expect(card2).toHaveAttribute('data-text', 'Card text 2');
    expect(card2).toHaveAttribute('data-name', 'Card 2');
    expect(card2).toHaveAttribute('data-draggable', 'true');
  });

  it('has correct props for LineCard components', () => {
    render(<LetterBuilderLeftSide />);
    
    const lineCard1 = screen.getByTestId('line-card-201');
    expect(lineCard1).toHaveAttribute('data-draggable', 'true');
    
    const lineCard2 = screen.getByTestId('line-card-202');
    expect(lineCard2).toHaveAttribute('data-draggable', 'true');
  });

  it('provides correct props to FullWidthTabs component', () => {
    render(<LetterBuilderLeftSide />);
    
    const fullWidthTabs = screen.getByTestId('full-width-tabs');
    expect(fullWidthTabs).toBeInTheDocument();
    
    expect(screen.getByTestId('tab-0')).toHaveTextContent('Tab 1');
    expect(screen.getByTestId('tab-1')).toHaveTextContent('Tab 2');
    
    const elementCards = screen.getByTestId('element-cards');
    expect(within(elementCards).getByTestId('letter-card-101')).toBeInTheDocument();
    expect(within(elementCards).getByTestId('letter-card-102')).toBeInTheDocument();
    
    const lineCards = screen.getByTestId('line-cards');
    expect(within(lineCards).getByTestId('line-card-201')).toBeInTheDocument();
    expect(within(lineCards).getByTestId('line-card-202')).toBeInTheDocument();
  });
});