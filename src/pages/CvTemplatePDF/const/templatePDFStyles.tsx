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
  | 'oslo';

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

      Experiences: { marginBottom: 20 },
      Experience: { fontSize: 14 },
      ExperienceTime: { fontSize: 14 },
      ExperienceTitle: { fontSize: 14 },
      ExperiencePosition: { fontSize: 14 },
      EducationTime: { fontSize: 14 },
      EducationPosition: { fontSize: 14 },
      Educations: { marginBottom: 10 },
      Education: { fontSize: 7 },
      EducationTitle: { fontSize: 14 },

      Socials: { marginBottom: 10 },
      Social: {},
      SocialTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },

      Hobbies: {},
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
      },
      Contact: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 5,
      },
      ContactLink: {
        fontFamily: 'Times-Roman',
        textDecoration: 'none',
        fontSize: 14,
      },
      ContactIcon: {
        width: 0,
        height: 0,
      },
      SubtitleWrapper: {
        marginBottom: 10,
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
      SidebarPage: { flex: 2, minHeight: '100%' },
      MainPage: { backgroundColor: '#ffffff', color: 'black', flex: 3 },

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

      Experiences: {},
      Experience: { marginBottom: 15 },
      ExperienceTitle: { color: 'black', fontWeight: 700, fontSize: 20 },
      ExperienceTime: { fontSize: 20 },
      ExperiencePosition: { fontSize: 20 },

      Educations: {},
      Education: { marginBottom: 10 },
      EducationTitle: {
        color: 'black',
        fontWeight: 700,
        fontSize: 20,
      },
      EducationTime: { fontSize: 20 },
      EducationPosition: { fontSize: 20 },

      Socials: {
        marginBottom: 10,
      },
      Social: {},
      SocialTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 14,
        color: 'white',
        textTransform: 'uppercase',
      },

      Hobbies: {},
      Hobbie: {
        flexDirection: 'row',
      },
      HobbieBullets: {
        fontFamily: 'Times-Roman',
        fontSize: 14,
        marginRight: 5,
      },

      ContactWrapper: { marginTop: 80 },
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
        fontFamily: 'Times-Bold',
        fontWeight: 700,
        fontSize: 24,
      },
      SubtitleWrapper: {
        marginBottom: '10px',
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
      },

      Experiences: {},
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
      },
      Social: {},
      SocialTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 20,
        textTransform: 'uppercase',
      },

      Hobbies: {
        marginLeft: 'auto',
        background: '#eeeeee',
        borderRadius: '20px',
        padding: '2%',
        paddingLeft: '3%',
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
      SidebarPage: { flex: 2 },
      MainPage: { flex: 3 },
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
      },
      Experience: { marginBottom: 10 },
      ExperienceTitle: {
        fontFamily: 'Courier-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },
      Socials: {},
      Social: {
        marginBottom: 10,
      },
      SocialTitle: {
        fontFamily: 'Courier-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },
      Hobbies: {},
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
      SidebarPage: { flex: 2 },
      MainPage: { flex: 3 },

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
      Socials: {},
      Social: {
        marginBottom: 10,
      },
      SocialTitle: {
        fontFamily: 'Courier-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },

      Hobbies: {},
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
      },
      ExpirienceTime: { color: 'black', fontWeight: 700 },
      ExpiriencePosition: {},
      EducationTime: {},
      EducationPosition: {},
      Experiences: {
        marginBottom: 10,
        minWidth: '100%',
      },
      Experience: { marginBottom: 10 },
      ExperienceTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },

      Socials: { marginBottom: 10 },
      Social: {
        marginBottom: 10,
      },
      SocialTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },

      Hobbies: {},
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
      },

      Educations: {
        marginBottom: '10px',
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
      },
      Experience: { marginBottom: 10 },
      ExperienceTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },
      ExpirienceTime: {},
      ExpiriencePosition: {},

      Socials: { marginBottom: 10 },
      Social: {
        marginBottom: 10,
      },
      SocialTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 20,
        textTransform: 'uppercase',
      },

      Hobbies: {},
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
      },
      Experience: { marginBottom: 10 },
      ExperienceTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },

      Socials: { marginBottom: 10 },
      Social: {
        marginBottom: 10,
      },
      SocialTitle: {
        fontFamily: 'Times-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },

      Hobbies: {},
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
      SidebarPage: { flex: 2, minHeight: '100%' },
      MainPage: { flex: 3 },

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
      },
      Experience: { marginBottom: 10 },
      ExperienceTitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },

      Educations: {
        marginBottom: '10px',
      },
      Education: { marginBottom: 10 },
      EducationTitle: {
        background: 'black',
        color: 'white',
        fontWeight: 700,
        fontSize: '60%',
        display: 'inline-block',
      },

      Socials: {},
      Social: {
        marginBottom: 10,
      },
      SocialTitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },
      Hobbies: {},
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
      MainPage: { flex: 3 },
      SidebarPage: { flex: 2, minHeight: '100%' },

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
      },
      Experience: { marginBottom: 10 },
      ExperienceTitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },
      Educations: {
        marginBottom: '10px',
      },
      Education: { marginBottom: 10 },
      EducationTitle: {
        background: 'black',
        color: 'white',
        fontWeight: 700,
        fontSize: '60%',
        display: 'inline-block',
      },
      Socials: {},
      Social: {
        marginBottom: 10,
      },
      SocialTitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
      },
      Hobbies: {},
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
};
