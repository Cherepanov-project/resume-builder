import ContainerDIV from '@components/atoms/ContainerDIV';

type LayoutBlockArticleProps = {
  columns: number;
  props: {
    text: string;
    wrapperStyle: { [key: string]: string | number };
    textStyle: { [key: string]: string | number };
    inputStyle: { [key: string]: string | number };
  };
  children: object;
  layout: object;
};

const LayoutBlockArticle: React.FC<LayoutBlockArticleProps> = (props) => {
  return <ContainerDIV children={props.children} layout={props.layout} columns={props.columns} />;
};

export default LayoutBlockArticle;
