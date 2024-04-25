import { T_BlockElement } from '@/types/landingBuilder';

//объект с типами интерактивных элементов
const elemTypes: { [key: string]: string[] } = {
  button: ['ButtonBlock'],
  slider: ['Slider'],
};

//получаем элемент по селектору
const getElemBySelector = (elemId: string): string => {
  return `window['${elemId}'] = document.querySelector('.${elemId}>div:nth-child(1)');`;
};

//вешаем обработчик согласно типу интерактивного элемента
const addElemListener = (elemId: string, draggableItem: T_BlockElement): string => {
  if (elemTypes.button.includes(draggableItem.name)) {
    return `${elemId}.addEventListener('click', () => console.log('Я - ${elemId} ${draggableItem.name} из рода КНОПОК ' +
 'меня нашли по селектору и ДОБАВИЛИ ОБРАБОТЧИК СОБЫТИЯ по КЛИКУ. Осталось передать сюда функцию для описания соответствующего поведения при возникновении события'));`;
  } else {
    return '';
  }
};

//добавление скрипта интерактивному элементу
export const addBaseScript = (elemId: string, draggableItem: T_BlockElement) => {
  const selectedElem = getElemBySelector(elemId);
  const elemListener = addElemListener(elemId, draggableItem);
  return `<script>
${selectedElem}
${elemListener}
console.log(window['${elemId}']);
</script>`;
};
