import { fetchData } from "./fetchData";

const fetchConfig = async (petitionMethod, backendURLBase, endpoint, clientId, setConfig) =>{
    const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId)
    setConfig(datos.data[0])
}
export {
    fetchConfig
}