package com.bVotingSystemApp.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bVotingSystemApp.Entity.Citizen;

public interface CitizenRepo extends JpaRepository<Citizen, Long>{

	//public Citizen findByName(String name);
	public Citizen findByIdnational(String IdNational);
}
