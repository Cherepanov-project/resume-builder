import List from '@mui/material/List';
import ConstructorListItem from '../../atoms/ConstructorListItem';
import elements from '../../atoms/ConstructorElements';
const PresetButton = () => {
  return (
    <List>
      <ConstructorListItem label="Button" appointment="preset" preset={elements.button} />
      <ConstructorListItem
        label="Round button"
        appointment="preset"
        preset={elements.roundButton}
      />
    </List>
  );
};

export default PresetButton;
