package com.food.backend.service;

import java.util.Set;



import com.food.backend.entity.User;
import com.food.backend.entity.UserRole;

public interface UserService {

	// creating user
	 public User createUser(User user, Set<UserRole> userRoles) throws Exception;

	 //get user by username
	 public User getUser(String username);

}
