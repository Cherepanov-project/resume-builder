import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
    if (sx && sx.margin === '0' && sx.maxWidth === '400px') {
      return (
        <div data-testid="line-card-wrapper" data-sx={JSON.stringify(sx)}>
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

describe('LetterBuilderLeftSide Drag and Drop', () => {
  const mockDispatch = jest.fn();
  const mockNanoId = 'test-id-123';

  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockReturnValue(mockDispatch);
    nanoid.mockReturnValue(mockNanoId);
    
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('dispatches setDraggableItem action on drag start for LetterCard', () => {
    render(<LetterBuilderLeftSide />);
    
    const card = screen.getByTestId('letter-card-101');
    
    const mockDataTransfer = {
      setData: jest.fn()
    };
    
    const dragStartEvent = new Event('dragstart', { bubbles: true });
    Object.defineProperty(dragStartEvent, 'dataTransfer', {
      value: mockDataTransfer
    });
    
    fireEvent(card, dragStartEvent);
    
    expect(mockDataTransfer.setData).toHaveBeenCalledWith('text/plain', expect.any(String));
    
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(setDraggableItem).toHaveBeenCalledWith({
      item: expect.objectContaining({
        id: mockNanoId,
        name: 'Card 1'
      })
    });
  });

  it('dispatches setDraggableItem action on drag start for LineCard', () => {
    render(<LetterBuilderLeftSide />);
    
    const lineCard = screen.getByTestId('line-card-201');
    
    const mockDataTransfer = {
      setData: jest.fn()
    };
    
    const dragStartEvent = new Event('dragstart', { bubbles: true });
    Object.defineProperty(dragStartEvent, 'dataTransfer', {
      value: mockDataTransfer
    });
    
    fireEvent(lineCard, dragStartEvent);
    
    expect(mockDataTransfer.setData).toHaveBeenCalledWith('text/plain', expect.any(String));
    
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(setDraggableItem).toHaveBeenCalledWith({
      item: expect.objectContaining({
        id: mockNanoId,
        name: 'Line 1'
      })
    });
  });

  it('handles drop event correctly on LineCard', () => {
    render(<LetterBuilderLeftSide />);
    
    const lineCard = screen.getByTestId('line-card-201');
    
    const mockDataTransfer = {
      getData: jest.fn().mockReturnValue(JSON.stringify({
        id: 'dropped-item-id',
        name: 'Dropped Item',
        someProperty: 'someValue'
      }))
    };
    
    const dropEvent = new Event('drop', { bubbles: true });
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: mockDataTransfer
    });
    
    dropEvent.preventDefault = jest.fn();
    
    fireEvent(lineCard, dropEvent);
    
    expect(dropEvent.preventDefault).toHaveBeenCalled();
    
    expect(mockDataTransfer.getData).toHaveBeenCalledWith('text/plain');
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(addElement).toHaveBeenCalledWith({
      id: 'dropped-item-id',
      name: 'Dropped Item',
      someProperty: 'someValue'
    });
  });

  it('handles dragover event correctly on LineCard', () => {
    render(<LetterBuilderLeftSide />);
    
    const lineCard = screen.getByTestId('line-card-201');
    
    const dragOverEvent = new Event('dragover', { bubbles: true });
    
    dragOverEvent.preventDefault = jest.fn();
    
    fireEvent(lineCard, dragOverEvent);
    
    expect(dragOverEvent.preventDefault).toHaveBeenCalled();
  });
});