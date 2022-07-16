package com.pierrekalil.meta.services; 

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.pierrekalil.meta.entities.Sale;
import com.pierrekalil.meta.repositories.SaleRepository;

@Service 
public class SaleService {
	
	@Autowired
	private SaleRepository repository;

	public List<Sale> findSales() {
		return repository.findAll();
	}
}
