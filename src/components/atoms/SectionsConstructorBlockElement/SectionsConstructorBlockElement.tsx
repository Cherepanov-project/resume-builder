import { T_BlockElement } from '@/types/landingBuilder';
import { nanoid } from 'nanoid';
import React, { lazy, Suspense } from 'react';

const Logo = lazy(() => import('../Logo'));
const ButtonBlock = lazy(() => import('../ButtonBlock'));
const Image = lazy(() => import('../Image'));
const Paragraph = lazy(() => import('../Paragraph'));
const Title = lazy(() => import('../Title'));
const Anchor = lazy(() => import('../Anchor'));
const RatingSystem = lazy(() => import('../RatingSystem'));
const Avatars = lazy(() => import('../Avatars'));
const Tooltip = lazy(() => import('../Tooltip'));
const Checkboxes = lazy(() => import('../Checkboxes'));
const CheckboxGroup = lazy(() => import("../CheckboxGroup"));
const RadioButtons = lazy(() => import('../RadioButtons'));
const SocialMediaIcon = lazy(() => import('../SocialMediaIcon'));
const CardItem = lazy(() => import('../CardItem'));
const Accordion = lazy(() => import('../Accordion'));
const MultiToggle = lazy(() => import('../MultiToggle'));
const HeaderTitle = lazy(() => import('../HeaderTitle'));
const Gallery = lazy(() => import('../Gallery'));
const VideoPlayer = lazy(() => import('../VideoPlayer'));
const DropdownList = lazy(() => import('../DropdownList'));
const ModalWindow = lazy(() => import('../ModalWindow'));
const Slider = lazy(() => import('../Slider'));

interface SectionsConstructorBlockElementType {
  params: T_BlockElement;
}

const SectionsConstructorBlockElement: React.FC<SectionsConstructorBlockElementType> = ({
  params,
}) => {
  
  const props = params.props;

  const isImg = props.key === 'image';
  const isBtn = props.key === 'button';
  const isTitle = props.key === 'title';
  const isHeaderTitle = props.key === 'HeaderTitle';
  const isParagraph = props.key === 'paragraph';
  const isAnchor = props.key === 'anchor';
  const isRating = props.key === 'rating';
  const isAvatar = props.key === 'avatar';
  const isTooltip = props.key === 'tooltip';
  const isCheckBox = props.key === 'checkbox';
  const isRadiobox = props.key === 'radiobox';
  const isToggleButtons = props.key === 'toggleButtons';
  const isGallery = props.key === 'gallery';
  const isVideo = props.key === 'video';
  const isDropdownList = props.key === 'DropdownList';
  const isModal = props.key === 'modal';
  const isSlider = props.key === 'Slider';
  const isLogo = props.key === 'logo';
  const isSMIcon = props.key === 'smIcon'
  const isCardItem = props.key === 'cardItem'
  const isAccordion = props.key === 'accordion'
  const isCheckboxGroup = props.key === 'CheckboxGroup'

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isImg && <Image props={props} />}
      {isTitle && <Title props={props} />}
      {isBtn && <ButtonBlock props={props} />}
      {isParagraph && <Paragraph props={props} />}
      {isAnchor && <Anchor props={props} />}
      {isLogo && <Logo props={props} />}
      {isRating && <RatingSystem props={params.columns || 5}/>}
      {isAvatar && (
        <Avatars
          props={{ Avatars: [{ id: nanoid(), img: props.url || '', title: props.text }] }}
          layout={params.layout}
        />
      )}
      {isTooltip && <Tooltip props={props.size || 0} />}
      {isCheckBox && (
        <Checkboxes 
          layout={params.layout} 
          props={{ 
            Checkboxes: [{ 
              id: nanoid(), 
              value: props.text || '' 
            }] 
          }}
        />
      )}
      {isCheckboxGroup && (
          <CheckboxGroup
          layout={params.layout}
          props={{
           name: "checkbox-group",
            label: "CheckboxGroup",
            options:
              params.props.CheckboxGroup?.map((item) => ({
                id: item.id || nanoid(),
                value: item.value || "",
                label: item.value || "",
              })) || [],
            onChange: undefined,
          }}
         
        />
      )}
      {isRadiobox && (
        <RadioButtons
          props={{ RadioButtons: [{ id: nanoid(), value: props.text }] }}
          layout={params.layout}
        />
      )}
      {isToggleButtons && <MultiToggle />}
      {isHeaderTitle && <HeaderTitle props={props} />}
      {isGallery && <Gallery layout={params.layout} props={{Gallery: [{id: nanoid(), img: props.url, title: props.text}]}}/>}
      {isVideo && <VideoPlayer props={props}/>}
      {isDropdownList && <DropdownList layout={params.layout} props={{DropdownList: props.SelectList!}}/>}
      {isModal && <ModalWindow props={props}/>}
      {isSlider && <Slider props={props} />}
      {isSMIcon && <SocialMediaIcon props={props} />}
      {isCardItem && <CardItem props={props} />}
      {isAccordion && <Accordion props={props} />}
    </Suspense>
  );
};

export default SectionsConstructorBlockElement;