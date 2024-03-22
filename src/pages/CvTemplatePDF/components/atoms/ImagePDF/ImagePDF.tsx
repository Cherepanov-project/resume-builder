import { StyleType } from '../../../const';

interface IImagePDFProps {
  imgPath: string;
  style: StyleType;
}

export const ImagePDF = (props: IImagePDFProps) => {
  const { imgPath, style } = props;
  return <img src={imgPath} style={style} />;
};
