import React from 'react';
import { useTypedSelector } from '@/hooks/cvTemplateHooks';
import generateEmailHtml from './generateEmailHtml';

const EmailPage: React.FC = () => {
  const blocks = useTypedSelector((state) => state.layout.gridContainers[0].elements.activeElements);
  const emailHtml = generateEmailHtml(blocks);

  return (
    <div>
      <h1>Email Page</h1>
      <div dangerouslySetInnerHTML={{ __html: emailHtml }} />
    </div>
  );
};

export default EmailPage;