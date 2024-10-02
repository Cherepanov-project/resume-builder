import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import * as componentMap from '../../../letter-builder/atoms/LineBlocksContent'
import ReactDOMServer from 'react-dom/server';

const {  Button,  Carousel,  Divider,  Gifs,  Header,  Html,  Icons,  Images,    List,
    Menu,  Paragraph,  SocialNetworks,  Spacer,  Stickers,  Table,  Text,  Timer,  Video} = componentMap;

const EmailPage = () => {
  // Количество колонок
  const numberOfColumns = 6;
  const elements = useSelector((state: RootState) => state.letterLayout.gridContainers[0].elements.activeElements);
  const [sending, setSending] = useState(false);

  // Функция для извлечения процентного значения из строки `calc`
  const extractPercent = (calcValue: string): number => {
    const match = calcValue.match(/calc\(([\d.]+)%\s*-\s*\d+px\)/);
    if (calcValue === '100%') {
      return 100;
    }
    if (match) {
      return parseFloat(match[1]);
    }
    return 100 / numberOfColumns; // Возвращаем стандартное значение, если не удалось распарсить
  };






  // Функция для рендеринга строк таблицы для каждого элемента
  const renderTableRows = () => {
  
    if (!elements || elements.length === 0) {
      return (
        <tr>
          <td colSpan={numberOfColumns} style={{ textAlign: 'center' }}>No elements to display</td>
        </tr>
      );
    }

    return elements.map((element: any, index: number) => {
      const blockWidths = element.props?.blockWidth || Array(numberOfColumns).fill('auto');
     
      return (
        <tr key={index}>
          {blockWidths.map((blockWidth: string, i: number) => {
            const colspan = extractPercent(blockWidth) + '%';
            const blockWidthPercent = extractPercent(blockWidth) + '%';
             const elementInCell = element.children[i]?.children[0]?.name || 'No Content'; // 
             console.log(elementInCell);
            return (
              <td
                key={i}
                colSpan={colspan as any}
                style={{
                  width: blockWidthPercent,
                  border: '1px solid transparent',
                  height: '50px',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                  justifyContent: 'center'
                }}
              >
                <div style={{width: 'auto', display:'flex' ,justifyContent: 'center',  alignItems: 'center'  }}>
                {Object.keys(componentMap).includes(elementInCell) ? (
                    React.createElement(componentMap[elementInCell])
               ) : (
    <div style={{ width: 'auto', display:'flex', justifyContent: 'center',  alignItems: 'center'  }}>{elementInCell}</div>
  )}
                </div>
              </td>
            );
          })}
        </tr>
      );
    });
  };


  // Функция для генерации HTML-кода таблицы
const generateTableHTML = () => {
  const tableRows = renderTableRows();
  const tableHTML = ReactDOMServer.renderToString(
    <div style={{ padding: '0 30% 0 30%', backgroundColor: '#f5f5f5', borderCollapse: 'collapse' }}>
      <table style={{ borderSpacing: '10px', width: '100%', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
  return tableHTML;
};
  
  // Функция для отправки email
  const sendEmail = () => {
    setSending(true);
    const htmlContent = generateTableHTML();
  
    emailjs.send('service_81eymbl', 'template_2kah0mf', { html: htmlContent }, '2Ko21r-djdrh3TOX4')
      .then(response => {
        console.log('Success:', response);
        setSending(false);
        alert('Email sent successfully!');
      }, error => {
        console.error('Error:', error);
        setSending(false);
        alert('Failed to send email.');
      });
  };

  return (
    <div style={{ width: '40%', height: '100vh' , position: 'relative',  margin: '0 30% 0 30%'}}>
      <h1>Email Content</h1>
      <table style={{ borderCollapse: 'separate', borderSpacing: '10px', width: '100%', border: '1px solid red' }}>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
   {/* {ReactDOMServer.renderToString(<Carousel/>)} */}
     <button
        onClick={sendEmail}
        disabled={sending}
        style={{  marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        {sending ? 'Sending...' : 'Send Email'}
      </button>
    </div>
  );
};

export default EmailPage;
 