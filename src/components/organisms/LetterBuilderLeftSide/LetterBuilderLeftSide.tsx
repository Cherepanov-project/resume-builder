import Box from '@mui/material/Box';
import LetterCard from '@/components/atoms/LetterCard';
import FullWidthTabs from '@/components/molecules/FullWidthTabs';
import { TabIconStrings, TabIconSettings, TabIconContent } from '@/components/atoms/Icons/TabIcons';

const TabList = [
  {
    id: 0,
    label: 'Содержимое',
    icon: TabIconContent,
  },
  {
    id: 1,
    label: 'Строки',
    icon: TabIconStrings,
  },
  {
    id: 2,
    label: 'Настройки',
    icon: TabIconSettings,
  }
]

const LetterCardList = [
  {
    text: 'ЗАГОЛОВОК',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 30 26"><path fill="#515659" d="m10.849 4.217-.051-.223a3.547 3.547 0 0 0-.288-.746c-.15-.307-.3-.58-.466-.851a5.165 5.165 0 0 0-.563-.707c-.197-.185-.35-.266-.477-.29a23.179 23.179 0 0 0-.703-.051 12.724 12.724 0 0 0-.793-.017H7.26v10.445c0 .184.03.313.09.405l.01.015.008.016c.047.096.14.182.321.275.019.01.075.03.194.058.112.027.257.057.438.092.375.073.618.118.773.118h.286V14H2.603v-1.216l.257-.027.287-.025c.146-.012.32-.027.507-.045.347-.034.558-.082.663-.121.165-.072.25-.145.315-.243.058-.089.091-.214.091-.458V1.315h-.249c-.19 0-.422 0-.688.016-.275.018-.55.035-.806.053-.102.01-.245.086-.46.289a5.287 5.287 0 0 0-1.024 1.563c-.138.316-.233.56-.278.745l-.053.219H0V0h12v4.217h-1.152ZM16 0h14v2H16zM16 6h14v2H16zM16 12h14v2H16zM0 18h30v2H0zM0 24h30v2H0z"></path></svg>,
    id: 0,
  },
  {
    text: 'Параграф',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 35 31"><path fill="#515659" d="M34.4 21.333H.6a.6.6 0 0 0-.6.6v1.134a.6.6 0 0 0 .6.6h33.8a.6.6 0 0 0 .6-.6v-1.134a.6.6 0 0 0-.6-.6ZM34.4 28.333H.6a.6.6 0 0 0-.6.6v1.134a.6.6 0 0 0 .6.6h33.8a.6.6 0 0 0 .6-.6v-1.134a.6.6 0 0 0-.6-.6ZM15.733.333H.6a.6.6 0 0 0-.6.6v1.134a.6.6 0 0 0 .6.6h15.133a.6.6 0 0 0 .6-.6V.933a.6.6 0 0 0-.6-.6ZM15.733 7.333H.6a.6.6 0 0 0-.6.6v1.134a.6.6 0 0 0 .6.6h15.133a.6.6 0 0 0 .6-.6V7.933a.6.6 0 0 0-.6-.6ZM19.733 14.333H.6a.6.6 0 0 0-.6.6v1.134a.6.6 0 0 0 .6.6h19.133a.6.6 0 0 0 .6-.6v-1.134a.6.6 0 0 0-.6-.6Z"></path><path fill="#000" fill-rule="evenodd" d="M33.56 2.858V16.13a.488.488 0 0 1-.476.498H31.66a.489.489 0 0 1-.475-.498V2.858H28.56v13.271a.488.488 0 0 1-.475.498h-1.422a.489.489 0 0 1-.476-.498v-4.871l-.05-1C23.3 10.258 21 8.31 21 5.288c0-3.502 2.654-4.96 5.678-4.96h7.847c.26 0 .475.228.475.507v1.518c0 .278-.214.506-.475.506h-.966v-.001Z" clip-rule="evenodd"></path></svg>,
    id: 1,
  },
  {
    text: 'Список',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" aria-hidden="true" data-icon="list" data-prefix="far" viewBox="0 0 512 512"><path fill="#515659" d="M80 48H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416-136H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16z"></path></svg>,
    id: 2,
  },
  {
    text: 'Картинки',
    icon: <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 28 28" width="36" height="36"><path fill="#515659" d="M0 0v28h28V0Zm26 2v7.24l-10.86 8.67-5.79-3L2 20.34V2ZM2 26v-4.42l7.45-5.5 5.81 3L26 10.52V26Zm7.8-13.9A3.8 3.8 0 1 0 6 8.3a3.8 3.8 0 0 0 3.8 3.8Zm0-6.6a2.8 2.8 0 1 1 0 5.6A2.73 2.73 0 0 1 7 8.3a2.93 2.93 0 0 1 2.8-2.8Z"></path></svg>,
    id: 3,
  },
  {
    text: 'Кнопка',
    icon: <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 51 30" width="36" height="36"><path fill="#515659" d="m46.6 29.2 1.3-.7-2.1-4h3.6L40 15.1v13.3l2.7-2.7 2.3 4.4 1.6-.9ZM39 12.69l1.71 1.71 6.51 6.51h1A2.83 2.83 0 0 0 51 18.07V2.83A2.83 2.83 0 0 0 48.17 0H2.83A2.83 2.83 0 0 0 0 2.83v15.24a2.83 2.83 0 0 0 2.83 2.83H39v-8.21ZM8.33 9.22h34.34v2.45H8.33Z"></path></svg>,
    id: 4,
  },
  {
    text: 'Table',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 35 31"><path fill="#515659" d="M2.188 10.938v7.656h14.218v-7.657H2.188Zm16.406 0v7.656h14.218v-7.657H18.595Zm-2.188 9.843H2.188v7.657h14.218V20.78Zm2.188 7.657h14.218V20.78H18.595v7.657ZM0 0h35v30.625H0V0Z"></path></svg>,
    id: 5,
  }
]

const LetterBuilderLeftSide = () => {
  const LetterCardElementArray = LetterCardList.map((item) => {
    return (
      <LetterCard 
        key={item.id}
        text={item.text} 
        icon={item.icon}
      />
    )
  })
  
  return (
    <Box sx={{ width: '500px', height: '100%' }}>
      <FullWidthTabs 
        TabList={TabList}
        ViewChild={LetterCardElementArray}
      />
    </Box>
  )
}

export default LetterBuilderLeftSide