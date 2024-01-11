import './SettingsPanel.scss';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSellector } from '@/hooks/cvTemplateHooks';
import { closePanel } from '@/store/landingBuilder/settingsPanelSlice';
import React, { useLayoutEffect, useRef } from 'react';
import ContainerDIVSettings from '@/components/atoms/ContainerDIVSettings';

const SettingsPanel: React.FC = () => {

  const dispatch = useAppDispatch();

  const isShown = useAppSellector(state => state.settingsPanel.shown)
  const type = useAppSellector(state => state.settingsPanel.type)
  const id = useAppSellector(state => state.settingsPanel.sectionID)

  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  })
  
  const handleClick = (e: MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
      handleClose();
    }
  }

  const handleClose = () => {
    dispatch(closePanel());
  }


  return (
      isShown ? (
      <div 
        ref={panelRef}
        className='list__wrap'>
        <div className={'list__title'}>
          <h3>Settings</h3>
          <CloseIcon 
            className='list__close-btn'
            onClick={handleClose}/>
        </div>
        <div className='settings-panel'>
          {type === 'section' && <ContainerDIVSettings id={id}/>}
        </div>
      </div>) : null
  )
}

export default SettingsPanel;