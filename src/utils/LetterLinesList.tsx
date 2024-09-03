import { IconLinesFirst, IconLinesSecond, IconLinesThird , IconLinesFourth, IconLinesFive, IconLinesSix, IconLinesSeven, IconLinesEight, IconLinesNine, IconLinesTen, IconLinesEleven, IconLinesTwelve } from '@/components/atoms/Icons/LetterCardIcons';

const LetterLinesList = [
    {
      name: 'BlockLine',
      icon: <IconLinesFirst color="#515659" scale={1}/>,
      blockWidth: ['100%'],
      id: 0,
      children: [[]],
    },
    {
      name: 'BlockLine',
      icon: <IconLinesSecond color="#515659" scale={1}/>,
      blockWidth: ['calc(25% - 8px)', 'calc(75% - 8px)'],
      id: 1,
      children: [[], []],
    },
    {
      name: 'BlockLine',
      icon: <IconLinesThird color="#515659" scale={1}/>,
      blockWidth: ['calc(33% - 8px)', 'calc(67% - 8px)'],
      id: 2,
      children: [[], []],
    },
    {
      name: 'BlockLine',
      icon: <IconLinesFourth color="#515659" scale={1}/>,
      blockWidth: ['calc(50% - 8px)', 'calc(50% - 8px)'],
      id: 3,
      children: [[], []],
    },
    {
      name: 'BlockLine',
      icon: <IconLinesFive color="#515659" scale={1}/>,
      blockWidth: ['calc(67% - 8px)', 'calc(33% - 8px)'],
      id: 4,
      children: [[], []],
    },
    {
      name: 'BlockLine',
      icon: <IconLinesSix color="#515659" scale={1}/>,
      blockWidth: ['calc(75% - 8px)', 'calc(25% - 8px)'],
      id: 5,
      children: [[], []],
    },
    {
      name: 'BlockLine',
      icon: <IconLinesSeven color="#515659" scale={1}/>,
      blockWidth: ['calc(33.4% - 8px)', 'calc(33.4% - 8px)', 'calc(33.4% - 8px)'],
      id: 6,
      children: [[], [], []],
    },
    {
      name: 'BlockLine',
      icon: <IconLinesEight color="#515659" scale={1}/>,
      blockWidth: ['calc(25% - 8px)', 'calc(25% - 8px)', 'calc(50% - 8px)'],
      id: 7,
      children: [[], [], []],
    },
    {
      name: 'BlockLine',
      icon: <IconLinesNine color="#515659" scale={1}/>,
      blockWidth: ['calc(25% - 8px)', 'calc(50% - 8px)', 'calc(25% - 8px)'],
      id: 8,
      children: [[], [], []],
    },
    {
      name: 'BlockLine',
      icon: <IconLinesTen color="#515659" scale={1}/>,
      blockWidth: ['calc(50% - 8px)', 'calc(25% - 8px)', 'calc(25% - 8px)'],
      id: 9,
      children: [[], [], []],
    },
    {
      name: 'BlockLine',
      icon: <IconLinesEleven color="#515659" scale={1}/>,
      blockWidth: ['calc(25% - 8px)', 'calc(25% - 8px)', 'calc(25% - 8px)', 'calc(25% - 8px)'],
      id: 10,
      children: [[], [], [], []],
    },
    {
      name: 'BlockLine',
      icon: <IconLinesTwelve color="#515659" scale={1}/>,
      blockWidth: [
        'calc(16.666% - 8px)', 
        'calc(16.666% - 8px)', 
        'calc(16.666% - 8px)', 
        'calc(16.666% - 8px)', 
        'calc(16.666% - 8px)', 
        'calc(16.666% - 8px)',
      ],
      id: 11,
      children: [[], [], [], [], [], []],
    }
  ]

  export default LetterLinesList
  
  