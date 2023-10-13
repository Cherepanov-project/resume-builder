import { View, Image, Font, StyleSheet } from '@react-pdf/renderer';

import { Header, Education, Social, Experience, Hobbies } from './components';

import { ITemporaryCvDataSliceProps } from '../../../../../assets/const';

import MonoSpace from '../../../../../assets/fonts/SpaceMono-Regular.ttf';
import MonoSpaceBold from '../../../../../assets/fonts/SpaceMono-Bold.ttf';
import MonoSpaceItalic from '../../../../../assets/fonts/SpaceMono-Italic.ttf';

import photo from '../../../../../assets/images/lukeSky.jpg';

Font.register({
  family: 'MonoSpace',
  src: MonoSpace,
});

Font.register({
  family: 'MonoSpaceBold',
  src: MonoSpaceBold,
});

Font.register({
  family: 'MonoSpaceItalic',
  src: MonoSpaceItalic,
});

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row' },
  leftColumn: { flexDirection: 'column', width: 170, paddingTop: 30, paddingRight: 15 },
});

export const PageContenClassic = (temporaryCvDataSlice: ITemporaryCvDataSliceProps) => {
  const { personalData, eductionData, socialData, experienceData, hobbyData } =
    temporaryCvDataSlice;

  return (
    <>
      <Header {...personalData} />
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <Image src={photo} />
          <Education {...eductionData} />
          <Social {...socialData} />
        </View>
        <View>
          <Experience {...experienceData} />
          <Hobbies {...hobbyData} />
        </View>
      </View>
    </>
  );
};
