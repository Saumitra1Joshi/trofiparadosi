package com.food.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.food.backend.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
}

