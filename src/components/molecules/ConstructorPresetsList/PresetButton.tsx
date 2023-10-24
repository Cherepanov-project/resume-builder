import List from '@mui/material/List';
import ConstructorListItem from '../../atoms/ConstructorListItem';
import elements from '../../atoms/ConstructorElements';

const PresetButton = () => {
  return (
    <List style={{ width: '400px' }}>
      <ConstructorListItem label="Button" preset={elements.button} />
      <ConstructorListItem label="Round button" preset={elements.roundButton} />
    </List>
  );
};

export default PresetButton;
