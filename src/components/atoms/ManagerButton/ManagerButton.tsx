import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import './ManagerButton.scss';

interface ManagerButtonProps {
  name: string;
  onClick: (e: React.MouseEvent) => void;
}

const ManagerButton = (props: ManagerButtonProps) => {
  const { onClick, name } = props;
  return (
    <div className="manager-btn">
      <button onClick={onClick}>
        <ViewQuiltIcon />
        <span>{name}</span>
      </button>
    </div>
  );
};

export default ManagerButton;
