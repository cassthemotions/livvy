import * as actions from '../actions';
import anything from './anything-to-export';



const store = {
  ...actions,
  anything,
  network: 'testnet',
  sideNavOpen: true,
  unlockWalletOptions: {
    open: false,
    wallet: {},
    onUnlock: null,
    unlockButtonText: ''
  },
  notifications: [],
  user: {},
  takers: [],
  loading: {
    app: true,
    inbox: true,
    sent: true,
    archived: true
  },
  inbox: [],
  sent: [],
  archived: []
};

export default store;
