package com.food.backend.repo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.food.backend.entity.Dishes;

@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "dishes", path = "dishes")

public interface DishesRepository extends JpaRepository<Dishes, Long> {
 Page<Dishes> findByCategoryId(@Param("id") long id, Pageable pageable);
 Page<Dishes> findByNameContaining(@RequestParam("name") String name, Pageable pageable);
}
