package com.bVotingSystemApp.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bVotingSystemApp.Entity.Candidate;

public interface CandidatRepository extends JpaRepository<Candidate, Long>{

}
