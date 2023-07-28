import { fetchData } from "./fetchData";
import { mailerExtracter } from "../helpers/utilities";
const fetchRepresentatives = async (petitionMethod, backendURLBase, endpoint, clientId, params = '', setMp, setShowLoadSpin, setShowList,mp,setSenator,senator,sendMany,setAllDataIn) => {
  
   const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params)
   if(sendMany === "Si") {
    const emails = await mailerExtracter(datos.data)
    console.log(emails)
    setAllDataIn(emails)
    setMp(datos.data)
    setShowLoadSpin(false)
    setShowList(false)
    return
   }
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
const fetchRepresentativesAUS = async (petitionMethod, backendURLBase, endpoint, clientId, params = '', setMp, setSenator, setShowLoadSpin, setShowList) => {
    const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params)
    let query = datos.data;
    let fill = await query.map((el) => {
      return el[0];
    });
    
    setMp(fill);
    setSenator(datos.statesFilter)
    setShowLoadSpin(false)
    setShowList(false)

}
const fetchRepresentativesBatch = async (petitionMethod, backendURLBase, endpoint, clientId, params = '', setMp, setShowLoadSpin, setShowList, setAllDataIn) => {
    const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params)
    console.log(datos.data)
    const emails = await mailerExtracter(datos.data)
    console.log(emails)
    setAllDataIn(emails)
    setMp(datos.data)
    setShowLoadSpin(false)
    setShowList(false)
    // await console.log(datos)

}
export{
    fetchRepresentatives,fetchRepresentativesAUS,fetchRepresentativesBatch
}
