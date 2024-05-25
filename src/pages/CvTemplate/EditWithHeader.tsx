import React, {FC, ReactNode, useRef, useState, ErrorInfo} from 'react';
import {templatePDFStyles} from '../CvTemplatePDF/const';
import {Box, Button, MenuItem, Select, InputLabel, FormControl, ButtonGroup, Paper} from '@mui/material';
import {buttonStyle} from '@/assets/style/buttonStyle';
import {CvTemplatePDF} from '../CvTemplatePDF';
import {useReactToPrint} from 'react-to-print';
import {useTypedSelector} from '../../hooks/cvTemplateHooks';
import {
    AboutPDF,
    ContactsPDF,
    ExperiencePDF,
    HobbiesPDF,
    SocialPDF,
} from '@pages/CvTemplatePDF/components/molecules';
import {ImagePDF, SubtitlePDF, TextPDF, TitlePDF} from '@pages/CvTemplatePDF/components/atoms';
import {EducationPDF} from '@pages/CvTemplatePDF/components/molecules/EducationPDF';
import StyleEditor_v2 from '@pages/CvTemplate/StyleEditor.tsx';

interface IProps {
    setChooseTemplate: React.Dispatch<React.SetStateAction<number>>;
}

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

interface ComponentProps {
    component: (props) => React.ReactElement | null;
    title: string;
    data;
    complex?: boolean;
    propName: string;
    place?: string;
}

class ErrorBoundary extends React.Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return <h1>Sorry.. there was an error</h1>;
        }
        return this.props.children;
    }
}

