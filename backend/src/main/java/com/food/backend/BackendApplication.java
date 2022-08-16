package com.food.backend;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.food.backend.entity.Role;
import com.food.backend.entity.User;
import com.food.backend.entity.UserRole;
import com.food.backend.service.UserService;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {
	
	@Autowired
	private UserService userService;
	
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("starting code");
		
//		User user= new User();
//		user.setFirstName("Durgesh");
//		user.setLastName("Tiwari");
//		user.setUserName("Durgesh123");
//		user.setPassword("abc");
//		user.setEmail("abc@gmail.com");
//		
//		Role role1=new Role();
//		role1.setRoleId(44L);
//		role1.setRoleName("ADMIN");
//		
//		Set<UserRole> userRoleSet = new HashSet<>();
//		UserRole userRole = new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);
//		userRoleSet.add(userRole);
//		User user1 = this.userService.createUser(user, userRoleSet);
//		System.out.println(user1.getUserName());
	}

}
