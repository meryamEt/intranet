package com.ettahour.IntranetIntelcom;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface EntiteRepositorio extends JpaRepository<Entite, Integer> {
 
	List<Entite>findAll();
	Entite findOne (int id ) ;
	Entite Save (Entite E);
	void delete (Entite E ); 
}
