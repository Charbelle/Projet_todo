import axios from 'axios'

export function register({commit}, data) {
    console.log(data)
    axios
        .post("http://138.68.74.39/api/register?name="+ data.name+
            "&email="+data.email+
            "&password="+ data.password)
        .then(response => commit("setToken", response.data))
        .catch(function (error) {
            console.log("error"+error)
        })
} 

 //récuperer les informations d'un utilisateur
export function accountInformation({commit},data)
{
    
    axios. get("http://138.68.74.39/api/user",{headers:{'Authorization':'Bearer '+data.token}})
    .then(res=>{commit('setUser',res.data)})
    .catch(function (error) {
        console.log("error"+error)
    })

}

export function login({commit}, data) {
    axios
        .post("http://138.68.74.39/api/login?email="+ data.email+"&password="+ data.password)
        .then(response=> {
            commit("setToken", response.data)})
     .catch(function (error) {
            console.log("error"+error)
        })

    }

export function logout({commit})
{
    commit("logout")
}
