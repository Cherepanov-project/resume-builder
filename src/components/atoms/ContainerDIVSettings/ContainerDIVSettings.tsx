import { useAppDispatch } from "@/hooks/cvTemplateHooks";
import { setSectionStyle } from "@/store/landingBuilder/layoutSlice";
import { closePanel, initImageMenu } from "@/store/landingBuilder/settingsPanelSlice";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

interface IProps {
  id: string
}

const ContainerDIVSettings: React.FC<IProps> = ({id}) => {

  const dispatch = useAppDispatch();

  const [ style, setStyle ] = useState({});
  const [ image, setImage ] = useState('Input URL');
  const [ color, setColor ] = useState("#fff");
  const [ colorOpen, setColorOpen ] = useState(false)

  const colorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  })

  useEffect(() => {
    // вывести в отдельную функцию
    setStyle({
      backgroundColor: color,
      backgroundImage: `url(${image})` // сделать валидацию urla
    })
  }, [color, image])

  const handleColorInput= (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
  }

  const handleClick = (e: MouseEvent) => {
    if (colorRef.current && !colorRef.current.contains(e.target as Node)) {
      setColorOpen(false)
    }
  }

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value)
  }

  const handleApply = () => {
    console.log(style)
    dispatch(setSectionStyle({i: id, style}))
  }

  const bgImage = () => {
    return  (
      <div className='settings-panel__item settings-panel__image'>
        <span>BackgroundImage</span>
        <div className="settings-panel__image__block">
          <div className="settings-panel__image__block__bgimage">
            <img className='media-object' src={image} alt='bg-image'/>
            <button 
              className="settings-panel__items__btns__btn settings-panel__items__btns__btn--blue"
              onClick={() => dispatch(initImageMenu())}
            >
                Change
            </button>
          </div>
          <input 
            value={image}
            onChange={(e) => handleImageInput(e)}></input>
        </div>
      </div>
    )
  }

  const bgColor = () => {
    return (
      <div ref={colorRef} className='settings-panel__item'>
        {colorOpen ? 
          <HexColorPicker color={color} onChange={setColor} /> : 
          <div className="settings-panel__bgcolor">
            <span>Background-color</span>
            <div className="bg-form">
              <input 
                value={color}
                onChange={(e) => handleColorInput(e)}/>
              <div 
                className="bg-form__square"
                style={{backgroundColor: color}}
                onClick={() => setColorOpen(true)}
                >
              </div>
            </div>
          </div>}
      </div>
    )
  };

  return (
    <div className="settings-panel__items">
      {bgImage()}
      {bgColor()}
      <div className="settings-panel__items__btns">
        <button 
          className="settings-panel__items__btns__btn settings-panel__items__btns__btn--green"
          onClick={handleApply}>
            Apply
        </button>
        <button 
          className="settings-panel__items__btns__btn settings-panel__items__btns__btn--grey"
          onClick={() => dispatch(closePanel())}>
            Cancel
        </button>
      </div>
    </div>
  )
}

export default ContainerDIVSettings;