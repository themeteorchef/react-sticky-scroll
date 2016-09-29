import React from 'react';
import { Sticky } from '../components/sticky.js';

export const Index = () => (
  <div>
    <Sticky className="sticky-one" exit="300">
      <h3>Testing #1</h3>
    </Sticky>
    <Sticky className="sticky-two">
      <h3>Testing #2</h3>
    </Sticky>
    <Sticky className="sticky-three" enter="1200" exit="1500">
      <h3>Testing #3</h3>
    </Sticky>
  </div>
);
