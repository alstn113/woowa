import { useState } from 'react';

import TransitionControl from '../components/common/transition-control';

const NotFoundPage = () => {
  const [visible, setVisible] = useState(true);

  const handleToggle = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <button type="button" onClick={handleToggle}>
        Toggle Flip
      </button>
      <TransitionControl
        visible={visible}
        enterDuration={3000}
        exitDuration={1000}
        onExit={() => console.log('leave')}
      >
        <div
          style={{ width: '100px', height: '100px', background: 'orange' }}
        />
      </TransitionControl>
      <TransitionControl
        visible={false}
        enterDuration={3000}
        exitDuration={2000}
        onExit={() => console.log('leave')}
      >
        <div
          style={{ width: '100px', height: '100px', background: 'orange' }}
        />
      </TransitionControl>
    </div>
  );
};

export default NotFoundPage;
