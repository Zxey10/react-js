
export async function apiRequest(endpoint){
    const res = await fetch(endpoint);
    const json = await res.json()
    return json;
}
