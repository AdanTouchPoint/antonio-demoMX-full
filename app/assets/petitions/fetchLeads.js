import { fetchData } from "./fetchData";
import { urlEncode } from "../helpers/utilities";

const fetchLeads = (
  successResponse,
  backendURLBase,
  endpoints,
  clientId,
  dataUser,
  emailData
) => {
  fetchData(
    "POST",
    backendURLBase,
    endpoints.toSaveLeads,
    clientId,
    `&firstName=${urlEncode(dataUser.userName )}&postalcode=${
      dataUser.postalCode ? urlEncode(dataUser.postalCode) : "NA"
    }&emailData=${urlEncode(dataUser.emailUser)}&representative=${
        urlEncode(emailData.name)
    }&subject=${urlEncode(emailData.subject)}&emailMessage=${urlEncode(dataUser.text)}&city=${
      emailData.state
    }&party=${urlEncode(emailData.party)}&sended=${urlEncode(successResponse)}`
  );
  // axios.post(`https://payload-demo-tpm.herokuapp.com/leads?&firstName=${dataUser.userName ? dataUser.userName:''}&postalcode=${dataUser.zipCode ? dataUser.zipCode:dataUser.state}&emailData=${dataUser.emailUser}&representative=${emailData.name}&emailMessage=${dataUser.text}&city=${emailData.state}&party=${emailData.party}&clientId=${clientId}&sended=${respuestaDeExito}`, dataUseryEmail)
};
const fetchAllLeads = async (
  petitionMethod,
  backendURLBase,
  endpoint,
  clientId,
  setLeads
) => {
  const leads = await fetchData(
    petitionMethod,
    backendURLBase,
    endpoint,
    clientId
  );
  const data = leads.data;
  setLeads(data);
  console.log(data);
};
export { fetchLeads, fetchAllLeads };
