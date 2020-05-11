package com.bVotingSystemApp.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Table(name ="Administrateurs" )
@Entity
public class Administrator {
	@Id
	private Long id;
	private String email;
	private String password;
	
	public Administrator() {
		super();
	}
	public Administrator(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	} 
	
}
