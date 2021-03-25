import {createStore} from 'vuex'

import account from './account';
import todo from './todo';

export default createStore({
    debug : true,
    modules: {
      account,
      todo,
      },
  })

