package com.pierrekalil.meta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pierrekalil.meta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
