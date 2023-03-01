// Learn - https://redux.js.org/tutorials/fundamentals/part-4-store#:~:text=Redux%20middleware%20are%20written%20as%20a%20series%20of%20three%20nested%20functions
export const logger = (storeAPI) => (next) => (action) => {
  console.log('Dispatched Action ->', action.type);
  return next(action);
};

export const timestampifyNewTodos = (storeAPI) => (next) => (action) => {
  // We can modify actions in redux middleware - we can see the power in this!
  action.payload.timestamp = {
    raw: Date.now(),
    actual: new Date().toDateString(),
  };
  return next(action);
};
