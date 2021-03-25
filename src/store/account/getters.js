export function getToken(state)
{
    return state.token
}

export function getUser(state)
{
    return {
        name:state.name,
        email:state.email,
        password:state.password
    }
}
export function isAuthenticated(state)
{
    if(state.token) return true;
    return false;
}

