package com.ettahour.IntranetIntelcom;

import java.util.List;

public interface EntiteService {

	List<Entite>lister();
	
	Entite listEntiteId(int id ); 
	Entite Add(Entite E); 
	Entite Edit(Entite E); 
	Entite delete(int id); 
	
	
	
}
