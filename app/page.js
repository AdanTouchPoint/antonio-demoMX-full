"use client"
import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainForm from "./components/MainForm";
import LoadingMainForm from './components/LoadingMainForm';
import { fetchEmailData } from './assets/petitions/fetchEmailData';
import { fetchStatesData } from './assets/petitions/fetchStatesData';
import { fetchTweet } from './assets/petitions/fetchTweet';
import { fetchTYM } from './assets/petitions/fetchTYM';
import { fetchMainContent } from './assets/petitions/fetchMainContent';
import {fetchAllLeads} from './assets/petitions/fetchLeads'
import { fetchConfig } from './assets/petitions/fetchConfig';
import { fetchQuestions } from './assets/petitions/fetchQuestions';
//require('dotenv').config()
function Home() {
  const [configurations , setConfigurations]= useState({
    lenguage: "es",
    SearchBy:"state",
    sendMany: false,
    hasQuestions: false,
    region: "mx"
  })
  const [emailData, setEmailData] = useState({
    userName: ''
  })
  const [dataUser, setDataUser] = useState({

      })
      const [backendURLBase] = useState(`${process.env.NEXT_PUBLIC_URL}`)
      const [backendURLBaseServices] = useState(`${process.env.NEXT_PUBLIC_URL_SERVICES}`)
      const [clientId] = useState(`${process.env.NEXT_PUBLIC_CLIENT_ID}`)
      const [endpoints] = useState({
        toGetQuestions:'/questions/',
        toGetConfs:'/confs/',
        toGetAllRepresentativesAUS:'/all-senators/',
        toGetRepresentativesByCpAUS:'/find-mp/', 
        toGetRepresentativesPerParty:'/representatives-party/',
        toGetAllRepresentatives:'/all-representatives/',
        toGetRepresentativesPerStates:'/representatives-state/',
        toGetEmailsContent:'/email-message/',
        toGetMainData:'/main/',
        toGetThankYouMessage:'/typ-message/',
        toGetTweets:'/tweets/',
        toSaveLeads:'/leads/',
        toGetAllLeads:'/leads/',
        toSendEmails:'/send-email/',
        toSendEmailBuilder:'/email-builder/',
        toSendEmailBatch:'/email-batch/'
      })
    const [leads, setLeads] = useState()
    const [mp, setMp] = useState([])
    const [senator, setSenator] = useState([])
    const [states, setStates] = useState([])
    const [tweet, setTweet] = useState('')
    const [dataQuestions,setDataQuestions] = useState()
    const [questions, setQuestions] = useState({
      question1: '',
    })
    const [mainData, setMainData] = useState({
      mainImg:'./assets/laptop-with-notebook-and-glasses-on-table.jpg',
      title:'Please enter a title on your board',
      subtitle:'Please enter a subtitle on your dashboard',
      instruction:'Please enter an instruction paragraph in your dashboard',
      firstFormLabel1:'Please enter an indication on your dashboard',
      firstFormPlaceholder1:'Please enter a state selection placeholder in your dashboard',
      firstFormLabel2:'Please enter an indication on your dashboard',
      firstFormPlaceholder2:'Please enter a placeholder text for your status selection input on your dashboard',
      termsAndConditionsTxt:'Please enter a text of terms and conditions in your dashboard',
      termsAndConditionsURL:'#',
      findBtnText: 'Find your representative',
      note:'Please enter a note text in your dashboard',
      positionName:'Please enter a position name in your dashboard',
      emailFormUserLabel:'Please enter this value in your dashboard',
      emailFormInfoRepLabel:'Please enter this value in your dashboard',
      emailFormSubjectPlaceholder:'Please enter this value in your dashboard',
      emailFormUserNameLabel:'Please enter this value in your dashboard',
      emailFormUserNamePlaceholder:'Please enter this value in your dashboard',
    })
    const [typData, setTypData] = useState({
      thankYouMessage:'Please enter a thank you message on the dashboard',
      secondThankYouMessage : 'Please enter fill this field in the dashboard',
      repeatButtonTyp : 'Please fill in this field on the dashboard',
    })
    const [loading, setLoading] = useState(true)
    const [allDataIn, setAllDataIn] = useState([])
   // const adanCID ='636dadcf2626f92aade6664a'
    useEffect(() => {

        async function fetchData() {
          await Promise.all([
            //fetchQuestions('GET', backendURLBase, endpoints.toGetQuestions, clientId, '', setDataQuestions),
            fetchConfig('GET', backendURLBase, endpoints.toGetConfs, clientId, setConfigurations),
            fetchAllLeads('GET', backendURLBase, endpoints.toGetAllLeads, clientId, setLeads),
            fetchMainContent('GET', backendURLBase, endpoints.toGetMainData, clientId, '', setMainData),
            fetchEmailData('GET', backendURLBase, endpoints.toGetEmailsContent, clientId, "", setDataUser),
            fetchStatesData('GET', backendURLBase, endpoints.toGetAllRepresentatives, clientId, '', setStates),
            fetchTweet('GET', backendURLBase, endpoints.toGetTweets, clientId, '', setTweet),
            fetchTYM('GET', backendURLBase, endpoints.toGetThankYouMessage, clientId, '', setTypData)
          ]).then(() => {
            setLoading(false) // cambia el estado a "false" cuando todas las consultas se hayan completado
          }).catch((error) => console.error(error))
        }
    
        fetchData()
    },[])
    return(
      <>
        {/* <LoadingMainForm/> */}
      {
        loading && <LoadingMainForm/>
      }
      {
        !loading === true &&  
     ( <MainForm
        configurations={configurations}
        setLeads={setLeads}
        leads={leads}
        setEmailData={setEmailData}
        emailData={emailData}
        dataUser={dataUser}
        setDataUser={setDataUser}
        mp={mp}
        setMp={setMp}
        senator={senator}
        setSenator={setSenator}
        clientId={clientId}
        states={states}
        endpoints={endpoints}
        tweet={tweet}
        typData={typData}
        mainData={mainData}
        backendURLBase={backendURLBase}
        backendURLBaseServices={backendURLBaseServices}
        allDataIn={allDataIn}
        setAllDataIn={setAllDataIn}
    /> )
      }
      </>
    )

}

export default Home
