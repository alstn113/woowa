import { useCallback, useState } from 'react';

interface UseDisclosureProps {
  defaultIsOpen?: boolean;
}

const useDisclosure = ({ defaultIsOpen = false }: UseDisclosureProps = {}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const onClose = useCallback(() => setIsOpen(false), []);

  const onOpen = useCallback(() => setIsOpen(true), []);

  const onToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, onClose, onOpen, onToggle };
};

export default useDisclosure;
