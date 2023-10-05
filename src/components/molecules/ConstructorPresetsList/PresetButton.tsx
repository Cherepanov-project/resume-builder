import List from '@mui/material/List';
import ConstructorListItem from '../../atoms/ConstructorListItem';
const PresetButton = () => {
  return (
    <List>
      <ConstructorListItem label="Button" appointment="preset" preset={'button'} />
      <ConstructorListItem label="Round button" appointment="preset" preset={'roundButton'} />
    </List>
  );
};

export default PresetButton;
