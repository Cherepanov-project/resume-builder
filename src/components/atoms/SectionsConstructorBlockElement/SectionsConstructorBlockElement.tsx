import { T_SectionElementProps } from "@/types/landingBuilder";
import LayoutBlockButton from "../LayoutBlockButton";
import LayoutBlockImage from "../LayoutBlockImage";
import LayoutBlockParagraph from "../LayoutBlockParagraph";
import LayoutBlockTitle from "../LayoutBlockTitle";
import LayoutBlockAnchor from "../LayoutBlockAnchor";


interface SectionsConstructorBlockElementType {
  params: T_SectionElementProps;
}

const SectionsConstructorBlockElement: React.FC<SectionsConstructorBlockElementType> = ({params}) => {

  const props = params;

  const isImg = false || params.key === 'image';
  const isBtn = false || params.key === 'button';
  const isTitle = false || params.key === 'title';
  const isParagraph = false || params.key === 'paragraph';
  const isAnchor = false || params.key === 'anchor';

  return (
    <>
      { isImg && <LayoutBlockImage props={props}/>}
      { isTitle && <LayoutBlockTitle props={props}/>}
      { isBtn && <LayoutBlockButton props={props}/> }
      { isParagraph && <LayoutBlockParagraph props={props} />}
      { isAnchor && <LayoutBlockAnchor props={props} /> }
    </>
  )
}

export default SectionsConstructorBlockElement;