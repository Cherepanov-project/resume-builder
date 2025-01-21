interface LineCardProps {
  icon: JSX.Element;
  id: string;
  draggable: boolean;
  onDragStart: (e: React.DragEvent, id: string) => void;
  onDrop: (e: React.DragEvent, id: string) => void;
  onDragOver: (e: React.DragEvent) => void;
}

const LineCard = ({ icon, id, onDragStart, onDrop, onDragOver }: LineCardProps) => {
  return (
    <div
      id={id}
      draggable
      onDragStart={(e) => onDragStart(e, id)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, id)}
      className="w-full bg-white rounded-[3px] block p-4 border border-gray-300 shadow-sm transition-all duration-150 hover:shadow-lg hover:border-white cursor-grab"
    >
      <div className="box-border flex flex-col items-center justify-center relative align-top">
        {icon}
      </div>
    </div>
  );
};

export default LineCard;
