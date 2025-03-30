import React, { FC, ReactNode, useRef, useState, ErrorInfo, useMemo } from "react";
import { templatePDFStyles } from "../../CvTemplatePDF/const";
import {
  Box,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  ButtonGroup,
  Paper,
} from "@mui/material";
import { buttonStyle } from "@assets/style/buttonStyle.ts";
import { CvTemplatePDF } from "../../CvTemplatePDF";
import { useReactToPrint } from "react-to-print";
import { useTypedSelector } from "@hooks/cvTemplateHooks.ts";
import {
  AboutPDF,
  ContactsPDF,
  ExperiencePDF,
  HobbiesPDF,
  SocialPDF,
} from "@pages/CvTemplatePDF/components/molecules";
import { ImagePDF, SubtitlePDF, TextPDF, TitlePDF } from "@pages/CvTemplatePDF/components/atoms";
import { EducationPDF } from "@pages/CvTemplatePDF/components/molecules/EducationPDF";
import StyleEditor_v2 from "@pages/CvTemplate/components/StyleEditor.tsx";

interface IProps {
  setChooseTemplate: React.Dispatch<React.SetStateAction<number>>;
}

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

interface ComponentData {
  [key: string]: unknown;
}

interface ComponentProps {
  component: (props: Record<string, unknown>) => React.ReactElement | null;
  title: string;
  data: ComponentData;
  complex?: boolean;
  propName: string;
  place?: string;
}

interface PersonalInfo {
  personalData: {
    fullName: string;
    position: string;
    address?: string;
    phone: string;
    website: string;
    email: string;
    bio: string;
  };
  photoData: {
    avatar: string;
  };
  educationData: unknown[];
  experienceData: unknown[];
  socialData: unknown[];
  hobbyData: unknown[];
}

// Define AppState interface
interface AppState {
  personalInfo: PersonalInfo;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }
    return this.props.children;
  }
}

