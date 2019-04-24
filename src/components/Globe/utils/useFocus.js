import { useState } from 'react';
import { markers } from './markers';

export function useFocus() {
  const [focus, setFocus] = useState(undefined);
  const focusButtonsDataset = ['None', ...markers.map(marker => marker.city)];
  const focusOptions = {
    enableDefocus: false
  };

  function goTo(city) {
    if (city === 'None') return setFocus(undefined);

    const focus = markers.filter(marker => marker.city === city);
    setFocus(focus[0]);
  }

  return { focus, focusOptions, focusButtonsDataset, goTo };
}
