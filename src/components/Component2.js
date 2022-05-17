import React from 'react';
import {Spring, animated } from 'react-spring';

const Component2 = () => {
  return(
    <Spring
    from={{opacity: 0}}
    to={{opacity: 1}}
    config={{duration: 1000}}
    delay='1'
    >
      {props => (
        <animated.div style={props}>
          <div style={Component2Style}>
            <h1>Component2</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </animated.div>
      )}
    </Spring>

  );
}

const Component2Style = {
  background: 'slateblue',
  color: 'white',
  padding: '1.5rem',
}

export default Component2;
