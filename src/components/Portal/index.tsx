import {ReactNode, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import * as S from './Portal.style';
import {useSelector} from 'react-redux';
import {RootState} from '@/store/rootReducer';

interface PortalProps {
  children: ReactNode;
}

const Portal = ({children}: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, _] = useSelector((state: RootState) => {
    return state.portal;
  });
  useEffect(() => {
    ref.current = document.getElementById('modal-root');
  }, []);
  return mounted && ref.current
    ? createPortal(<S.Overlay>{children}</S.Overlay>, ref.current)
    : null;
};

export default Portal;
