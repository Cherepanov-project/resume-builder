//import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { useAppDispatch, useAppSellector } from '@/hooks/cvTemplateHooks';
import { setSectionStyle } from '@/store/landingBuilder/layoutSlice';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

export interface IProps {
    colorCSS: {}
    setColorCSS: React.Dispatch<React.SetStateAction<React.CSSProperties>>;
  }

const BasicRatingSettings: React.FC<IProps> = ({setColorCSS}) => {
    const dispatch = useAppDispatch();

    const [color, setColor] = useState('#eba434');
    const [colorOpen, setColorOpen] = useState(false);
    const [count, setCount] = useState<number>(0)
  
    const colorRef = useRef<HTMLDivElement>(null);

    const { activeElements } = useAppSellector((state) => state.layout);
    const findName = activeElements.find(el => el.name === 'BasicRating'? el: null)
    const layout = findName?.layout.i

  
    useLayoutEffect(() => {
      document.addEventListener('mousedown', handleClick);
      return () => {
        document.removeEventListener('mousedown', handleClick);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    useEffect(() => {
      // вывести в отдельную функцию
      setColorCSS({color: color});
      dispatch(setSectionStyle({i: layout, style: {color: color, count: count}}))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [color, count]);
  
    const handleColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    };
  
    const handleClick = (e: MouseEvent) => {
      if (colorRef.current && !colorRef.current.contains(e.target as Node)) {
        setColorOpen(false);
      }
    };

    const handleNumberInput = (e: any) => {
        const subtitle = document.querySelector('.number-input__subtitle')
        setCount(e.target.value)
        if (e.target.value > 20) {
            e.target.value = ''
            
            subtitle.classList.remove('hidden')
        } else {
            subtitle.classList.add('hidden')
        }
    }
  
    const rateColor = () => {
      return (
        <div ref={colorRef} className="settings-panel__item">
          {colorOpen ? (
            <HexColorPicker color={color} onChange={setColor} />
          ) : (
            <div className='settings-panel__bgcolor rating'>
              <span>set color</span>
              <div className="bg-form">
                <input value={color} onChange={(e) => handleColorInput(e)} />
                <div
                  className="bg-form__square"
                  onClick={() => setColorOpen(true)}
                ></div>
              </div>
              <span>set count of rating</span>
              <div className='bg-form__number'>
                    <input value={count > 0 && count < 20 ? count : ''} max={20} id='rating-input' type='number' onChange={handleNumberInput}/>
                </div>
                <span className='number-input__subtitle hidden'>Digits must not be larger 20 ! your number is <span className='count-digit'>{count}</span>, try another one!</span>
            </div>
          )}
        </div>
      );
    };
  
    return (
      <div className="settings-panel__items">
        {rateColor()}
      </div>
    );
};

export default BasicRatingSettings;
