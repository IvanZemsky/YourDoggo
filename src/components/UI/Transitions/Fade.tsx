import { Transition, TransitionStatus } from 'react-transition-group';
import { PropsWithChildren, useRef } from 'react';

const transitionStyles: { [key in TransitionStatus]: React.CSSProperties } = {
   entering: { opacity: 1 },
   entered: { opacity: 1 },
   exiting: { opacity: 0 },
   exited: { opacity: 0 },
   unmounted: {opacity: 0},
 };

interface FadeProps {
   in?: boolean,
   duration?: number
}

export function Fade({ in: inProp, duration = 300 ,children }: PropsWithChildren<FadeProps>) {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }
  
  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration} mountOnEnter={true} unmountOnExit={true}>
      {state => (
         <div
          ref={nodeRef}
          style={{
              ...defaultStyle,
              ...transitionStyles[state],
              position: 'relative',
              zIndex: 700
            }}
          >
           {children}
        </div>
      )}
    </Transition>
  );
}