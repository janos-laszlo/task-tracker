const store = {
  state: {
    credentials: null
  },
  getters: {

  },
  actions: {
    signUp,
    signIn
  },
  mutations: {
    storeCredentials
  }
}

export default store;

// actions
async function signUp(context, credentials) {
  console.log(context);
  return await new Promise((resolve, reject) => {
    if (credentials.username === 'test' && credentials.password === 'test') {
      resolve({ succeeded: true });
    } else {
      reject({ succeeded: false, message: 'username already taken' });
    }
  });
}

async function signIn({ commit }, credentials) {
  return await new Promise((resolve, reject) => {
    if (credentials.username === 'test' && credentials.password === 'test') {
      commit('storeCredentials');
      resolve({ succeeded: true });
    } else {
      reject({ succeeded: false, message: 'Wrong username or password' });
    }
  });
}
// mutations
function storeCredentials(state, credentials) {
  state.credentials = credentials;
}