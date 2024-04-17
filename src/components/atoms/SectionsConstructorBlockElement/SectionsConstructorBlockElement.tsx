import { T_SectionElementProps } from '@/types/landingBuilder';
import LayoutBlockButton from '../LayoutBlockButton';
import LayoutBlockImage from '../LayoutBlockImage';
import LayoutBlockParagraph from '../LayoutBlockParagraph';
import LayoutBlockTitle from '../LayoutBlockTitle';
import LayoutBlockAnchor from '../LayoutBlockAnchor';
import Logo from '../Logo';
import SocialMediaIcon from '../SocialMediaIcon';
import CardItem from '../CardItem';
import Accordion from '../Accordion';

interface SectionsConstructorBlockElementType {
  params: T_SectionElementProps;
}

const SectionsConstructorBlockElement: React.FC<SectionsConstructorBlockElementType> = ({
  params,
}) => {
  const props = params;

  const isImg = false || params.key === 'image';
  const isBtn = false || params.key === 'button';
  const isTitle = false || params.key === 'title';
  const isParagraph = false || params.key === 'paragraph';
  const isAnchor = false || params.key === 'anchor';
  const isLogo = false || params.key === 'logo';
  const isSMIcon = false || params.key === 'smIcon';
  const isCardItem = false || params.key === 'cardItem';
  const isAccordion = false || params.key === 'accordion';

  return (
    <>
      {isImg && <LayoutBlockImage props={props} />}
      {isTitle && <LayoutBlockTitle props={props} />}
      {isBtn && <LayoutBlockButton props={props} />}
      {isParagraph && <LayoutBlockParagraph props={props} />}
      {isAnchor && <LayoutBlockAnchor props={props} />}
      {isLogo && <Logo props={props} />}
      {isSMIcon && <SocialMediaIcon props={props} />}
      {isCardItem && <CardItem props={props} />}
      {isAccordion && <Accordion props={props} />}
    </>
  );
};

export default SectionsConstructorBlockElement;
