import { defineStore } from 'pinia';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useAuth = defineStore('auth', {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      token: null,
      userName: null,
      userNickname: null,
      userEmail: null,
      userId: null,
    };
  },
});
