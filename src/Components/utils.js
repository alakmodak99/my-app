import axios from "axios";
const APPBASEURL = "https://tables-server-data.onrender.com/";
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
