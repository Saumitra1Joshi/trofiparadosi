package com.food.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.food.backend.entity.Dishes;

@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "dishes", path = "dishes")

public interface DishesRepository extends JpaRepository<Dishes, Long> {
	
	
}
