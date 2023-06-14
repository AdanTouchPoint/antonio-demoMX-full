import { fetchData } from "./fetchData";

const fetchRepresentatives = async (petitionMethod, backendURLBase, endpoint, clientId, params = '', setMp, setShowLoadSpin, setShowList,mp,setSenator,senator) => {
    const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params)
    const payload = datos.data
    let mpFilter = new Set()
    let senatorFilter = new Set()
if( payload.length > 0 ) {
    mpFilter = await payload.map((el)=> {
        if(el.govt_type === 'Diputados') {
          return el
        }
    })
    setMp(mpFilter.filter(item => item !== undefined && item !== null))

    senatorFilter = await payload.map((el)=> {
        if(el.govt_type === 'Senadores') {
           return el
        }
    })
    setSenator(senatorFilter.filter(item => item !== undefined && item !== null))
}
    setShowLoadSpin(false)
    setShowList(false)
    console.log(senator)
    console.log(mp)
}

export{
    fetchRepresentatives
}
