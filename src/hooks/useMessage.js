import { useEffect } from 'react';
import { sendPostMessage } from '../utilities/sendPostMessage';

export const useMessage = (dependency, urlSrc) => {
  useEffect(() => {
    sendPostMessage(urlSrc);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency]);
};
