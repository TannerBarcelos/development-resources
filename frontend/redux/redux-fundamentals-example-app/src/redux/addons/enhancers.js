export const sayHi = (createStore) => {
  return (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers);

    function newDispatcher(action) {
      const result = store.dispatch(action);
      console.log('hi');
      return result;
    }

    return { ...store, dispatch: newDispatcher };
  };
};
