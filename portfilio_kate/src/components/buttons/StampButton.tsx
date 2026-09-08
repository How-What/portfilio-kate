import { useState, type CSSProperties } from 'react';
import StampType from '../../enum/Stamps';
import { Comissions, PetPortrait, Fanart, PPLife } from '../../assets/assets';
import './StampButton.css';

type StampButtonProps = {
  label?: (typeof StampType)[keyof typeof StampType];
  onClick: () => void;
  onStart?: (label?: (typeof StampType)[keyof typeof StampType]) => void;
  addcss?: string;
};

function StampButton({ label, onClick, onStart, addcss }: StampButtonProps) {
  const [scale, setScale] = useState({ x: 1 });
  const [shadow, setShadow] = useState({ opacity: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [movement, setMovement] = useState({ x: '0px', y: '0px', scale: 1 });

  function select_stamp_image(label?: (typeof StampType)[keyof typeof StampType]) {
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
    if (isMoving) return;

    setScale({
      x: 1,
    });
    setShadow({
      opacity: 0,
    });
  }

  function handleClick(event: React.MouseEvent<HTMLImageElement>) {
    if (isMoving) return;

    const stamp = event.currentTarget.getBoundingClientRect();
    const frame = document.querySelector('.stamp-frame')?.getBoundingClientRect();

    if (!frame) return;

    setMovement({
      x: `${frame.left + frame.width / 2 - (stamp.left + stamp.width / 2)}px`,
      y: `${frame.top + frame.height / 2 - (stamp.top + stamp.height / 2) + 5}px`,
      scale: Math.min(frame.width / stamp.width, frame.height / stamp.height) + .033,
    });
    onStart?.(label);
    setIsMoving(true);
    window.setTimeout(onClick, 670);
  }

  return (
    <div className="flex justify-center items-center [perspective:800px]">

        <img
        src={select_stamp_image(label)}
        alt="Stamp"
        className={`h-[45vh] transform-gpu transition-[transform,filter] duration-100 ${isMoving ? 'stamp-moving' : ''} ${addcss ?? ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `scale(${scale.x}, ${scale.x})`,
          filter: `drop-shadow(-10px 10px 10px rgba(0, 0, 0, ${shadow.opacity}))`,
          '--stamp-x': movement.x,
          '--stamp-y': movement.y,
          '--stamp-scale': movement.scale,
        } as CSSProperties}
        onClick={handleClick}
        />
    </div>
  );
}

export default StampButton;