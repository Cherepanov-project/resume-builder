import './fonts.scss'

export type StyleType = { [key: string]: string | number };

export type StylesNameKeys =
  | 'default'
  | 'defaultCustomized'
  | 'classic'
  | 'classicCustomized'
  | 'modern'
  | 'modernRigth'
  | 'custom'
  | 'toronto'
  | 'sydney'
  | 'oslo'
  | 'chrono'
  | 'metro';

export type StyleOptionType = {
  [key: string]: StyleType;
};

type StuctureType = {
  isPresented?: boolean;
  isPlaced?: 'right' | 'left';
};

type StructureContentType = {
  structure: { isShort: boolean; header: StuctureType; sidebar: StuctureType; main: StuctureType };
  style: StyleOptionType;
};

type StylesType = Record<StylesNameKeys, StructureContentType>;

export const templatePDFStyles: StylesType = {
  oslo: {
    structure: {
      isShort: false,
      header: { isPresented: true },
      sidebar: { isPresented: false },
      main: {},
    },
    style: {
      MainPage: {
        backgroundColor: 'white',
      },
      Main: {
        type: 'oslo',
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%',
        maxHeight: '500px',
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: '2%',
      },
      Header: {
        name: 'oslo',
        flexDirection: 'row',
        backgroundColor: '#303030',
        color: 'white',
      },
      HeaderWrapper: {
        justifyContent: 'center',
        width: '100%',
      },

      Experiences: { marginBottom: 20, pageBreakInside: 'avoid' },
      Experience: { name:'oslo', fontSize: 14 },
      ExperienceTime: { fontSize: 14, color: '#888888' },
      ExperienceTitle: { fontSize: 14, fontWeight: 'bold' },
      ExperiencePosition: { fontSize: 14 },
      EducationTime: { fontSize: 14, color: '#888888' },
      EducationPosition: { fontSize: 14 },
      Educations: { marginBottom: 10, pageBreakInside: 'avoid' },
      Education: { name: 'oslo', fontSize: 14 },
      EducationTitle: { fontSize: 16, fontWeight: 'bold' },

      Socials: { marginBottom: 10, pageBreakInside: 'avoid' },
      Social: {},
      SocialTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },

      Hobbies: { pageBreakInside: 'avoid' },
      Hobbie: {
        flexDirection: 'row',
      },
      HobbieBullets: {
        fontFamily: 'Times-Roman',
        fontSize: 14,
        marginRight: 5,
      },

      ContactWrapper: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 5,
        marginBottom: 10,
        pageBreakInside: 'avoid',
      },
      Contact: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 5,
        alignItems: 'center',
      },
      ContactLink: {
        fontFamily: 'Times-Roman',
        textDecoration: 'none',
        fontSize: 14,
      },
      ContactIcon: {
        width: 15,
        height: 15,
        marginRight: 5,
        marginLeft: 15,
      },
      SubtitleWrapper: {
        marginBottom: 10,
        pageBreakInside: 'avoid',
      },
      Title: {
        fontFamily: 'Times-Roman',
        fontSize: 30,
        fontWeight: 700,
      },
      Subtitle: {
        fontFamily: 'Times-Bold',
        fontSize: 24,
        fontWeight: 700,
        marginBottom: '10px',
      },
      SubtitleNone: {
        display: 'none',
        opacity: 0,
      },
      Text: {
        fontFamily: 'Times-Bold',
        fontSize: 16,
      },
      TextSpecial: {
        fontFamily: 'Times-Bold',
        fontSize: 10,
        textTransform: 'uppercase',
        marginBottom: 15,
      },
      Img: {
        marginTop: 20,
        width: 60,
        height: 60,
        borderRadius: '50%',
      },
    },
  },
  sydney: {
    structure: {
      isShort: false,
      header: { isPresented: false },
      sidebar: { isPresented: true, isPlaced: 'right' },
      main: {},
    },
    style: {
      Page: { flexDirection: 'row-reverse' },
      SidebarPage: {
        flex: 2,
        minWidth: '30%',
        minHeight: '100%',
        wordBreak: 'break-word',
      },
      MainPage: {
        backgroundColor: '#ffffff',
        color: 'black',
        flex: 3,
        maxWidth: '60%',
        wordBreak: 'break-word',
      },

      Sidebar: {
        fontSize: 30,
        type: 'sydney',
        minHeight: '100%',
        backgroundColor: '#082a4d',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        paddingLeft: 25,
      },
      SidebarWrapper: {},
      SidebarImage: {},

      Main: {
        type: 'sydney',
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        flexDirection: 'column',
      },

      Experiences: { pageBreakInside: 'avoid' },
      Experience: { name: 'sydney', marginBottom: 15 },
      ExperienceTitle: { color: 'black', fontWeight: 700, fontSize: 16 },
      ExperienceTime: { fontSize: 14, color: '#888888' },
      ExperiencePosition: { fontSize: 20 },

      Educations: { pageBreakInside: 'avoid' },
      Education: { name: 'sydney', marginBottom: 10 },
      EducationTitle: {
        color: 'black',
        fontWeight: 700,
        fontSize: 16,
      },
      EducationTime: { fontSize: 14, color: '#888888' },
      EducationPosition: { fontSize: 20 },

      Socials: {
        marginBottom: 10,
        pageBreakInside: 'avoid',
      },
      Social: {color: 'white'},
      SocialPreview: {color: 'black'},
      SocialTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },

      Hobbies: { pageBreakInside: 'avoid' },
      Hobbie: {
        flexDirection: 'row',
      },
      HobbieBullets: {
        fontFamily: 'Times-Roman',
        fontSize: 14,
        marginRight: 5,
      },

      ContactWrapper: { marginTop: 80, pageBreakInside: 'auto' },
      Contact: {},
      ContactLink: {
        fontFamily: 'Times-Roman',
        fontSize: 14,
        color: 'white',
      },
      ContactIcon: {
        width: 0,
        height: 0,
        marginRight: 0,
      },

      Title: {
        fontFamily: 'Times-Roman',
        fontSize: 40,
        fontWeight: 700,
        color: '#000000',
      },
      Subtitle: {
        name: 'sydney',
        fontFamily: 'Times-Bold',
        fontWeight: 700,
        fontSize: 24,
      },
      SubtitleWrapper: {
        marginBottom: '10px',
        pageBreakInside: 'avoid',
      },
      SubtitleNone: {
        display: 'none',
        opacity: 0,
      },
      Text: {
        fontFamily: 'Times-Bold',
        fontSize: 16,
      },
      TextSpecial: {
        fontFamily: 'Times-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },
      Img: {
        marginRight: '15px',
        width: 80,
        height: 80,
        borderRadius: '50%',
      },
    },
  },
  toronto: {
    structure: {
      isShort: false,
      header: { isPresented: true },
      sidebar: { isPresented: false },
      main: {},
    },
    style: {
      MainPage: {
        backgroundColor: 'white',
      },
      Main: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: '2%',
      },

      Header: {
        name: 'toronto',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: '2%',
      },
      HeaderWrapper: {
        justifyContent: 'center',
        width: '100%',
        minWidth: '40%',
      },

      Experiences: { pageBreakInside: 'avoid' },
      Experience: { marginBottom: 100, width: 270 },
      ExperienceTime: {
        fontSize: 23,
      },
      ExperienceTitle: {
        background: 'black',
        color: 'white',
        fontWeight: 700,
        fontSize: 25,
        display: 'inline-block',
      },
      ExperiencePosition: { fontSize: 26 },
      EducationTime: {
        fontSize: 23,
      },
      EducationPosition: { fontSize: 26 },
      Educations: {
        marginBottom: '10px',
        pageBreakInside: 'avoid',
      },
      Education: { marginBottom: 10 },
      EducationTitle: {
        background: 'black',
        color: 'white',
        fontWeight: 700,
        fontSize: 25,
        display: 'inline-block',
      },

      Socials: {
        marginLeft: 'auto',
        background: '#eeeeee',
        borderRadius: '20px',
        padding: '2%',
        paddingLeft: '2%',
        marginBottom: '10px',
        pageBreakInside: 'avoid',
      },
      Social: {},
      SocialTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 20,
        textTransform: 'uppercase',
      },

      Hobbies: {
        background: '#eeeeee',
        borderRadius: '20px',
        padding: '2%',
        paddingLeft: '3%',
        pageBreakInside: 'avoid',
      },
      Hobbie: {
        flexDirection: 'row',
      },
      HobbieBullets: {
        fontFamily: 'Times-Roman',
        fontSize: 18,
        marginRight: 5,
      },

      ContactsWrapeer: {
        justifyContent: 'center',
        marginLeft: 'auto',
      },
      Contact: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
      ContactLink: {
        fontFamily: 'Times-Roman',
        textDecoration: 'none',
        fontSize: 15,
        color: 'black',
      },
      ContactIcon: {
        width: 0,
        height: 0,
        marginRight: 0,
      },

      Title: {
        fontFamily: 'Times-Roman',
        fontSize: 60,
        fontWeight: 700,
        color: '#000000',
      },
      Subtitle: {
        fontFamily: 'Times-Bold',
        fontSize: 30,
        fontWeight: 700,
        color: '#000000',
      },
      SubtitleNone: {
        display: 'none',
        opacity: 0,
      },
      Text: {
        fontFamily: 'Times-Bold',
        fontSize: 18,
      },
      TextSpecial: {
        fontFamily: 'Times-Bold',
        fontSize: 22,
        fontWeight: 700,
      },
      Img: {
        width: 60,
        height: 100,
      },
    },
  },

  default: {
    structure: {
      isShort: true,
      header: { isPresented: true },
      sidebar: { isPresented: true, isPlaced: 'left' },
      main: {},
    },
    style: {
      PageWrapper: { flexDirection: 'row' },
      SidebarPage: { flex: 2, minWidth: '30%', maxWidth: '40%', wordBreak: 'break-word' },
      MainPage: { flex: 3, maxWidth: '60%', wordBreak: 'break-word' },
      HeaderShort: {
        height: 120,
        minWidth: '100%',
        alignSelf: 'center',
        justifySelf: 'center',
        paddingTop: 10,
        borderBottomStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
      },
      HeaderShortWrapper: {
        alignSelf: 'center',
        justifySelf: 'center',
        marginBottom: 10,
      },
      SidebarShort: {
        flex: 1,
        minHeight: '100%',
        padding: 10,
      },
      SidebarShortWrapper: {
        marginTop: 10,
      },
      SidebarShortImage: {
        alignSelf: 'center',
      },
      Main: {
        height: '100%',
        padding: 10,
      },
      Experiences: {
        marginBottom: 10,
        pageBreakInside: 'avoid',
      },
      Experience: { marginBottom: 10 },
      ExperienceTitle: {
        fontFamily: 'Courier-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },
      Socials: { pageBreakInside: 'avoid' },
      Social: {
        marginBottom: 10,
      },
      SocialTitle: {
        fontFamily: 'Courier-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },
      Hobbies: { pageBreakInside: 'avoid' },
      Hobbie: {
        flexDirection: 'row',
        marginBottom: 5,
      },
      HobbieBullets: {
        fontFamily: 'Courier',
        fontSize: 14,
        marginRight: 5,
      },
      Title: {
        fontFamily: 'Courier-Bold',
        fontSize: 35,
        textTransform: 'uppercase',
      },
      Subtitle: {
        fontFamily: 'Courier-Bold',
        fontSize: 16,
        textTransform: 'uppercase',
        marginBottom: 5,
      },
      SubtitleSpecial: {},
      Contact: {
        flexDirection: 'row',
        marginBottom: 5,
      },
      ContactLink: {
        fontFamily: 'Courier',
        textDecoration: 'none',
        fontSize: 14,
        color: 'black',
      },
      ContactIcon: {
        width: 16,
        height: 16,
        marginRight: 5,
      },
      Text: {
        fontFamily: 'Courier',
        fontSize: 14,
      },
      TextSpecial: {
        fontFamily: 'Courier-Bold',
        fontSize: 20,
        textTransform: 'uppercase',
      },
      ExpirienceTime: { color: 'black', fontWeight: 700 },
      ExpiriencePosition: {},
      EducationTime: {},
      EducationPosition: {},

      Educations: {
        marginBottom: '10px',
        pageBreakInside: 'avoid',
      },
      Education: { marginBottom: 10 },
      EducationTitle: {
        background: 'black',
        color: 'white',
        fontWeight: 700,
        fontSize: '60%',
        display: 'inline-block',
      },
      Img: {
        width: 120,
        height: 120,
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: 'center top',
      },
    },
  },
  defaultCustomized: {
    structure: {
      isShort: true,
      header: { isPresented: true },
      sidebar: { isPresented: true, isPlaced: 'left' },
      main: {},
    },
    style: {
      PageWrapper: { flexDirection: 'row' },
      SidebarPage: { flex: 2, minWidth: '30%', maxWidth: '40%', wordBreak: 'break-word' },
      MainPage: { flex: 3, maxWidth: '60%', wordBreak: 'break-word' },

      HeaderShort: {
        height: 120,
        minWidth: '100%',
        alignSelf: 'center',
        justifySelf: 'center',
        paddingTop: 10,
        backgroundColor: '#ffff00',
      },
      HeaderShortWrapper: {
        alignSelf: 'center',
        justifySelf: 'center',
        marginBottom: 10,
      },

      SidebarShort: {
        flex: 1,
        minHeight: '100%',
        padding: 10,
        backgroundColor: 'green',
      },
      SidebarShortWrapper: {
        marginTop: 10,
      },
      SidebarShortImage: {
        alignSelf: 'center',
      },

      Main: {
        height: '100%',
        padding: 10,
        backgroundColor: 'grey',
      },

      Experiences: {
        marginBottom: 10,
        pageBreakInside: 'avoid',
      },
      Experience: { marginBottom: 10 },
      ExperienceTitle: {
        fontFamily: 'Courier-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },
      ExpirienceTime: { color: 'black', fontWeight: 700 },
      ExpiriencePosition: {},
      EducationTime: {},
      EducationPosition: {},
      Socials: { pageBreakInside: 'avoid' },
      Social: {
        marginBottom: 10,
      },
      SocialTitle: {
        fontFamily: 'Courier-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },

      Hobbies: { pageBreakInside: 'avoid' },
      Hobbie: {
        flexDirection: 'row',
        marginBottom: 5,
      },
      HobbieBullets: {
        fontFamily: 'Courier',
        fontSize: 14,
        marginRight: 5,
      },

      Educations: {
        marginBottom: '10px',
        pageBreakInside: 'avoid',
      },
      Education: { marginBottom: 10 },
      EducationTitle: {
        background: 'black',
        color: 'white',
        fontWeight: 700,
        fontSize: '60%',
        display: 'inline-block',
      },
      Contact: {
        flexDirection: 'row',
        marginBottom: 5,
      },
      ContactLink: {
        fontFamily: 'Courier',
        textDecoration: 'none',
        fontSize: 14,
        color: 'black',
      },
      ContactIcon: {
        width: 16,
        height: 16,
        marginRight: 5,
      },

      Title: {
        fontFamily: 'Courier-Bold',
        fontSize: 35,
        textTransform: 'uppercase',
      },
      Subtitle: {
        fontFamily: 'Courier-Bold',
        fontSize: 16,
        textTransform: 'uppercase',
        marginBottom: 5,
      },
      SubtitleSpecial: {
        backgroundColor: 'white',
        color: '#1a4780',
      },

      Text: {
        fontFamily: 'Courier',
        fontSize: 14,
      },
      TextSpecial: {
        fontFamily: 'Courier-Bold',
        fontSize: 20,
        textTransform: 'uppercase',
      },
      Img: {
        width: 120,
        height: 120,
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: 'center top',
      },
    },
  },
  custom: {
    structure: {
      isShort: false,
      header: { isPresented: true },
      sidebar: { isPresented: false },
      main: {},
    },
    style: {
      Main: { flexDirection: 'column', padding: 10, paddingLeft: 30 },
      Header: {
        height: '200px',
        flexDirection: 'row',
        padding: '10px',
        backgroundColor: 'white',
        borderBottomStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
      },
      HeaderWrapper: {
        justifyContent: 'center',
        marginRight: 20,
        minWidth: '40%',
      },
      ExpirienceTime: { color: 'black', fontWeight: 700 },
      ExpiriencePosition: {},
      EducationTime: {},
      EducationPosition: {},
      Experiences: {
        marginBottom: 10,
        minWidth: '100%',
        pageBreakInside: 'avoid',
      },
      Experience: { marginBottom: 10 },
      ExperienceTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },

      Socials: { marginBottom: 10, pageBreakInside: 'avoid' },
      Social: {
        marginBottom: 10,
      },
      SocialTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },

      Hobbies: { pageBreakInside: 'avoid' },
      Hobbie: {
        flexDirection: 'row',
        marginBottom: 5,
      },
      HobbieBullets: {
        fontFamily: 'Times-Roman',
        fontSize: 14,
        marginRight: 5,
      },

      ContactsWrapeer: {
        justifyContent: 'center',
        marginLeft: 'auto',
      },
      Contact: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 5,
      },
      ContactLink: {
        fontFamily: 'Times-Roman',
        textDecoration: 'none',
        fontSize: 14,
        color: 'black',
      },
      ContactIcon: {
        width: 16,
        height: 16,
        marginRight: 5,
      },

      Educations: {
        marginBottom: '10px',
        pageBreakInside: 'avoid',
      },
      Education: { marginBottom: 10 },
      EducationTitle: {
        background: 'black',
        color: 'white',
        fontWeight: 700,
        fontSize: '60%',
        display: 'inline-block',
      },
      Title: {
        fontFamily: 'Times-BoldItalic',
        fontSize: 35,
        textTransform: 'uppercase',
        color: '#00008b',
      },
      Subtitle: {
        fontFamily: 'Times-Bold',
        fontSize: 16,
        textTransform: 'uppercase',
        marginBottom: 5,
        color: '#00008b',
      },
      SubtitleNone: {
        display: 'none',
        opacity: 0,
      },
      Text: {
        fontFamily: 'Times-Roman',
        fontSize: 14,
      },
      TextSpecial: {
        fontFamily: 'Times-Bold',
        fontSize: 20,
        textTransform: 'uppercase',
      },
      Img: {
        width: 120,
        height: 120,
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: 'center top',
      },
    },
  },
  classic: {
    structure: {
      isShort: false,
      header: { isPresented: true },
      sidebar: { isPresented: false },
      main: {},
    },
    style: {
      Main: { backgroundColor: 'white', flexDirection: 'column', padding: 10, paddingLeft: 30 },

      Header: {
        flexDirection: 'row',
        padding: '10px',
        backgroundColor: 'white',
        borderBottomStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
      },
      HeaderWrapper: {
        justifyContent: 'center',
        marginRight: 20,
        minWidth: '40%',
      },

      Educations: {
        marginBottom: '10px',
        pageBreakInside: 'avoid',
      },
      Education: { marginBottom: 10 },
      EducationTitle: {
        background: 'black',
        color: 'white',
        fontWeight: 700,
        fontSize: '60%',
        display: 'inline-block',
      },
      EducationTime: {},
      EducationPosition: {},

      Experiences: {
        marginBottom: 10,
        minWidth: '100%',
        pageBreakInside: 'avoid',
      },
      Experience: { marginBottom: 10 },
      ExperienceTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },
      ExpirienceTime: {},
      ExpiriencePosition: {},

      Socials: { marginBottom: 10, pageBreakInside: 'avoid' },
      Social: {
        marginBottom: 10,
      },
      SocialTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 20,
        textTransform: 'uppercase',
      },

      Hobbies: { pageBreakInside: 'avoid' },
      Hobbie: {
        flexDirection: 'row',
        marginBottom: 5,
      },
      HobbieBullets: {
        fontFamily: 'Times-Roman',
        fontSize: 14,
        marginRight: 5,
      },

      ContactsWrapeer: {
        justifyContent: 'center',
        marginLeft: 'auto',
      },
      Contact: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 5,
      },
      ContactLink: {
        fontFamily: 'Times-Roman',
        textDecoration: 'none',
        fontSize: 14,
        color: 'black',
      },
      ContactIcon: {
        width: 16,
        height: 16,
        marginRight: 5,
      },

      Title: {
        fontFamily: 'Times-Roman',
        fontStyle: 'bold',
        fontSize: 35,
        textTransform: 'uppercase',
        color: '#00008b',
      },
      Subtitle: {
        fontFamily: 'Times-Bold',
        fontSize: 30,
        textTransform: 'uppercase',
        marginBottom: 5,
        color: '#00008b',
      },
      SubtitleNone: {
        display: 'none',
        opacity: 0,
      },
      Text: {
        fontFamily: 'Times-Bold',
        fontSize: 14,
      },
      TextSpecial: {
        fontFamily: 'Times-Bold',
        fontSize: 20,
        textTransform: 'uppercase',
      },
      Img: {
        width: 120,
        height: 120,
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: 'center top',
      },
    },
  },
  classicCustomized: {
    structure: {
      isShort: false,
      header: { isPresented: true },
      sidebar: { isPresented: false },
      main: {},
    },
    style: {
      Header: {
        height: 200,
        flexDirection: 'row',
        padding: '10px',
        backgroundColor: 'green',
      },
      HeaderWrapper: {
        justifyContent: 'center',
        marginRight: 20,
        minWidth: '40%',
      },

      Main: {
        flexDirection: 'column',
        height: '100%',
        padding: 10,
        paddingLeft: 30,
        backgroundColor: 'grey',
      },

      Educations: {
        marginBottom: '10px',
        pageBreakInside: 'avoid',
      },
      Education: { marginBottom: 10 },
      EducationTitle: {
        background: 'black',
        color: 'white',
        fontWeight: 700,
        fontSize: '60%',
        display: 'inline-block',
      },
      ExpirienceTime: { color: 'black', fontWeight: 700 },
      ExpiriencePosition: {},
      EducationTime: {},
      EducationPosition: {},
      Experiences: {
        marginBottom: 10,
        minWidth: '100%',
        pageBreakInside: 'avoid',
      },
      Experience: { marginBottom: 10 },
      ExperienceTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },

      Socials: { marginBottom: 10, pageBreakInside: 'avoid' },
      Social: {
        marginBottom: 10,
      },
      SocialTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },

      Hobbies: { pageBreakInside: 'avoid' },
      Hobbie: {
        flexDirection: 'row',
        marginBottom: 5,
      },
      HobbieBullets: {
        fontFamily: 'Times-Roman',
        fontSize: 14,
        marginRight: 5,
      },

      ContactsWrapeer: {
        justifyContent: 'center',
        marginLeft: 'auto',
      },
      Contact: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 5,
      },
      ContactLink: {
        fontFamily: 'Times-Roman',
        textDecoration: 'none',
        fontSize: 14,
        color: 'white',
      },
      ContactIcon: {
        width: 16,
        height: 16,
        marginRight: 5,
      },

      Title: {
        fontFamily: 'Times-Bold',
        fontSize: 35,
        textTransform: 'uppercase',
        color: 'white',
      },
      Subtitle: {
        fontFamily: 'Times-Bold',
        fontSize: 16,
        textTransform: 'uppercase',
        marginBottom: 5,
        color: 'white',
      },
      SubtitleNone: {
        display: 'none',
        opacity: 0,
      },
      Text: {
        fontFamily: 'Times-Roman',
        fontSize: 14,
        color: 'white',
      },
      TextSpecial: {
        fontFamily: 'Times-Bold',
        fontSize: 20,
        textTransform: 'uppercase',
      },
      Img: {
        width: 120,
        height: 120,
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: 'center top',
      },
    },
  },
  modern: {
    structure: {
      isShort: false,
      header: { isPresented: false },
      sidebar: { isPresented: true },
      main: {},
    },
    style: {
      Page: { flexDirection: 'row' },
      SidebarPage: {
        flex: 2,
        minWidth: '30%',
        minHeight: '100%',
        maxWidth: '40%',
        wordBreak: 'break-word',
      },
      MainPage: { flex: 3, maxWidth: '60%', wordBreak: 'break-word' },

      Sidebar: {
        minHeight: '100%',
        padding: 10,
        backgroundColor: 'green',
      },
      SidebarWrapper: {
        marginTop: 20,
      },
      SidebarImage: {
        alignSelf: 'center',
      },

      Main: {
        padding: 20,
      },
      ExpirienceTime: { color: 'black', fontWeight: 700 },
      ExpiriencePosition: {},
      EducationTime: {},
      EducationPosition: {},
      Experiences: {
        marginBottom: 10,
        pageBreakInside: 'avoid',
      },
      Experience: { marginBottom: 10 },
      ExperienceTitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },

      Educations: {
        marginBottom: '10px',
        pageBreakInside: 'avoid',
      },
      Education: { marginBottom: 10 },
      EducationTitle: {
        background: 'black',
        color: 'white',
        fontWeight: 700,
        fontSize: '60%',
        display: 'inline-block',
      },

      Socials: { pageBreakInside: 'avoid' },
      Social: {
        marginBottom: 10,
      },
      SocialTitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },
      Hobbies: { pageBreakInside: 'avoid' },
      Hobbie: {
        flexDirection: 'row',
        marginBottom: 5,
      },
      HobbieBullets: {
        fontFamily: 'Helvetica',
        fontSize: 14,
        marginRight: 5,
      },

      Contact: {
        flexDirection: 'row',
        marginBottom: 5,
      },
      ContactLink: {
        fontFamily: 'Helvetica',
        textDecoration: 'none',
        fontSize: 14,
        color: 'black',
      },
      ContactIcon: {
        width: 16,
        height: 16,
        marginRight: 5,
      },

      Title: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 32,
        textTransform: 'uppercase',
      },
      Subtitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 16,
        textTransform: 'uppercase',
        marginBottom: 5,
      },
      Text: {
        fontFamily: 'Helvetica',
        fontSize: 14,
      },
      TextSpecial: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 20,
        textTransform: 'uppercase',
      },
      Img: {
        width: 120,
        height: 120,
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: 'center top',
      },
    },
  },
  modernRigth: {
    structure: {
      isShort: false,
      header: { isPresented: false },
      sidebar: { isPresented: true, isPlaced: 'right' },
      main: {},
    },
    style: {
      Page: { flexDirection: 'row-reverse' },
      MainPage: { flex: 3, maxWidth: '60%', wordBreak: 'break-word' },
      SidebarPage: {
        flex: 2,
        minWidth: '30%',
        minHeight: '100%',
        maxWidth: '40%',
        wordBreak: 'break-word',
      },

      Sidebar: {
        minHeight: '100%',
        padding: 10,
        backgroundColor: 'green',
      },
      SidebarWrapper: {
        marginTop: 20,
      },
      SidebarImage: {
        alignSelf: 'center',
      },

      Main: {
        padding: 20,
      },
      ExpirienceTime: { color: 'black', fontWeight: 700 },
      ExpiriencePosition: {},
      EducationTime: {},
      EducationPosition: {},
      Experiences: {
        marginBottom: 10,
        pageBreakInside: 'avoid',
      },
      Experience: { marginBottom: 10 },
      ExperienceTitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },
      Educations: {
        marginBottom: '10px',
        pageBreakInside: 'avoid',
      },
      Education: { marginBottom: 10 },
      EducationTitle: {
        background: 'black',
        color: 'white',
        fontWeight: 700,
        fontSize: '60%',
        display: 'inline-block',
      },
      Socials: { pageBreakInside: 'avoid' },
      Social: {
        marginBottom: 10,
      },
      SocialTitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },
      Hobbies: { pageBreakInside: 'avoid' },
      Hobbie: {
        flexDirection: 'row',
        marginBottom: 5,
      },
      HobbieBullets: {
        fontFamily: 'Helvetica',
        fontSize: 14,
        marginRight: 5,
      },

      Contact: {
        flexDirection: 'row',
        marginBottom: 5,
      },
      ContactLink: {
        fontFamily: 'Helvetica',
        textDecoration: 'none',
        fontSize: 14,
        color: 'black',
      },
      ContactIcon: {
        width: 16,
        height: 16,
        marginRight: 5,
      },

      Title: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 32,
        textTransform: 'uppercase',
      },
      Subtitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 16,
        textTransform: 'uppercase',
        marginBottom: 5,
      },
      Text: {
        fontFamily: 'Helvetica',
        fontSize: 14,
      },
      TextSpecial: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 20,
        textTransform: 'uppercase',
      },
      Img: {
        width: 120,
        height: 120,
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: 'center top',
      },
    },
  },
  chrono: {
    structure: {
      isShort: false,
      header: { isPresented: true },
      sidebar: { isPresented: false },
      main: {},
    },
    style: {
      MainPage: {
        name: 'chrono',
        backgroundColor: 'white',
        fontFamily: 'OpenSans',
      },
      Main: {
        type: 'chrono',
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%',
        maxHeight: '500px',
        maxWidth: '800px',
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: '2%',
      },
      Header: {
        name: 'chrono',
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        color: 'black',
        padding: '1%',
      },
      HeaderWrapper: {
        justifyContent: 'center',
        width: '100%',
      },

      Experiences: { marginBottom: 20, pageBreakInside: 'avoid' },
      Experience: { fontSize: 14, name: 'chrono' },
      ExperienceTime: { fontSize: 14, marginRight: '80px', textWrap: 'nowrap' },
      ExperienceTitle: { fontSize: 14, color: '#3e94e4' },
      ExperiencePosition: { fontSize: 14 },
      ExperienceDescription: {fontSize: 14, width: 500},
      EducationTime: { fontSize: 14, marginRight: '80px', textWrap: 'nowrap' },
      EducationPosition: { fontSize: 14 },
      Educations: { marginBottom: 10, pageBreakInside: 'avoid' },
      Education: { fontSize: 7, name: 'chrono' },
      EducationTitle: { fontSize: 14, color: '#3e94e4' },

      Socials: { marginBottom: 10, pageBreakInside: 'avoid', display: 'flex' },
      Social: { marginLeft: '110px', marginBottom: '10px' },
      SocialTitle: {
        fontFamily: 'OpenSans',
        fontSize: 18,
        color: '#3e94e4'
      },

      Hobbies: { marginBottom: 10, pageBreakInside: 'avoid', display: 'flex' },
      Hobbie: {
        name: 'chrono',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '80px',
        width: '190px'
      },
      HobbieBullets: {
        fontFamily: 'OpenSans',
        fontSize: '16px',
      },

      ContactWrapper: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 5,
        marginBottom: 10,
        pageBreakInside: 'avoid',
      },
      Contact: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        color: 'black',
      },
      ContactLink: {
        fontFamily: 'OpenSans',
        textDecoration: 'none',
        fontSize: 14,
      },
      ContactIcon: {
        width: 10,
        height: 10,
        marginRight: 5,
      },
      SubtitleWrapper: {
        marginBottom: 10,
        pageBreakInside: 'avoid',
      },
      Title: {
        fontFamily: 'OpenSans',
        fontSize: 30,
        fontWeight: 700,
        color: '#3e94e4',
      },
      Subtitle: {
        name: 'chrono',
        fontFamily: 'OpenSans',
        fontSize: 18,
        fontWeight: 700,
        color: '#3e94e4',
      },
      SubtitleNone: {
        display: 'none',
        opacity: 0,
      },
      Text: {
        fontFamily: 'OpenSans',
        fontSize: 18,
      },
      TextSpecial: {
        fontFamily: 'OpenSans',
        fontSize: 10,
        textTransform: 'uppercase',
        marginBottom: 15,
      },
      Img: {
        marginRight: 10,
        width: 60,
        height: 60,
        borderRadius: '50%',
      },
    },
  },
  metro: {
    structure: {
      isShort: false,
      header: { isPresented: true },
      sidebar: { isPresented: false },
      main: {},
    },
    style: {
      MainPage: {
        name: 'metro',
        backgroundColor: 'white',
        fontFamily: 'Noto Sans',
        padding: '10px',
      },
      Main: {
        type: 'metro',
        display: 'flex',
        flexWrap: 'wrap',
        height: '100%',
        maxHeight: '900px',
        maxWidth: '800px',
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: '0% 1% 1% 1%',
      },
      Header: {
        name: 'metro',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        color: 'black',
        padding: '0% 1% 1% 1%',
      },
      HeaderWrapper: {
        justifyContent: 'center',
        width: '100%',
      },

      Experiences: { marginBottom: 20, pageBreakInside: 'avoid' },
      Experience: { fontSize: 14, name: 'metro' },
      ExperienceTime: { fontSize: 14, fontFamily: 'Noto Sans', textWrap: 'nowrap' },
      ExperienceTitle: { fontSize: 14, fontFamily: 'Noto Sans', color: '#888888' },
      ExperiencePosition: { fontSize: 14, fontFamily: 'Noto Sans', fontWeight: 'bold' },
      ExperienceDescription: {fontSize: 14, width: 500},
      EducationTime: { fontSize: 14, fontFamily: 'Noto Sans', textWrap: 'nowrap' },
      EducationPosition: { fontSize: 14, fontFamily: 'Noto Sans', fontWeight: 'bold' },
      Educations: { marginBottom: 10, pageBreakInside: 'avoid' },
      Education: { fontSize: 7, name: 'metro' },
      EducationTitle: { fontSize: 14, fontFamily: 'Noto Sans', color: '#888888' },

      Socials: { marginBottom: 10, pageBreakInside: 'avoid' },
      Social: {
        name: 'metro',
        marginBottom: '10px'
      },
      SocialTitle: {
        fontFamily: 'Noto Sans',
        fontSize: 14,
        color: '#888888'
      },
      SocialText: {
        fontSize: 14,
        fontFamily: 'Noto Sans',
        fontWeight: 'bold',
      },

      Hobbies: { marginBottom: 10, pageBreakInside: 'avoid', display: 'flex' },
      Hobbie: {
        name: 'metro',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '50px',
        width: '190px',
        height: '27px',
      },
      HobbieBullets: {
        fontFamily: 'Noto Sans',
        fontSize: '16px',
      },

      ContactWrapper: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 5,
        marginBottom: 10,
        marginTop: 15,
        pageBreakInside: 'avoid',
      },
      Contact: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: 'Noto Sans',
        fontSize: 10,
        marginRight: 10,
        color: 'black',
      },
      ContactLink: {
        fontFamily: 'Noto Sans',
        textDecoration: 'none',
        fontSize: 14,
      },
      ContactIcon: {
        width: 10,
        height: 10,
        marginRight: 5,
      },
      SubtitleWrapper: {
        marginBottom: 10,
        pageBreakInside: 'avoid',
      },
      Title: {
        fontFamily: 'Noto Sans',
        fontSize: 35,
        fontWeight: 700,
        textTransform: 'uppercase',
        color: '#232961',
      },
      Subtitle: {
        name: 'metro',
        fontFamily: 'Noto Sans',
        display: 'inline-block',
        fontSize: 18,
        fontWeight: 700,
        textTransform: 'uppercase',
        color: '#ffffff',
        backgroundColor: '#232961',
        padding: '0px 8px',
        marginBottom: '10px',
        height: '27px',
      },
      SubtitleNone: {
        display: 'none',
        opacity: 0,
      },
      Text: {
        fontFamily: 'Noto Sans',
        fontSize: 14,
      },
      TextSpecial: {
        fontFamily: 'Noto Sans',
        fontSize: 10,
        textTransform: 'uppercase',
        marginBottom: 15,
      },
      Img: {
        marginBottom: 10,
        width: 60,
        height: 60,
      },
    },
  },
};
