package com.food.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.food.backend.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
	
	Customer findByCustomerid (String thecustomerid );

}
