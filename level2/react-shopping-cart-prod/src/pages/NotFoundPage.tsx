import { useState } from 'react';

import BottomSheet from '../components/common/bottom-sheet';

const NotFoundPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <div>
      <button type="button" onClick={toggle}>
        toggle
      </button>
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <BottomSheet.Header />
        <BottomSheet.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            eligendi voluptates totam repellat sint, consequatur ipsa corporis
            labore cupiditate beatae sed non architecto, aliquam similique
            corrupti officiis sit voluptate dolorum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            eligendi voluptates totam repellat sint, consequatur ipsa corporis
            labore cupiditate beatae sed non architecto, aliquam similique
            corrupti officiis sit voluptate dolorum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            eligendi voluptates totam repellat sint, consequatur ipsa corporis
            labore cupiditate beatae sed non architecto, aliquam similique
            corrupti officiis sit voluptate dolorum.
          </p>
        </BottomSheet.Content>
      </BottomSheet>
    </div>
  );
};

export default NotFoundPage;
