import { T_BlockElement } from '@/types/landingBuilder';
import LayoutBlockButton from '../LayoutBlockButton';
import LayoutBlockImage from '../LayoutBlockImage';
import LayoutBlockParagraph from '../LayoutBlockParagraph';
import LayoutBlockTitle from '../LayoutBlockTitle';
import LayoutBlockAnchor from '../LayoutBlockAnchor';
import Logo from '../Logo';
import BasicRating from '../BasicRating';
import Avatars from '../Avatars';
import BasicTooltip from '../BasicTooltip';
import CheckboxGroup from '../CheckboxGroup';
import RadioGroup from '../RadioGroup';
import { nanoid } from 'nanoid';
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
  const isLogo = false || props.key === 'logo';
  // console.log('pa', params);
  const isSMIcon = false || props.key === 'smIcon';
  const isCardItem = false || props.key === 'cardItem';
  const isAccordion = false || props.key === 'accordion';

  return (
    <>
      {isImg && <LayoutBlockImage props={props} />}
      {isTitle && <LayoutBlockTitle props={props} />}
      {isBtn && <LayoutBlockButton props={props} />}
      {isParagraph && <LayoutBlockParagraph props={props} />}
      {isAnchor && <LayoutBlockAnchor props={props} />}
      {isLogo && <Logo props={props} />}
      {isRating && <BasicRating props={params.columns || 5}/>}
      {isAvatar && (
        <Avatars
          props={{ Avatars: [{ id: nanoid(), img: props.url, title: props.text }] }}
          layout={params.layout}
        />
      )}
      {isTooltip && <BasicTooltip props={props.size || 0} />}
      {isCheckBox && (
        <CheckboxGroup
          props={{ CheckboxGroup: [{ id: nanoid(), value: props.text }] }}
          layout={params.layout}
        />
      )}
      {isRadiobox && (
        <RadioGroup
          props={{ RadioGroup: [{ id: nanoid(), value: props.text }] }}
          layout={params.layout}
        />
      )}
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
    </>
  );
};

export default SectionsConstructorBlockElement;
