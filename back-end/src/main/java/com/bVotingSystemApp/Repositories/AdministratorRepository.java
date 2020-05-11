package com.bVotingSystemApp.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bVotingSystemApp.Entity.Administrator;
import com.bVotingSystemApp.Entity.Citizen;

public interface AdministratorRepository extends JpaRepository<Administrator, Long> {
	
	public Administrator findByEmail(String email);

}
