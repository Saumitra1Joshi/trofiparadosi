package com.food.backend.repo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


import com.food.backend.entity.Restaurtant;

@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "restaurants", path = "restaurantcategory")

public interface RestaurantRepository extends JpaRepository<Restaurtant, Long>{
	Page<Restaurtant> findByRestype(@Param("restype") String restype, Pageable pageable);
}
