import axios from "axios";
const APPBASEURL = "http://localhost:3000/";
export const getAPIData = (obj) => {
    let s =''
    if(obj?.data){
        s='?';
        for(let key in obj?.data){
           s+= `${key}=${obj?.data[key]}`
        }
    }
  return axios.get(APPBASEURL + `${obj?.url}` + s || '');
};
