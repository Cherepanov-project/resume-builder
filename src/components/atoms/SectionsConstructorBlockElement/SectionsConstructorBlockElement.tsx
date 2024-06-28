import { T_BlockElement } from '@/types/landingBuilder';
import Logo from '../Logo';
import ButtonBlock from '../ButtonBlock';
import Image from '../Image';
import Paragraph from '../Paragraph';
import Title from '../Title';
import Anchor from '../Anchor';
import RatingSystem from '../RatingSystem';
import Avatars from '../Avatars';
import Tooltip from '../Tooltip';
import Checkboxes from '../Checkboxes';
import RadioButtons from '../RadioButtons';
import { nanoid } from 'nanoid';
import SocialMediaIcon from '../SocialMediaIcon';
import CardItem from '../CardItem';
import Accordion from '../Accordion';
import MultiToggle from '../MultiToggle';
import HeaderTitle from '../HeaderTitle';
import Gallery from '../Gallery';
import VideoPlayer from '../VideoPlayer';
import DropdownList from '../DropdownList';
import ModalWindow from '../ModalWindow';
import Slider from '../Slider';

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
  const isSelectList = props.key === 'selectlist';
  const isModal = props.key === 'modal';
  const isSlider = props.key === 'slider';
  const isLogo = props.key === 'logo';
  const isSMIcon = props.key === 'smIcon'
  const isCardItem = props.key === 'cardItem'
  const isAccordion = props.key === 'accordion'
  const isCheckboxGroup = props.key === 'CheckboxGroup'
  
  
  return (
    <>
      {isImg && <Image props={props} />}
      {isTitle && <Title props={props} />}
      {isBtn && <ButtonBlock props={props} />}
      {isParagraph && <Paragraph props={props} />}
      {isAnchor && <Anchor props={props} />}
      {isLogo && <Logo props={props} />}
      {isRating && <RatingSystem props={params.columns || 5}/>}
      {isAvatar && (
        <Avatars
          props={{ Avatars: [{ id: nanoid(), img: props.url, title: props.text }] }}
          layout={params.layout}
        />
      )}
      {isTooltip && <Tooltip props={props.size || 0} />}
      {isCheckBox && (
        <Checkboxes
          props={{ Checkboxes: [{ id: nanoid(), value: props.text }] }}
          layout={params.layout}
        />
      )}
      {isCheckboxGroup && (
        <Checkboxes 
          props={props}
          layout={params.layout}
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
      {isSelectList && <DropdownList layout={params.layout} props={{DropdownList: [{id: nanoid(), value: props.text || 'Text'}]}}/>}
      {isModal && <ModalWindow props={props}/>}
      {isSlider && <Slider props={props} />}
      {isSMIcon && <SocialMediaIcon props={props} />}
      {isCardItem && <CardItem props={props} />}
      {isAccordion && <Accordion props={props} />}
    </>
  );
};

export default SectionsConstructorBlockElement;
