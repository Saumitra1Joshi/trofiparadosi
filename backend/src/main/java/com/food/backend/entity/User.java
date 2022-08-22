package com.food.backend.entity;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table (name="users")
public class User implements UserDetails{
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private Long userId;
private String username;
private String password;
private String dOB;
private String firstName;
private String lastName;

private String email;
private String address;
private String city;
private String state;
private String country;
private String phoneNo;
private String profile;

private boolean enabled =true;

@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.EAGER,mappedBy="user")
@JsonIgnore
private Set<UserRole> userRoles=new HashSet<>();





public User() {
}






public User(Long userId, String username, String password, String dOB, String firstName, String lastName, String email,
		String address, String city, String state, String country, String phoneNo, String profile, boolean enabled) {
	this.userId = userId;
	this.username = username;
	this.password = password;
	this.dOB = dOB;
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.address = address;
	this.city = city;
	this.state = state;
	this.country = country;
	this.phoneNo = phoneNo;
	this.profile = profile;
	this.enabled = enabled;
}






public Set<UserRole> getUserRoles() {
	return userRoles;
}



public void setUserRoles(Set<UserRole> userRoles) {
	this.userRoles = userRoles;
}



public Long getUserId() {
	return userId;
}



public void setUserId(Long userId) {
	this.userId = userId;
}


public String getUsername() {
    return username;
}

public void setUsername(String username) {
	this.username = username;
}



public String getPassword() {
	return password;
}



public void setPassword(String password) {
	this.password = password;
}



public String getdOB() {
	return dOB;
}



public void setdOB(String dOB) {
	this.dOB = dOB;
}



public String getFirstName() {
	return firstName;
}



public void setFirstName(String firstName) {
	this.firstName = firstName;
}



public String getLastName() {
	return lastName;
}



public void setLastName(String lastName) {
	this.lastName = lastName;
}



public String getEmail() {
	return email;
}



public void setEmail(String email) {
	this.email = email;
}



public String getAddress() {
	return address;
}



public void setAddress(String address) {
	this.address = address;
}



public String getCity() {
	return city;
}



public void setCity(String city) {
	this.city = city;
}



public String getState() {
	return state;
}



public void setState(String state) {
	this.state = state;
}



public String getCountry() {
	return country;
}



public void setCountry(String country) {
	this.country = country;
}



public String getPhoneNo() {
	return phoneNo;
}



public void setPhoneNo(String phoneNo) {
	this.phoneNo = phoneNo;
}



public String getProfile() {
	return profile;
}



public void setProfile(String profile) {
	this.profile = profile;
}



public boolean isEnabled() {
	return enabled;
}



public void setEnabled(boolean enabled) {
	this.enabled = enabled;
}



@Override
public Collection<? extends GrantedAuthority> getAuthorities() {
	// TODO Auto-generated method stub
	  Set<Authority> set = new HashSet<>();
      this.userRoles.forEach(userRole -> {
          set.add(new Authority(userRole.getRole().getRoleName()));
      });


      return set;
}






@Override
public boolean isAccountNonExpired() {
	// TODO Auto-generated method stub
	return true;
}



@Override
public boolean isAccountNonLocked() {
	// TODO Auto-generated method stub
	return true;
}



@Override
public boolean isCredentialsNonExpired() {
	// TODO Auto-generated method stub
	return true;
}





}
