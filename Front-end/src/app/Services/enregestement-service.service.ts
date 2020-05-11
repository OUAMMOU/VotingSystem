import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Citizen, Administrator } from '../enregistrement/enregistrement.component';
import { Candidate } from '../votepage/votepage.component';
@Injectable({
  providedIn: 'root'
})
export class EnregestementServiceService {

  constructor(private http:HttpClient) { }
 
  retriveAllCitizens(){
    return this.http.get<Citizen[]>("http://localhost:8080/getCitizens")
  }
  retriveCitizen(id){
    return this.http.get<Citizen>(`http://localhost:8080//getCitizen/${id}`)
  }
  AddCitizen(Citizen){
    return this.http.post("http://localhost:8080/createCitizen",Citizen);
  }
  FinByIdnational(idnational){
    return this.http.get<Citizen>(`http://localhost:8080/findbyidNatio/${idnational}`)
  }
  retriveAllCandidates(){
    return this.http.get<Candidate[]>("http://localhost:8080/GetAllCandidats")
  }
  retriveCandidat(id){
    return this.http.get<Candidate>(`http://localhost:8080/GetCandidat/${id}`)
  }
  UpdateCandidat(id,Candidate){
    return this.http.put(`http://localhost:8080/UpdateCandidate/${id}`,Candidate);
  }
  UpdateCitizen(id,Citizen){
    return this.http.put(`http://localhost:8080/UpdateCitizen/${id}`,Citizen);
  }
  retriveAdmin(email){
    return this.http.get<Administrator>(`http://localhost:8080/getAdministrator/${email}`)
  }
}
