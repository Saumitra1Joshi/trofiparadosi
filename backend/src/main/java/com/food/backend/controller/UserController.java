package com.food.backend.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.food.backend.entity.Role;
import com.food.backend.entity.User;
import com.food.backend.entity.UserRole;
import com.food.backend.helper.UserFoundException;
import com.food.backend.helper.UserNotFoundException;
import com.food.backend.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@PostMapping("/")
	public User createUser(@RequestBody User user) throws Exception
	{
		
		Set<UserRole> roles=new HashSet<>();
		//encoding password using bcrypt
		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
		user.setProfile("default.png");
		Role role=new Role();
		role.setRoleId(45L);
		role.setRoleName("Normal");
		
		UserRole userRole=new UserRole();
		userRole.setUser(user);
		userRole.setRole(role);
		
		
		
		roles.add(userRole);
		
		return this.userService.createUser(user, roles);
	}
	
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username){
		return this.userService.getUser(username);
	}
	
	 @ExceptionHandler(UserFoundException.class)
	    public ResponseEntity<?> exceptionHandler(UserFoundException ex) {
	        return ResponseEntity.ok(ex.getMessage());
	    }
	
}
