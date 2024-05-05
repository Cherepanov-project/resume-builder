import { T_BlockElement } from '@/types/landingBuilder';
<<<<<<< HEAD
import LayoutBlockButton from '../LayoutBlockButton';
import LayoutBlockImage from '../LayoutBlockImage';
import LayoutBlockParagraph from '../LayoutBlockParagraph';
import LayoutBlockTitle from '../LayoutBlockTitle';
import LayoutBlockAnchor from '../LayoutBlockAnchor';
import Logo from '../Logo';
import BasicRating from '../BasicRating';
=======
import ButtonBlock from '../ButtonBlock';
import Image from '../Image';
import Paragraph from '../Paragraph';
import Title from '../Title';
import Anchor from '../Anchor';
import RatingSystem from '../RatingSystem';
>>>>>>> origin/main
import Avatars from '../Avatars';
import Tooltip from '../Tooltip';
import Checkboxes from '../Checkboxes';
import RadioButtons from '../RadioButtons';
import { nanoid } from 'nanoid';
<<<<<<< HEAD
import ToggleButtonsMultiple from '../ToggleButtonsMultiple';
import TitleH1 from '../TitleH1';
import MasonryGallery from '../MasonryGallery';
import LayoutBlockVideoPlayer from '../LayoutBlockVideoPlayer';
import SelectList from '../SelectList';
import LayoutBlockModal from '../LayoutBlockModal';
import LayoutBlockSlider from '../LayoutBlockSlider';
import SocialMediaIcon from '../SocialMediaIcon';
import CardItem from '../CardItem';
import Accordion from '../Accordion';
=======
import MultiToggle from '../MultiToggle';
import HeaderTitle from '../HeaderTitle';
import Gallery from '../Gallery';
import VideoPlayer from '../VideoPlayer';
import DropdownList from '../DropdownList';
import ModalWindow from '../ModalWindow';
import Slider from '../Slider';
>>>>>>> origin/main

interface SectionsConstructorBlockElementType {
  params: T_BlockElement;
}

const SectionsConstructorBlockElement: React.FC<SectionsConstructorBlockElementType> = ({
  params,
}) => {
  // const props = params;
  // console.log(props);

  // const isImg = false || params.key === 'image';
  // const isBtn = false || params.key === 'button';
  // const isTitle = false || params.key === 'title';
  // const isParagraph = false || params.key === 'paragraph';
  // const isAnchor = false || params.key === 'anchor';
  
  const props = params.props;

  const isImg = props.key === 'image';
  const isBtn = props.key === 'button';
  const isTitle = props.key === 'title';
  const isH1Title = props.key === 'h1title';
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
  // console.log('pa', params);
<<<<<<< HEAD
  const isSMIcon = props.key === 'smIcon';
  const isCardItem = props.key === 'cardItem';
  const isAccordion = props.key === 'accordion';

  return (
    <>
      {isImg && <LayoutBlockImage props={props} />}
      {isTitle && <LayoutBlockTitle props={props} />}
      {isBtn && <LayoutBlockButton props={props} />}
      {isParagraph && <LayoutBlockParagraph props={props} />}
      {isAnchor && <LayoutBlockAnchor props={props} />}
      {isLogo && <Logo props={props} />}
      {isRating && <BasicRating props={params.columns || 5}/>}
=======
  console.log(props.key)
  return (
    <>
      {isImg && <Image props={props} />}
      {isTitle && <Title props={props} />}
      {isBtn && <ButtonBlock props={props} />}
      {isParagraph && <Paragraph props={props} />}
      {isAnchor && <Anchor props={props} />}
      {isRating && <RatingSystem props={params.columns || 5}/>}
>>>>>>> origin/main
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
      {isRadiobox && (
        <RadioButtons
          props={{ RadioButtons: [{ id: nanoid(), value: props.text }] }}
          layout={params.layout}
        />
      )}
<<<<<<< HEAD
      {isToggleButtons && <ToggleButtonsMultiple />}
      {isH1Title && <TitleH1 props={props} />}
      {isGallery && <MasonryGallery layout={params.layout} props={{MasonryGallery: [{id: nanoid(), img: props.url, title: props.text}]}}/>}
      {isVideo && <LayoutBlockVideoPlayer props={props}/>}
      {isSelectList && <SelectList layout={params.layout} props={{SelectList: [{id: nanoid(), value: props.text || 'Text'}]}}/>}
      {isModal && <LayoutBlockModal props={props}/>}
      {isSlider && <LayoutBlockSlider props={props} />}
      {isSMIcon && <SocialMediaIcon props={props} />}
      {isCardItem && <CardItem props={props} />}
      {isAccordion && <Accordion props={props} />}
=======
      {isToggleButtons && <MultiToggle />}
      {isH1Title && <HeaderTitle props={props} />}
      {isGallery && <Gallery layout={params.layout} props={{Gallery: [{id: nanoid(), img: props.url, title: props.text}]}}/>}
      {isVideo && <VideoPlayer props={props}/>}
      {isSelectList && <DropdownList layout={params.layout} props={{DropdownList: [{id: nanoid(), value: props.text || 'Text'}]}}/>}
      {isModal && <ModalWindow props={props}/>}
      {isSlider && <Slider props={props} />}
>>>>>>> origin/main
    </>
  );
};

export default SectionsConstructorBlockElement;
