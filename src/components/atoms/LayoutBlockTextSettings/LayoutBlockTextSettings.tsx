import { TextSettingsProps } from '@/types/landingBuilder';
import { useAppDispatch} from '@/hooks/cvTemplateHooks';
import { setSectionStyle } from '@/store/landingBuilder/layoutSlice';

import { useEffect, useState } from "react"
import { HexColorPicker } from 'react-colorful';
import classes from './LayoutBlockTextSettings.module.scss'

const LayoutBlockTextSettings: React.FC<TextSettingsProps> = ({index, textStyle}) => {
    const dispatch = useAppDispatch();

    const [fontSize, setFontSize] = useState(textStyle!.fontSize);
    const [color, setColor] = useState(textStyle!.color);
    const [textAlign, setTextAlign] = useState(textStyle!.textAlign);
    const [letterSpace, setLetterSpace] = useState(textStyle!.letterSpacing);
  
    const setTextStyle = (color, fontSize, textAlign, letterSpace) => {
        dispatch(
            setSectionStyle({
            i: index,
            textStyle: { 
                color: color,
                fontSize: fontSize,
                textAlign: textAlign,
                letterSpacing: letterSpace, 
            },
            }),
        );
    }
    
    useEffect(() => {
        setTextStyle(color, fontSize, textAlign, letterSpace);
    }, [color, fontSize, textAlign, letterSpace])

    const changeFontSize= (e) => {
        setFontSize(e.target.value);
    };
    const changeLaterSpace= (e) => {
        setLetterSpace(e.target.value);
    };
    const changeAlign= (e) => {
        setTextAlign(e.target.value);
    };

    return (
        
        <div className={classes['text-settings']}>
            <span className={classes.title}>Text Settings</span>
            <div className={classes.wrapper}>
                <span>Text Color</span>
                <HexColorPicker style={{ width:'130px', height:'130px'}} color={color} onChange={setColor}/>
            </div>
            <div className={classes.wrapper}>
                <span>Fant Size</span>
                <input defaultValue={fontSize} onChange={(e) => changeFontSize(e)}></input>
            </div>
            <div className={classes.wrapper}>
                <span>Align Text</span>
                <input defaultValue={textAlign} onChange={(e) => changeAlign(e)}></input>
            </div>
            <div className={classes.wrapper}>
                <span>Letter Space</span>
                <input defaultValue={letterSpace} onChange={(e) => changeLaterSpace(e)}></input>
            </div>
            <div className={classes.divider}></div>
        </div>
    )
}
export default LayoutBlockTextSettings