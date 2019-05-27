import axios, { AxiosInstance } from 'axios';

export default (baseURL:string):AxiosInstance => axios.create({baseURL: baseURL, withCredentials: true, headers: {"cookie": "Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Yzg0ZmI5MC0xMmM0LTExZTEtODQwZC03YjI1YzVlZTc3NWEiLCJpYXQiOjE1NTg5NTU0OTcsImV4cCI6MTU1ODk1OTA5N30.wWfugYSQsJPjI2y0e8fCG-0DprrnWavpSc5rz3_x5lo"}});