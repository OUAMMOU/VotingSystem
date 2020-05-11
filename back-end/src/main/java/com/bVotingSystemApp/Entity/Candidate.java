package com.bVotingSystemApp.Entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.validator.constraints.UniqueElements;

@Table(name="Cnadidates")
@Entity
public class Candidate {
	
	@Id
	@GeneratedValue
	private Long id;
	private String namecomplet;
	private Integer NbVotes;
	
	
	
	public Candidate() {
		super();
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getName() {
		return namecomplet;
	}
	public void setName(String name) {
		this.namecomplet = name;
	}
	
	public Candidate(Long id, String name) {
		super();
		this.id = id;
		this.namecomplet = name;
	}
	
	public Integer getNbVotes() {
		return NbVotes;
	}
	public void setNbVotes(Integer nbVotes) {
		NbVotes = nbVotes;
	}
}
