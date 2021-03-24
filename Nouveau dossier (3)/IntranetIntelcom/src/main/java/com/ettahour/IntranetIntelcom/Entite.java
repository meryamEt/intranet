package com.ettahour.IntranetIntelcom;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="Entite")
public class Entite {
	@Id
	@Column 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private  int id;
	@Column
	private String nom ;
	@Column 
    private String description ;
	@Column
	private String code ;
	@Column
	private int responsblenv1 ;
	@Column
	private int responsblenv2 ;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public int getResponsblenv1() {
		return responsblenv1;
	}
	public void setResponsblenv1(int responsblenv1) {
		this.responsblenv1 = responsblenv1;
	}
	public int getResponsblenv2() {
		return responsblenv2;
	}
	public void setResponsblenv2(int responsblenv2) {
		this.responsblenv2 = responsblenv2;
	}
	
	
	
	
	
	

}
