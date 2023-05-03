import { fetchData } from "./fetchData";

const fetchRepresentatives = async (petitionMethod, backendURLBase, endpoint, clientId, params = '', setMp, setShowLoadSpin, setShowList) => {
    const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params)
    setMp(datos.data)
    setShowLoadSpin(false)
    setShowList(false)
    // await console.log(datos)

}


export{
    fetchRepresentatives
}
