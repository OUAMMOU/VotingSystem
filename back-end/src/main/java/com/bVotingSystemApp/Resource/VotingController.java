package com.bVotingSystemApp.Resource;

import java.net.URI;

import java.util.List
;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bVotingSystemApp.Entity.Administrator;
import com.bVotingSystemApp.Entity.Candidate;
import com.bVotingSystemApp.Entity.Citizen;
import com.bVotingSystemApp.Repositories.AdministratorRepository;
import com.bVotingSystemApp.Repositories.CandidatRepository;
import com.bVotingSystemApp.Repositories.CitizenRepo;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class VotingController {
 
	@Autowired
	CitizenRepo citizenRep;
	@Autowired
	CandidatRepository CandidateRep;
	@Autowired
	AdministratorRepository AdminRepo;
	//check
	 @GetMapping(path = "/getCitizens")
	 public List<Citizen> getCitizens()
	 {
		 return citizenRep.findAll();
	 }
	 @GetMapping(path = "/getCitizen/{id}")
	 public Citizen getCitizen(@PathVariable Long id)
	 {
		 return citizenRep.findById(id).get();
	 }
	 @PostMapping("/createCitizen")
		public Citizen AddCitizen(@RequestBody Citizen citizen)
		{
		 return citizenRep.save(citizen);
		}
	 @GetMapping(path = "/findbyidNatio/{idnational}")
	 public Citizen findIdnatio(@PathVariable String idnational ) {
		 return citizenRep.findByIdnational(idnational);
		 
	 }
	 @GetMapping("/GetAllCandidats")
	 public List<Candidate> GetAllCandidates(){
		 return  CandidateRep.findAll();
	 }
		
	 @GetMapping("/GetCandidat/{id}")
	 public Candidate GetCandidate(@PathVariable Long id){
		 return  CandidateRep.findById(id).get();
	 }
	 @PutMapping("/UpdateCandidate/{id}")
		public Candidate updateCandidat(@PathVariable long id,@RequestBody Candidate candidate)
		{
			candidate.setId(id);
			return CandidateRep.save(candidate);
			
		}
	 @PutMapping("/UpdateCitizen/{id}")
		public Citizen updateCitizen(@PathVariable long id,@RequestBody Citizen citizen)
		{
			citizen.setId(id);
			return citizenRep.save(citizen);
			
		}
	 @GetMapping(path = "/getAdministrator/{email}")
	 public Administrator getAdministrator(@PathVariable String email)
	 {
		 return AdminRepo.findByEmail(email);
	 }
	 
	/* @PostMapping("/findCitizen")
		public Citizen AddCitizen(@RequestBody Citizen citizen)
		{
			return citizenRep.save(citizen);
		
			
			}
		*/
	
	
	
	
	
	  /*@RequestMapping("/Chekevote") public String ChekeName(@RequestParam String
	  nom ,Model model, HttpSession session)
	  
	  {
	  
	 // Citizen citizen=citizenRep.findByName(nom); 
	  session.setAttribute("citizen",citizen); 
	  if(!citizen.isHasvoted()) {
	  
	  List<Candidate> candidates=CandidateRep.findAll();
	  model.addAttribute("candidates", candidates); return "/performVoted.html"; }
	  else { return "/AlreadyVoted.html"; }
	  
	  }*/
	  
	  
	  @RequestMapping("voteFor") public String voteFor(@RequestParam Long
	  id,HttpSession session) { Citizen c=
	  (Citizen)session.getAttribute("citizen");
	  
	  if(!c.isHasvoted()) { c.setHasvoted(true); Candidate candidat
	  =CandidateRep.findById(id).get();
	  candidat.setNbVotes(candidat.getNbVotes()+1); CandidateRep.save(candidat);
	  citizenRep.save(c); return "voted.html"; }
	  
	  return "voted.html"; }
	 
}

