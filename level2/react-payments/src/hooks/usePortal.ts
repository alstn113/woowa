import { useEffect, useRef } from 'react';

const createPortalElement = (id: string) => {
  const el = document.createElement('div');
  el.setAttribute('id', id);
  return el;
};

const usePortal = (id: string) => {
  const portalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const parentElement = document.body;
    const existingElement = parentElement.querySelector<HTMLElement>(`#${id}`);

    if (existingElement) {
      portalRef.current = existingElement;
    } else {
      const newElement = createPortalElement(id);
      parentElement.appendChild(newElement);
      portalRef.current = newElement;
    }

    return () => {
      parentElement.removeChild(portalRef.current as Node);
    };
  }, [id]);

  return portalRef.current;
};

export default usePortal;
