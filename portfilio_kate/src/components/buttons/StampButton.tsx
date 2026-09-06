import { useState } from 'react';
import StampType from '../../enum/Stamps';
import { Comissions, PetPortrait, Fanart, PPLife } from '../../assets/assets';

type StampButtonProps = {
  label?: (typeof StampType)[keyof typeof StampType];
  onClick: () => void;
  addcss?: string;
};

function StampButton({ label, onClick, addcss }: StampButtonProps) {
  const [scale, setScale] = useState({ x: 1 });
  const [shadow, setShadow] = useState({ opacity: 0 });

  function select_stamp_image(label: (typeof StampType) [keyof typeof StampType]) {
    switch (label) {
      case StampType.PET_PORTRAIT:
        return PetPortrait;
      case StampType.FANART:
        return Fanart;
      case StampType.COMISSIONS:
        return Comissions;
      case StampType.PPLIFE:
        return PPLife
      default:
        return PetPortrait;
    }
  }

  function handleMouseMove() {    
    setScale({
      x: 1.02,
    });

    setShadow({
      opacity: 0.4,
    });
  }

  function handleMouseLeave() {
    setScale({
      x: 1,
    });
    setShadow({
      opacity: 0,
    });
  }

  return (
    <div className="flex justify-center items-center [perspective:800px]">

        <img
        src={select_stamp_image(label)}
        alt="Stamp"
        className={`h-full transform-gpu transition-[transform,filter] duration-100 ${addcss ?? ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `scale(${scale.x}, ${scale.x})`,
          filter: `drop-shadow(-10px 10px 10px rgba(0, 0, 0, ${shadow.opacity}))`,
        }}
        onClick={onClick}
        />
    </div>
  );
}

export default StampButton;