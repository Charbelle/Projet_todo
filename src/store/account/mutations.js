
export function setToken(state, data) {
  

    state.token = data.token;
    console.log(state.token)
   
}

export function setUser(state,data){
    console.log("here")
    state.email=data.email;
    state.password=data.password;
    state.name=data.name;
    console.log(state)
}

export function logout(state){
  
   
    state.email=null;
    state.password=null;
    state.name=null;
    state.token=null;
    console.log(state.token)
}