import { useState } from 'react';

import { Comissions, PetPortrait, Fanart, PPLife } from '../../assets/assets';

type StampButtonProps = {
  label?: string;
  onClick: () => void;
  addcss?: string;
};

function StampButton({ label, onClick, addcss }: StampButtonProps) {
  const [scale, setScale] = useState({ x: 1 });
  const [shadow, setShadow] = useState({ opacity: 0 });

  function select_stamp_image(label: string | undefined) {
    switch (label?.toLowerCase()) {
      case 'illustrations':
        return PetPortrait;
      case 'fanart':
        return Fanart;
      case 'comissions':
        return Comissions;
      case 'pplife':
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