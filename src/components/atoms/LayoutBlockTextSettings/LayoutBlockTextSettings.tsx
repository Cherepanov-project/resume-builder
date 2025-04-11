import { TextSettingsProps } from '@/types/landingBuilder';
import { useAppDispatch} from '@/hooks/cvTemplateHooks';
import { setSectionStyle } from '@/store/landingBuilder/layoutSlice';
import { useEffect, useState, useCallback } from "react";
import { HexColorPicker } from 'react-colorful';
import classes from './LayoutBlockTextSettings.module.scss'

const LayoutBlockTextSettings: React.FC<TextSettingsProps> = ({index, textStyle}) => {
    const dispatch = useAppDispatch();

    const [fontSize, setFontSize] = useState(textStyle!.fontSize);
    const [color, setColor] = useState(textStyle!.color);
    const [textAlign, setTextAlign] = useState(textStyle!.textAlign);
    const [letterSpace, setLetterSpace] = useState(textStyle!.letterSpacing);
  
    const setTextStyle = useCallback((color: string, fontSize: number, textAlign: string, letterSpace: number) => {
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
    }, [dispatch, index]);
    
    useEffect(() => {
        setTextStyle(color || '', Number(fontSize) || 0, textAlign || 'left', Number(letterSpace) || 0);
    }, [color, fontSize, textAlign, letterSpace, setTextStyle]);

    const changeFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFontSize(e.target.value);
    };
    const changeLaterSpace= (e: React.ChangeEvent<HTMLInputElement>) => {
        setLetterSpace(e.target.value);
    };
    const changeAlign = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextAlign(e.target.value as "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start");
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