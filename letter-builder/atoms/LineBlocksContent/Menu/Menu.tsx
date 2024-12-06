import { IconPngMenu } from "@components/atoms/Icons/LetterCardIcons";

const MenuComponent = () => {
  return (
    <div style={{ color: "#515659" }}>
      <div className="flex justify-center" style={{ marginBottom: "0.5rem" }}>
        <IconPngMenu scale={1.3} />
      </div>
      Меню
    </div>
  );
};

export default MenuComponent;
