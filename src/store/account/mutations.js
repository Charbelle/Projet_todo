
export function setToken(state, data) {
    state.token = data.token;
   
}

export function setUser(state,data){
    state.email=data.email;
    state.password=data.password;
    state.name=data.name;
}

export function logout(state){
    state.email=null;
    state.password=null;
    state.name=null;
    state.token=null;
}