const EditWithHeader: FC<IProps> = ({setChooseTemplate}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const selectAllPersonaInfo = (state: { personalInfo: any }) => state.personalInfo;
    const userTemporaryCvDataSlice = useTypedSelector(selectAllPersonaInfo); // получение всех данных о резюме
    // console.log(userTemporaryCvDataSlice);

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

    const fullNameTitiles = userTemporaryCvDataSlice.personalData.fullName.split(' ');

    const propsImage = {imgPath: userTemporaryCvDataSlice.photoData.avatar, style: Img};
    const propsSubtitle = {
        str: userTemporaryCvDataSlice.personalData.position,
        style: {...TextSpecial},
    };
    const propsContacts = {
        data: {
            address: 'Test' || userTemporaryCvDataSlice.personalData.address,
            phone: userTemporaryCvDataSlice.personalData.phone,
            website: userTemporaryCvDataSlice.personalData.website,
            email: userTemporaryCvDataSlice.personalData.email,
        },
        style: {Subtitle: SubtitleNone, Contact, ContactLink, ContactIcon, Text, ContactWrapper},
    };
    const propsAbout = {
        bio: userTemporaryCvDataSlice.personalData.bio,
        style: {Text, Subtitle: Subtitle},
    };

    if (templatePDFStyles.custom.style.Header === undefined) {
        templatePDFStyles.custom.style.Header = {backgroundColor: ''};
    }

    const propsEducation = {
        data: userTemporaryCvDataSlice.educationData,
        experienceName: 'Education',
        style: {
            Subtitle: {...Subtitle, ...SubtitleSpecial},
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
        experienceName: 'Experience',
        style: {
            Subtitle: {...Subtitle, ...SubtitleSpecial},
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
            Subtitle: {...Subtitle, ...SubtitleSpecial},
            Text,
        },
    };

    const propsHobbies = {
        data: userTemporaryCvDataSlice.hobbyData,
        style: {
            Hobbies,
            Hobbie,
            HobbieBullets,
            Subtitle: {...Subtitle, ...SubtitleSpecial},
            Text,
        },
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const pdfComponents : { [key: string]: ComponentProps } = {
        About: {
            component: AboutPDF,
            title: 'О себе',
            data: {...propsAbout},
            complex: true,
            propName: 'about',
        },
        Contacts: {
            component: ContactsPDF,
            title: 'Контакты',
            data: {...propsContacts},
            complex: true,
            propName: 'contact',
        },
        Image: {
            component: ImagePDF,
            title: 'Фотография',
            data: {...propsImage},
            place: 'Img',
            propName: 'img',
        },
        Title: {
            component: TitlePDF,
            title: 'Заголовок',
            data: {fullName: fullNameTitiles[0] + ' ' + fullNameTitiles[1], style: Title},
            place: 'Title',
            propName: 'title',
        },
        Text: {
            component: TextPDF,
            title: 'Текст',
            data: {...propsSubtitle},
            place: 'TextSpecial',
            propName: 'text',
        },
        Experience: {
            component: ExperiencePDF,
            title: 'Опыт',
            data: {...propsExperience},
            complex: true,
            propName: 'expirience',
        },
        Social: {
            component: SocialPDF,
            title: 'Социальные сети',
            data: {...propsSocial},
            complex: true,
            propName: 'social',
        },
        Hobbies: {
            component: HobbiesPDF,
            title: 'Хобби',
            data: {...propsHobbies},
            complex: true,
            propName: 'hobbies',
        },
        Education: {
            component: EducationPDF,
            title: 'Образование',
            data: {...propsEducation},
            complex: true,
            propName: 'education',
        },
        Subtitle: {
            component: SubtitlePDF,
            title: 'Подзаголовок',
            data: {...propsSubtitle},
            propName: 'subtitle',
        },
    };

    const [, setFlag] = useState(false);
    const updateFlag = () => {
        setFlag((flag) => !flag);
    };

    const mainComponents: string[] = []; // основные компоненты резюме
    templatePDFStyles.custom.structure.header.isPresented && mainComponents.push('Header');
    mainComponents.push('Main');
    templatePDFStyles.custom.structure.sidebar.isPresented && mainComponents.push('SideBar');

    const subComponents: { [key: string]: string[] } = {
        Header: [],
        Main: [],
        SideBar: [],
    }; // компоненты основных компонентов

    if (templatePDFStyles.custom.style.Header) {
        if (templatePDFStyles.custom.style.Header.name == 'toronto')
            subComponents['Header'] = ['Image', 'Text', 'Contacts','Title','About'];
        else subComponents['Header'] = ['Image', 'Title', 'Text', 'Contacts'];
    }

    if (templatePDFStyles.custom.style.Sidebar) {
        if (templatePDFStyles.custom.style.Sidebar.type == 'sydney')
            subComponents['SideBar'] = ['Contacts', 'Social', 'Hobbies'];
        else subComponents['SideBar'] = ['Title', 'Subtitle', 'About', 'Contacts'];
    }

    if (templatePDFStyles.custom.style.Main) {
        if (templatePDFStyles.custom.style.Main.type == 'sydney')
            subComponents['Main'] = ['Image', 'Title', 'Text', 'About', 'Experience', 'Education'];
        else if (templatePDFStyles.custom.style.Main.type == 'oslo')
            subComponents['Main'] = ['About', 'Experience', 'Education', 'Social', 'Hobbies'];
        else subComponents['Main'] = ['Education', 'Experience', 'Social', 'Hobbies'];
    }

    const [currentComponent, setCurrentComponent] = React.useState(mainComponents[0]);
    const [currentSubComponent, setCurrentSubComponent] = React.useState(null);

    const changeComponent = (value) => {
        setCurrentSubComponent(null);
        setCurrentComponent(value);
    };

    const changeSubComponent = (value) => {
        setCurrentSubComponent(value);
    };

    const PDFSubComponent =
        !!(currentSubComponent &&
            pdfComponents[currentSubComponent]) &&
        pdfComponents[currentSubComponent].component;

    const setNewStyleValue = React.useCallback((place, type, value) => {
        templatePDFStyles.custom.style = {
            ...templatePDFStyles.custom.style,
            [place]: {
                ...templatePDFStyles.custom.style[place],
                [type]: value,
            },
        };
    }, []);

    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <ErrorBoundary>
            <Box
                display="flex"
                justifyContent="center"
                style={{border: '1px solid black', backgroundColor: '#462174', padding: 10}}
            >
                <ButtonGroup color="secondary" variant="contained" aria-label="Basic button group">
                    {mainComponents.map((el, idx) => (
                        <Button onClick={() => changeComponent(el)} key={idx}>
                            {el}
                        </Button>
                    ))}
                </ButtonGroup>
            </Box>
            <Box display="flex" justifyContent="space-between" sx={{m: 5}}>
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                border: '1px solid black',
                                paddingBottom: '10px',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Button sx={{...buttonStyle, ml: 5}} onClick={() => setChooseTemplate(0)}>
                                Back
                            </Button>

                            <FormControl sx={{m: 1, minWidth: 130}}>
                                <InputLabel id="demo-simple-select-autowidth-label">{currentComponent}</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    autoWidth
                                    // value={!!subComponents[currentComponent] && currentComponent}
                                    onChange={(e) => changeSubComponent(e.target.value)}
                                    label="SubComponent"
                                >
                                    {subComponents[currentComponent].map((el, idx) => (
                                        <MenuItem key={idx} value={el}>
                                            {el}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Button sx={{...buttonStyle, ml: 5}} onClick={handlePrint}>
                                Print
                            </Button>
                        </Box>

                        {currentSubComponent && pdfComponents[currentSubComponent] && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    padding: '10px',
                                    flexDirection: 'column',
                                    margin: '10px',
                                }}
                            >
                                <Box component="fieldset">
                                    <legend>{pdfComponents[currentSubComponent].title}</legend>
                                    <StyleEditor_v2
                                        updateParent={updateFlag}
                                        Component={PDFSubComponent}
                                        componentProps={pdfComponents[currentSubComponent].data}
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
                        <CvTemplatePDF styleName={'custom'}  ref={componentRef}/>
                    </Paper>
                </Box>
            </Box>
        </ErrorBoundary>
    );
};

export default EditWithHeader;
