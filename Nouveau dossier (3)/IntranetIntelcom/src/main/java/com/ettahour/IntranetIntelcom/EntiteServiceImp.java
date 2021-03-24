package com.ettahour.IntranetIntelcom;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class EntiteServiceImp implements EntiteService{

	@Autowired
	private EntiteRepositorio reposito; 
	@Override
	public List<Entite> lister() {
		return reposito.findAll();
	}

	@Override
	public Entite listEntiteId(int id) {
		
		return reposito.findOne(id);
	}

	@Override
	public Entite Add(Entite E) {
		
		return null;
	}

	@Override
	public Entite Edit(Entite E) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Entite delete(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
