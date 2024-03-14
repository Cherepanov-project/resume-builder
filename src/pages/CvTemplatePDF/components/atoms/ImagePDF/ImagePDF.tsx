import { Image } from '@react-pdf/renderer';

import { StyleType } from '../../../const';

interface IImagePDFProps {
  imgPath: string;
  style: StyleType;
}

export const ImagePDF = (props: IImagePDFProps) => {
  const { imgPath, style } = props;
  return <Image src={imgPath} style={style} />;
};
