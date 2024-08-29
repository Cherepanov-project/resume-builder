import { T_BlockElement } from '@/types/landingBuilder';

const generateEmailHtml = (blocks: T_BlockElement[] | undefined): string => {
  if (!blocks || blocks.length === 0) {
    return '<p>No blocks to display</p>';
  }

  let html = '<table border="0" cellpadding="0" cellspacing="0" width="100%">';

  blocks.forEach((block) => {
    html += `<tr><td>${block.name}</td></tr>`;
  });

  html += '</table>';
  return html;
};

export default generateEmailHtml;