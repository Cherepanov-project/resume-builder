import { DynamicBlockProps } from '@/types/landingBuilder';
import ContainerDIV from '@components/atoms/ContainerDIV';

const LayoutBlockArticle: React.FC<DynamicBlockProps> = (props) => {
  return <ContainerDIV children={props.children} layout={props.layout} columns={props.columns} />;
};

export default LayoutBlockArticle;
