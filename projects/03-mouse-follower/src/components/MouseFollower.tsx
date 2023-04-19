import { useEffect, useState } from 'react';

import { Position } from '../types';

type MouseFollowerProps = {
  isEnabled: boolean;
  toggleFn: () => void;
};

export default function MouseFollower({
  isEnabled,
  toggleFn,
}: MouseFollowerProps) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    if (!isEnabled) return;

    const onFollowMouse = (e: MouseEvent) => {
      setPosition({ x: e.x, y: e.y });
    };
    window.addEventListener('mousemove', onFollowMouse);

    document.body.classList.add('mouse-follower');

    return () => {
      console.log('Cleaning up');
      document.body.classList.remove('mouse-follower');
      window.removeEventListener('mousemove', onFollowMouse);
    };
  }, [isEnabled]);
  return (
    <>
      {isEnabled && (
        <div
          style={{
            position: 'fixed',
            left: -15,
            top: -15,
            translate: `${position.x}px ${position.y}px`,
            width: '1.5rem',
            aspectRatio: 1,
            border: '1px solid white',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
          id="mouse-follower"
        ></div>
      )}
      <button onClick={() => toggleFn()}>
        {isEnabled ? 'Desactivar' : 'Activar'} Mouse Follower
      </button>
    </>
  );
}
