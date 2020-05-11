package com.bVotingSystemApp.Entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.validator.constraints.UniqueElements;
@Table(name = "Citizens")
@Entity
public class Citizen {
	public Citizen() {
		super();
	}
	@Id
	@GeneratedValue
	private Long id;
	private String nom;
	private String prenom;
	private Date datenaissance;
	private String adresse;
	private String idnational;
	
	public String getIdNational() {
		return idnational;
	}
	public void setIdNational(String idNational) {
		idnational = idNational;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public Date getDateNaissance() {
		return datenaissance;
	}
	public void setDateNaissance(Date dateNaissance) {
		this.datenaissance = dateNaissance;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return nom;
	}
	public void setName(String name) {
		this.nom = name;
	}
	
	public Citizen(String name, String prenom, Date dateNaissance, String adresse,String IdNational) {
		super();
		this.nom = name;
		this.prenom = prenom;
		this.datenaissance = dateNaissance;
		this.adresse = adresse;
		this.hasvoted=false;
		this.idnational=IdNational;
	}
	private boolean hasvoted;

	public boolean isHasvoted() {
		return hasvoted;
	}
	public void setHasvoted(boolean hasvoted) {
		this.hasvoted = hasvoted;
	}
	
}
