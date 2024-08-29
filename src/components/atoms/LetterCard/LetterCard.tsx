import { MouseEventHandler, useState } from 'react';
import Card from '@components/atoms/LetterCard/Card';

interface LetterCardProps {
    icon: JSX.Element
    text: string
}

const LetterCard = ({ icon, text }: LetterCardProps) => {
  const [mouseDown, setMouseDown] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  
  const onMouseDownHandler = () => {
    setMouseDown(true)
  }

  const onMouseUpHandler = () => {
    setMouseDown(false)
  }

  const onMouseMoveHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setX(event.clientX)
    setY(event.clientY)
  }
  
  return (
    <div 
      onMouseDown={onMouseDownHandler} 
      onMouseUp={onMouseUpHandler} 
      onMouseMove={(event) => onMouseMoveHandler(event)}
      style={{
        width: 'calc(33.3% - 15px)',
      }}>
      <Card icon={icon} text={text} isMouseDown={false} />
      {mouseDown && <Card icon={icon} text={text} isMouseDown={true} x={x} y={y}/>}
    </div>    
  )
}

export default LetterCard