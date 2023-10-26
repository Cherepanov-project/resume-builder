export type StyleType = { [key: string]: string | number };

export type StylesNameKeys =
  | 'default'
  | 'defaultCustomized'
  | 'classic'
  | 'classicCustomized'
  | 'modern'
  | 'modernRigth';

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
  classic: {
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
        // backgroundColor: 'green',
        borderBottomStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
      },
      HeaderWrapper: {
        justifyContent: 'center',
        marginRight: 20,
      },

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

      Title: {
        fontFamily: 'Times-Bold',
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

      Experiences: {
        marginBottom: 10,
      },
      Experience: { marginBottom: 10 },
      ExperienceTitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
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

      Experiences: {
        marginBottom: 10,
      },
      Experience: { marginBottom: 10 },
      ExperienceTitle: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
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
