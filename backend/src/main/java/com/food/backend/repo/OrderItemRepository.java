package com.food.backend.repo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.food.backend.entity.OrderItem;
@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "orderinitem", path = "orderinitem")

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
	
	 Page<OrderItem> findByOrderId(@Param("id") long id, Pageable pageable);

}
