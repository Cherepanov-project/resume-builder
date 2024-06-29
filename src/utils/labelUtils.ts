import { nanoid } from 'nanoid'

export const getLabel = (blockValue: string, url: string, title: string, description: string, text: string, imgUrl: string, buttonText: string, accordion: unknown) => {
  switch (blockValue) {
    default:
      return {
        value: '',
        label: '',
        url: '',
        title: {
          key: '',
          text: '',
          wrapperStyle: { display: 'block' },
          textStyle: { display: 'block' },
        },
      };
    case 'Avatars':
      return {
        label: 'Images',
        value: 'Avatars',
        key: 'avatar',
        layout: { i: '', x: 0, y: 0, w: 1, h: 7 },
        url: url,
        props: {
          Avatars: [],
        },
        title: {
          key: 'avatar',
          text: '',
          wrapperStyle: { textAlign: 'center' },
          textStyle: { border: 'none', height: '100%', width: '100%' },
        },
      };
    case 'Accordion':
      return {
        label: 'Accordion',
        value: 'accordion',
        key: 'accordion',
        layout: { i: nanoid(), x: 0, y: 0, w: 2, h: 1 },
        title: {
          key: 'accordion',
          accordion: accordion,
          wrapperStyle: { textAlign: 'center', width: '100%', height: '100%' },
          textStyle: { fontSize: '16px', margin: '0px', width: '100%' },
          // inputStyle: { width: '100%', border: 'none' },
        },
      };
    case 'CardItem':
      return {
        label: 'CardItem',
        value: 'cardItem',
        key: 'cardItem',
        layout: { i: '', x: 0, y: 0, w: 1, h: 8 },
        title: {
          key: 'cardItem',
          title: title,
          description: description,
          text: text,
          url: url,
          imgUrl: imgUrl,
          buttonText: buttonText,
          wrapperStyle: { textAlign: 'center', width: '100%', height: '100%' },
          textStyle: { fontSize: '16px', margin: '0px', width: '100%' },
          // inputStyle: { width: '100%', border: 'none' },
        },
      };
    case 'Title':
      return {
        label: 'Title',
        value: 'Title',
        key: 'title',
        layout: { i: '', x: 0, y: 0, w: 1, h: 3 },
        title: {
          key: 'title',
          text: text,
          wrapperStyle: { lineHeight: '20' },
          textStyle: { textAlign: 'center', fontSize: '18px' },
          // inputStyle: { width: '100%', border: 'none', fontWeight: 'bold' },
        },
      };
    case 'Paragraph':
      return {
        label: 'Block Paragraph',
        value: 'Paragraph',
        key: 'paragraph',
        layout: { i: '', x: 0, y: 0, w: 2, h: 6 },
        title: {
          key: 'paragraph',
          text: text,
          wrapperStyle: { textAlign: 'center' },
          textStyle: { fontSize: '16px', margin: '0px' },
          // inputStyle: { width: '100%', border: 'none' },
        },
      };
    case 'Image':
      return {
        label: 'Images',
        value: 'Image',
        key: 'image',
        layout: { i: '', x: 0, y: 0, w: 1, h: 6 },
        props: {
          url: '',
        },
        title: {
          key: 'image',
          text: text,
          wrapperStyle: { textAlign: 'center' },
          textStyle: { border: 'none', height: '100%', width: '100%' },
        },
      };
    case 'ButtonBlock':
      return {
        label: 'Interactive',
        value: 'ButtonBlock',
        key: 'button',
        layout: { i: '', x: 0, y: 0, w: 1, h: 2 },
        title: {
          key: 'button',
          text: text,
          wrapperStyle: {
            textAlign: 'center',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          },
          textStyle: {
            fontSize: '16px',
            margin: '0px',
            width: '100%',
            height: '100%',
            backgroundColor: 'green',
          },
          // inputStyle: { width: '100%', border: 'none' },
        },
      };
    case 'Anchor':
      return {
        label: 'Navigation',
        value: 'Anchor',
        key: 'anchor',
        layout: { i: '', x: 0, y: 0, w: 1, h: 1 },
        title: {
          key: 'anchor',
          text: text,
          url: url,
          wrapperStyle: { textAlign: 'center', width: '100%', height: '100%' },
          textStyle: { fontSize: '16px', margin: '0px', width: '100%' },
          // inputStyle: { width: '100%', border: 'none' },
        },
      };
    case 'Logo':
      return {
        label: 'Logo',
        value: 'Logo',
        key: 'logo',
        layout: { i: '', x: 0, y: 0, w: 1, h: 5 },
        title: {
          key: 'logo',
          text: text,
          url: url,
          imgUrl: imgUrl,
          wrapperStyle: { textAlign: 'center', width: '100%', height: '100%' },
          textStyle: { fontSize: '16px', margin: '0px', width: '100%' },
          // inputStyle: { width: '100%', border: 'none' },
        },
      };
    case 'SocialMediaIcon':
      return {
        label: 'SocialMediaIcon',
        value: 'SocialMediaIcon',
        key: 'smIcon',
        layout: { i: '', x: 0, y: 0, w: 1, h: 3 },
        title: {
          key: 'smIcon',
          title: title,
          text: text,
          url: url,
          imgUrl: imgUrl,
          wrapperStyle: { textAlign: 'center', width: '100%', height: '100%' },
          textStyle: { fontSize: '16px', margin: '0px', width: '100%' },
          // inputStyle: { width: '100%', border: 'none' },
        },
      };
    case 'RatingSystem':
      return {
        label: 'Interactive',
        value: 'RatingSystem',
        key: 'rating',
        columns: 2,
        layout: { i: '', x: 0, y: 0, w: 1, h: 1 },
        children: [],
        title: {
          key: 'rating',
          value: '0',
          text: false,
        },
      };
    case 'Tooltip':
      return {
        label: 'Interactive',
        value: 'Tooltip',
        key: 'tooltip',
        layout: { i: '', x: 0, y: 0, w: 1, h: 2 },
        children: [],
        title: {
          key: 'tooltip',
          value: '0',
          text: false,
        },
      };
    case 'Checkboxes':
      return {
        label: 'CheckBoxes',
        value: 'Checkboxes',
        key: 'checkbox',
        layout: { i: '', x: 0, y: 0, w: 1, h: 3 },
        children: [],
        title: {
          key: 'checkbox',
          value: '0',
          text: false,
        },
        props: {
          Checkboxes: [],
        },
      };
      case 'CheckboxGroup':
      return {
        label: 'CheckboxGroup',
        value: 'Checkboxes',
        key: 'Checkboxes',
        layout: { i: '', x: 0, y: 0, w: 1, h: 6 },
        children: [],
        title: {
          key: 'Checkboxes',
          value: '0',
          text: false,
        },
        props: {
          Checkboxes: [],
        },
      };
      case 'SelectList':
      return {
        label: 'SelectList',
        value: 'SelectList',
        key: 'SelectList',
        layout: { i: '', x: 0, y: 0, w: 2, h: 1 },
        children: [],
        title: {
          key: 'SelectList',
          value: '0',
          text: false,
        },
        props: {
          list: [],
        },
      };
    case 'RadioButtons':
      return {
        label: 'CheckBoxes',
        value: 'RadioButtons',
        key: 'radiobox',
        layout: { i: '', x: 0, y: 0, w: 1, h: 3 },
        children: [],
        title: {
          key: 'radiobox',
          value: '0',
          text: false,
        },
        props: {
          RadioButtons: [],
        },
      };
    case 'MultiToggle':
      return {
        label: 'CheckBoxes',
        value: 'MultiToggle',
        key: 'toggleButtons',
        layout: { i: '', x: 0, y: 0, w: 2, h: 3 },
        children: [],
        title: {
          key: 'toggleButtons',
          value: '0',
          text: false,
        },
      };
    case 'HeaderTitle':
      return {
        label: 'Text Blocks',
        value: 'HeaderTitle',
        key: 'HeaderTitle',
        layout: { i: '', x: 0, y: 0, w: 1, h: 1 },
        children: [],
        title: {
          key: 'HeaderTitle',
          value: '0',
          text: false,
        },
      };
    case 'Gallery':
      return {
        label: 'Images',
        value: 'Gallery',
        key: 'gallery',
        layout: { i: '', x: 0, y: 0, w: 2, h: 13 },
        children: [],
        url: url,
        title: {
          key: 'gallery',
          value: '0',
          text: '',
        },
        props: {
          Gallery: [],
        },
      };
    case 'VideoPlayer':
      return {
        label: 'Media',
        value: 'VideoPlayer',
        key: 'video',
        layout: { i: '', x: 0, y: 0, w: 3, h: 10 },
        children: [],
        title: {
          key: 'video',
          value: '0',
          text: false,
        },
        props: {
          url: '',
          text: '',
        }
      };
    case 'DropdownList':
      return {
        label: 'DropdownList',
        value: 'DropdownList',
        key: 'selectlist',
        layout: { i: '', x: 0, y: 0, w: 2, h: 2 },
        children: [],
        title: {
          key: 'selectlist',
          value: '0',
          text: false,
        },
        props: {
          DropdownList: [],
        },
      };
    case 'ModalWindow':
      return {
        label: 'Interactive',
        value: 'ModalWindow',
        key: 'modal',
        layout: { i: '', x: 0, y: 0, w: 1.5, h: 3 },
        children: [],
        title: {
          key: 'modal',
          value: '0',
          text: false,
        },
        props: {
          text: ['Click here to open modal', 'Here is your modal title', 'Wow! You opened modal.'],
          wrapperStyle: { height: 'calc(100% - 38px)' },
          textStyle: { width: '100%', height: '100%', border: 'none' },
          style: { backgroundColor: '', color: '', border: '', text: '' },
        }
      };
    case 'Slider':
      return {
        label: 'Media Elements',
        value: 'Slider',
        key: 'slider',
        children: [],
        title: {
          key: 'slider',
          value: '0',
          text: false,
        },
        props: {
          text: '',
          Slider: [],
          wrapperStyle: { height: '100%' },
          textStyle: { width: '100%', height: '100%', border: 'none' },
          style: { backgroundColor: '', color: '', border: '', text: '' },
        },
        layout: { i: '', x: 0, y: 0, w: 3, h: 15 },
      };
  }
};