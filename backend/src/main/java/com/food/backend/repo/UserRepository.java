package com.food.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.food.backend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
	public User findByUsername(String username);
}
