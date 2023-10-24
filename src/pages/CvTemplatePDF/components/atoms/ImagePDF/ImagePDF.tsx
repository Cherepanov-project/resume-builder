import { Image } from '@react-pdf/renderer';

interface IImagePDFProps {
  imgPath: string;
  style: { [key: string]: string | number };
}

export const ImagePDF = (props: IImagePDFProps) => {
  const { imgPath, style } = props;
  return <Image src={imgPath} style={style} />;
};
