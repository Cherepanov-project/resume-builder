import ContainerDIV from '@components/atoms/ContainerDIV';

type SectionWrapperProps = {
  props: {
    text: string;
    wrapperStyle: { [key: string]: string | number };
    textStyle: { [key: string]: string | number };
    inputStyle: { [key: string]: string | number };
  };
  children: object;
  layout: object;
};

const SectionWrapper: React.FC<SectionWrapperProps> = (props) => {
  return <ContainerDIV children={props.children} layout={props.layout} />;
};

export default SectionWrapper;
