import { View, Image, Font, StyleSheet } from '@react-pdf/renderer';

import { Personal, Experience, Education, Social, Hobbies } from './components';

import { ITemporaryCvDataSliceProps } from '../../../../../assets/const';

import Roboto from '../../../../../assets/fonts/RobotoSlab-Regular.ttf';
import RobotoBold from '../../../../../assets/fonts/RobotoSlab-Bold.ttf';

import photo from '../../../../../assets/images/lukeSky.jpg';

Font.register({
  family: 'Roboto',
  src: Roboto,
});

Font.register({
  family: 'RobotoBold',
  src: RobotoBold,
});

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row' },
  leftColumn: {
    flexDirection: 'column',
    width: 300,
    minHeight: '100%',
    padding: '25 20',
    backgroundColor: '#224b82',
  },
  rigthColumn: {
    flexDirection: 'column',
    padding: 20,
    paddingTop: 0,
  },
  imageWrapper: {
    margin: '0 auto',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'center top',
  },
});

export const PageContenProfessional = (temporaryCvDataSlice: ITemporaryCvDataSliceProps) => {
  const { personalData, eductionData, socialData, experienceData, hobbyData } =
    temporaryCvDataSlice;

  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <View style={styles.imageWrapper}>
          <Image style={styles.photo} src={photo} />
        </View>
        <Personal {...personalData} />
      </View>
      <View style={styles.rigthColumn}>
        <Experience {...experienceData} />
        <Education {...eductionData} />
        <Social {...socialData} />
        <Hobbies {...hobbyData} />
      </View>
    </View>
  );
};
