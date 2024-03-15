import { DynamicBlockProps } from '@/types/landingBuilder';
import ContainerDIV from '@components/atoms/ContainerDIV';

const LayoutBlockArticle: React.FC<DynamicBlockProps> = (props) => {
  // console.log('1 -> ', props);
  return (
    <ContainerDIV
      children={props.children}
      layout={props.layout}
      columns={props.columns}
      props={{
        style: {},
      }}
    />
  );
};

export default LayoutBlockArticle;
