import axios, { AxiosInstance } from 'axios';

export default (baseURL:string, headers?:string):AxiosInstance => {
  console.log("headers ===>>>", headers)
  return (
    axios.create({baseURL: baseURL, headers: headers})
  )
};