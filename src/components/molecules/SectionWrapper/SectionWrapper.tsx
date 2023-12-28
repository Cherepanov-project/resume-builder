import { DynamicBlockProps } from '@/types/landingBuilder';
import ContainerDIV from '@components/atoms/ContainerDIV';

const SectionWrapper: React.FC<DynamicBlockProps> = (props) => {
  return <ContainerDIV children={props.children} layout={props.layout} />;
};

export default SectionWrapper;
