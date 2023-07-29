import { useState } from 'react';

import TransitionControl from '../components/common/TransitionControl';

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
        enterEffect="flip"
        leaveEffect="flip"
        onEnter={() => console.log('enter')}
        onLeave={() => console.log('leave')}
      >
        <div
          style={{ width: '100px', height: '100px', background: 'orange' }}
        />
      </TransitionControl>
    </div>
  );
};

export default NotFoundPage;
