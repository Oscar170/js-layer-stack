import { createStore } from 'redux';

const buildStore = initState => createStore(state => state, initState);

export default buildStore;
