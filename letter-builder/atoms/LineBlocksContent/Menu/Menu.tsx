import { IconMenu } from "@components/atoms/Icons/LetterCardIcons";

const MenuComponent = () => {
  return (
    <p className="text-base text-[#515659]">
      <div className="flex items-center justify-center">
        <IconMenu color="#515659" scale={1.3} />
      </div>
      <br />
      Меню
    </p>
  );
};

export default MenuComponent;
