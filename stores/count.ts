import { createStore, createEvent } from 'effector';

export const increment = createEvent('increment');
export const decrement = createEvent('decrement');
export const set = createEvent('set');

export const resetCounter = createEvent('reset counter');

export const counter = createStore(0)
  .on(increment, state => state + 1)
  .on(decrement, state => state - 1)
  .on(set, (state, payload) => payload)
  .reset(resetCounter);

counter.watch(console.log);
