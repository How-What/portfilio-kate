import { useState } from 'react';

import { StampComic, StampImage } from '../../assets/assets';

type StampButtonProps = {
  label?: string;
  onClick: () => void;
  addcss?: string;
};

function StampButton_copy({ label, onClick, addcss }: StampButtonProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shadow, setShadow] = useState({ x: 0, y: 0, opacity: 0 });

  function select_stamp_image(label: string | undefined) {
    switch (label?.toLowerCase()) {
      case 'illustrations':
        return StampImage;
      case 'comics':
        return StampComic;
      default:
        return StampImage;
    }
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontalPosition = (event.clientX - bounds.left) / bounds.width - 0.5;
    const verticalPosition = (event.clientY - bounds.top) / bounds.height - 0.5;

    setTilt({
      x: verticalPosition * -67,
      y: horizontalPosition * 67,
    });

    const distanceFromCenter = Math.abs(horizontalPosition) + Math.abs(verticalPosition);
    setShadow({
      x: horizontalPosition * -24,
      y: verticalPosition * -24,
      opacity: 0.2 + distanceFromCenter * 0.2,
    });
  }

  return (
    <div className="flex justify-center items-center [perspective:800px]">
      <div
        className="group relative size-64"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          setTilt({ x: 0, y: 0 });
          setShadow({ x: 0, y: 0, opacity: 0 });
        }}
      >

        <img
        src={select_stamp_image(label)}
        alt="Stamp"
        className={`size-64 transform-gpu transition-[transform,filter] duration-100 ${addcss ?? ''}`}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          filter: `drop-shadow(${shadow.x}px ${shadow.y}px 10px rgba(0, 0, 0, ${shadow.opacity}))`,
        }}
        onClick={onClick}
        />
      </div>
    </div>
  );
}

export default StampButton_copy;