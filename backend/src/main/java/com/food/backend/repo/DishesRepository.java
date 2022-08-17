package com.food.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.food.backend.entity.Dishes;

public interface DishesRepository extends JpaRepository<Dishes, Long> {

}