const EditWithHeader: FC<IProps> = ({ setChooseTemplate }) => {
  const selectAllPersonaInfo = (state: AppState) => state.personalInfo;
  const userTemporaryCvDataSlice = useTypedSelector(selectAllPersonaInfo); // получение всех данных о резюме

  const style = templatePDFStyles.custom.style;
  const {
    Hobbies,
    Hobbie,
    HobbieBullets,
    Contact,
    ContactLink,
    ContactIcon,
    ContactWrapper,
    Title,
    Text,
    TextSpecial,
    SubtitleNone,
    Subtitle,
    Img,
    SubtitleSpecial,
    Experiences,
    Experience,
    ExperienceTitle,
    ExperienceTime,
    ExperiencePosition,
    Educations,
    Education,
    EducationTitle,
    EducationTime,
    EducationPosition,
    Socials,
    Social,
    SocialTitle,
  } = style;

  const fullNameTitiles = userTemporaryCvDataSlice.personalData.fullName.split(" ");

  if (templatePDFStyles.custom.style.Header === undefined) {
    templatePDFStyles.custom.style.Header = { backgroundColor: "" };
  }

  // Добавлен тип Record<string, ComponentProps>
  const pdfComponents = useMemo<Record<string, ComponentProps>>(() => {
    // Перемещаем создание объектов пропсов внутрь useMemo
    const propsImage = { imgPath: userTemporaryCvDataSlice.photoData.avatar, style: Img };
    const propsSubtitle = {
      str: userTemporaryCvDataSlice.personalData.position,
      style: { ...TextSpecial },
    };
    const propsContacts = {
      data: {
        address: userTemporaryCvDataSlice.personalData.address || "Test",
        phone: userTemporaryCvDataSlice.personalData.phone,
        website: userTemporaryCvDataSlice.personalData.website,
        email: userTemporaryCvDataSlice.personalData.email,
      },
      style: { Subtitle: SubtitleNone, Contact, ContactLink, ContactIcon, Text, ContactWrapper },
    };
    const propsAbout = {
      bio: userTemporaryCvDataSlice.personalData.bio,
      style: { Text, Subtitle: Subtitle },
    };
    const propsEducation = {
      data: userTemporaryCvDataSlice.educationData,
      experienceName: "Education",
      style: {
        Subtitle: { ...Subtitle, ...SubtitleSpecial },
        Educations,
        Education,
        EducationTitle,
        EducationTime,
        EducationPosition,
        Text,
      },
    };
    const propsExperience = {
      data: userTemporaryCvDataSlice.experienceData,
      experienceName: "Experience",
      style: {
        Subtitle: { ...Subtitle, ...SubtitleSpecial },
        Experiences,
        Experience,
        ExperienceTitle,
        ExperienceTime,
        ExperiencePosition,
        Text,
      },
    };
    const propsSocial = {
      data: userTemporaryCvDataSlice.socialData,
      style: {
        Socials,
        Social,
        SocialTitle,
        Subtitle: { ...Subtitle, ...SubtitleSpecial },
        Text,
      },
    };
    const propsHobbies = {
      data: userTemporaryCvDataSlice.hobbyData,
      style: {
        Hobbies,
        Hobbie,
        HobbieBullets,
        Subtitle: { ...Subtitle, ...SubtitleSpecial },
        Text,
      },
    };

    return {
      About: {
        component: AboutPDF as unknown as (props: Record<string, unknown>) => React.ReactElement,
        title: "О себе",
        data: { ...propsAbout },
        complex: true,
        propName: "about",
      },
      Contacts: {
        component: ContactsPDF as unknown as (props: Record<string, unknown>) => React.ReactElement,
        title: "Контакты",
        data: { ...propsContacts },
        complex: true,
        propName: "contact",
      },
      Image: {
        component: ImagePDF as unknown as (props: Record<string, unknown>) => React.ReactElement,
        title: "Фотография",
        data: { ...propsImage },
        place: "Img",
        propName: "img",
      },
      Title: {
        component: TitlePDF as unknown as (props: Record<string, unknown>) => React.ReactElement,
        title: "Заголовок",
        data: { fullName: fullNameTitiles[0] + " " + fullNameTitiles[1], style: Title },
        place: "Title",
        propName: "title",
      },
      Text: {
        component: TextPDF as unknown as (props: Record<string, unknown>) => React.ReactElement,
        title: "Текст",
        data: { ...propsSubtitle },
        place: "TextSpecial",
        propName: "text",
      },
      Experience: {
        component: ExperiencePDF as unknown as (props: Record<string, unknown>) => React.ReactElement,
        title: "Опыт",
        data: { ...propsExperience },
        complex: true,
        propName: "expirience",
      },
      Social: {
        component: SocialPDF as unknown as (props: Record<string, unknown>) => React.ReactElement,
        title: "Социальные сети",
        data: { ...propsSocial },
        complex: true,
        propName: "social",
      },
      Hobbies: {
        component: HobbiesPDF as unknown as (props: Record<string, unknown>) => React.ReactElement,
        title: "Хобби",
        data: { ...propsHobbies },
        complex: true,
        propName: "hobbies",
      },
      Education: {
        component: EducationPDF as unknown as (props: Record<string, unknown>) => React.ReactElement,
        title: "Образование",
        data: { ...propsEducation },
        complex: true,
        propName: "education",
      },
      Subtitle: {
        component: SubtitlePDF as unknown as (props: Record<string, unknown>) => React.ReactElement,
        title: "Подзаголовок",
        data: { ...propsSubtitle },
        propName: "subtitle",
      },
    };
  }, [
    userTemporaryCvDataSlice,
    Img, TextSpecial, SubtitleNone, Contact, ContactLink, ContactIcon, Text, ContactWrapper,
    Subtitle, SubtitleSpecial, Educations, Education, EducationTitle, EducationTime, EducationPosition,
    Experiences, Experience, ExperienceTitle, ExperienceTime, ExperiencePosition,
    Socials, Social, SocialTitle, Hobbies, Hobbie, HobbieBullets, Title, fullNameTitiles
  ]);

  const [, setFlag] = useState(false);
  const updateFlag = () => {
    setFlag((flag) => !flag);
  };

  const mainComponents: string[] = []; 
  templatePDFStyles.custom.structure.header.isPresented && mainComponents.push("Header");
  mainComponents.push("Main");
  templatePDFStyles.custom.structure.sidebar.isPresented && mainComponents.push("SideBar");

  const subComponents: { [key: string]: string[] } = {
    Header: [],
    Main: [],
    SideBar: [],
  }; 

  if (templatePDFStyles.custom.style.Header) {
    if (templatePDFStyles.custom.style.Header.name == "toronto")
      subComponents["Header"] = ["Image", "Text", "Contacts", "Title", "About"];
    else subComponents["Header"] = ["Image", "Title", "Text", "Contacts"];
  }

  if (templatePDFStyles.custom.style.Sidebar) {
    if (templatePDFStyles.custom.style.Sidebar.type == "sydney")
      subComponents["SideBar"] = ["Contacts", "Social", "Hobbies"];
    else subComponents["SideBar"] = ["Title", "Subtitle", "About", "Contacts"];
  }

  if (templatePDFStyles.custom.style.Main) {
    if (templatePDFStyles.custom.style.Main.type == "sydney")
      subComponents["Main"] = ["Image", "Title", "Text", "About", "Experience", "Education"];
    else if (templatePDFStyles.custom.style.Main.type == "oslo")
      subComponents["Main"] = ["About", "Experience", "Education", "Social", "Hobbies"];
    else subComponents["Main"] = ["Education", "Experience", "Social", "Hobbies"];
  }

  const [currentComponent, setCurrentComponent] = React.useState(mainComponents[0]);
  const [currentSubComponent, setCurrentSubComponent] = React.useState<string | null>(null);

  const changeComponent = (value: string) => {
    setCurrentSubComponent(null);
    setCurrentComponent(value);
  };

  const changeSubComponent = (value: string) => {
    setCurrentSubComponent(value);
  };

  const PDFSubComponent = React.useMemo(() => {
    if (currentSubComponent && pdfComponents[currentSubComponent]) {
      return pdfComponents[currentSubComponent].component;
    }
    return null;
  }, [currentSubComponent, pdfComponents]);

  const setNewStyleValue = React.useCallback((place: string, type: string, value: string | number) => {
    if (templatePDFStyles.custom.style) {
      const currentPlaceStyle = templatePDFStyles.custom.style[place] || {};
      
      if (currentPlaceStyle) {
        const newStyles = JSON.parse(JSON.stringify(templatePDFStyles.custom.style));
        
        if (!newStyles[place]) {
          newStyles[place] = {};
        }
        
        newStyles[place][type] = value;
        
        templatePDFStyles.custom.style = newStyles;
      }
    }
  }, []);

  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <ErrorBoundary>
      <Box
        display="flex"
        justifyContent="center"
        style={{ border: "1px solid black", backgroundColor: "#462174", padding: 10 }}
      >
        <ButtonGroup color="secondary" variant="contained" aria-label="Basic button group">
          {mainComponents.map((el, idx) => (
            <Button onClick={() => changeComponent(el)} key={idx}>
              {el}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <Box display="flex" justifyContent="space-between" sx={{ m: 5 }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                border: "1px solid black",
                paddingBottom: "10px",
                justifyContent: "space-between",
              }}
            >
              <Button sx={{ ...buttonStyle, ml: 5 }} onClick={() => setChooseTemplate(0)}>
                Back
              </Button>

              <FormControl sx={{ m: 1, minWidth: 130 }}>
                <InputLabel id="demo-simple-select-autowidth-label">{currentComponent}</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  autoWidth
                  onChange={(e) => changeSubComponent(e.target.value as string)}
                  label="SubComponent"
                >
                  {subComponents[currentComponent].map((el, idx) => (
                    <MenuItem key={idx} value={el}>
                      {el}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button 
                sx={{ ...buttonStyle, ml: 5 }} 
                onClick={handlePrint}
              >
                Print
              </Button>
            </Box>

            {currentSubComponent && pdfComponents[currentSubComponent] && PDFSubComponent && (
              <Box
                sx={{
                  display: "flex",
                  padding: "10px",
                  flexDirection: "column",
                  margin: "10px",
                }}
              >
                <Box component="fieldset">
                  <legend>{pdfComponents[currentSubComponent].title}</legend>
                  <StyleEditor_v2
                    updateParent={updateFlag}
                    Component={PDFSubComponent}
                    componentProps={{ ...pdfComponents[currentSubComponent].data, style: templatePDFStyles.custom.style }}
                    isComplex={pdfComponents[currentSubComponent].complex}
                    setNewStyleValue={setNewStyleValue}
                    propName={pdfComponents[currentSubComponent].propName}
                    place={pdfComponents[currentSubComponent].place}
                  />
                </Box>
              </Box>
            )}

            {currentSubComponent && !pdfComponents[currentSubComponent] && (
              <h1>Компонент не найден</h1>
            )}
          </Box>

          <Paper elevation={12}>
            <CvTemplatePDF styleName={"custom"} ref={componentRef} />
          </Paper>
        </Box>
      </Box>
    </ErrorBoundary>
  );
};

export default EditWithHeader;