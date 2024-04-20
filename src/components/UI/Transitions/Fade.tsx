import { Transition, TransitionStatus } from 'react-transition-group';
import { PropsWithChildren, useRef } from 'react';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles: { [key in TransitionStatus]: React.CSSProperties } = {
   entering: { opacity: 1 },
   entered: { opacity: 1 },
   exiting: { opacity: 0 },
   exited: { opacity: 0 },
   unmounted: {opacity: 0},
 };

interface FadeProps {
   in?: boolean
}

export function Fade({ in: inProp, children }: PropsWithChildren<FadeProps>) {
  const nodeRef = useRef(null);
  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
      {state => (
         <div
          ref={nodeRef}
          style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
           {children}
        </div>
      )}
    </Transition>
  );
}