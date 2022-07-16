package com.pierrekalil.meta.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pierrekalil.meta.entities.Sale;
import com.pierrekalil.meta.services.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SaleService service;
	
	@GetMapping /*Para responder via web no protocolo http, verbo GET*/
	public List<Sale> findSales(){
		return service.findSales();
	}

}
