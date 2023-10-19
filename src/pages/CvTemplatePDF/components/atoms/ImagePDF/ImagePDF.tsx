import { Image, StyleSheet } from '@react-pdf/renderer';

import photo from '../../../assets/images/lukeSky.jpg';

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'center top',
  },
});

export const ImagePDF = (imgPath: string, rounded: boolean) => {
  let imgStyle;

  // позже исправить, должны пояыляться из Формы
  imgPath = photo;

  if (rounded) imgStyle = styles.image;

  return <Image src={imgPath} style={imgStyle} />;
};
