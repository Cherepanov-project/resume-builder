import { T_BlockElement } from '@/types/landingBuilder';
import LayoutBlockButton from '../LayoutBlockButton';
import LayoutBlockImage from '../LayoutBlockImage';
import LayoutBlockParagraph from '../LayoutBlockParagraph';
import LayoutBlockTitle from '../LayoutBlockTitle';
import LayoutBlockAnchor from '../LayoutBlockAnchor';
import BasicRating from '../BasicRating';
import Avatars from '../Avatars';
import BasicTooltip from '../BasicTooltip';
import CheckboxGroup from '../CheckboxGroup';
import RadioGroup from '../RadioGroup';
import { nanoid } from 'nanoid';

interface SectionsConstructorBlockElementType {
  params: T_BlockElement;
}

const SectionsConstructorBlockElement: React.FC<SectionsConstructorBlockElementType> = ({
  params,
}) => {
  const props = params.props;

  const isImg = false || props.key === 'image';
  const isBtn = false || props.key === 'button';
  const isTitle = false || props.key === 'title';
  const isParagraph = false || props.key === 'paragraph';
  const isAnchor = false || props.key === 'anchor';
  const isRating = false || props.key === 'rating';
  const isAvatar = false || props.key === 'avatar';
  const isTooltip = false || props.key === 'tooltip';
  const isCheckBox = false || props.key === 'checkbox';
  const isRadiobox = false || props.key === 'radiobox';
  // console.log('pa', params);
  return (
    <>
      {isImg && <LayoutBlockImage props={props} />}
      {isTitle && <LayoutBlockTitle props={props} />}
      {isBtn && <LayoutBlockButton props={props} />}
      {isParagraph && <LayoutBlockParagraph props={props} />}
      {isAnchor && <LayoutBlockAnchor props={props} />}
      {isRating && <BasicRating />}
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
    </>
  );
};

export default SectionsConstructorBlockElement;
