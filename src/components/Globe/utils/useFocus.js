import { useState } from 'react';

export function useFocus() {
  const [focus, setFocus] = useState(undefined);

  function goTo(coordinates) {
    setFocus(coordinates);
  }

  return { focus, goTo };
}
