import { EducationPDF, ExperiencePDF, AboutPDF, HobbiesPDF } from '../../../molecules';

import {
  EductionDataType,
  ExperienceDataType,
  HobbyDataType,
} from '../../../../../../assets/const';

export const MainPDFContentFull = (
  educations: EductionDataType[],
  experiences: ExperienceDataType[],
  hobbies: HobbyDataType[],
) => {
  // bio
  // educational data
  //

  return (
    <>
      <AboutPDF bio={bio} />
      <EducationPDF data={educations} />
      <ExperiencePDF data={experiences} />
      <HobbiesPDF data={hobbies} />
    </>
  );
};
