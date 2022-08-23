package com.food.backend.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="customer")
public class Customer {
	  	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String customerName;
	    
        private String phoneno;
        private String email;
        private String address;
        @Column(unique = true)
        private String customerid;

	    public String getCustomerid() {
			return customerid;
		}




		public void setCustomerid(String customerid) {
			this.customerid = customerid;
		}

		@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
	    private Set<Order> orders = new HashSet<>();

	    public void add(Order order) {

	        if (order != null) {

	            if (orders == null) {
	                orders = new HashSet<>();
	            }

	            orders.add(order);
	            order.setCustomer(this);
	        }
	    }
	    
	    
	    

		public Customer() {
		}


		public Customer(Long id, String customerName, String phoneno, String email, String address, String customerid,
				Set<Order> orders) {
			super();
			this.id = id;
			this.customerName = customerName;
			this.phoneno = phoneno;
			this.email = email;
			this.address = address;
			this.customerid = customerid;
			this.orders = orders;
		}




		public String getCustomerName() {
			return customerName;
		}




		public void setCustomerName(String customerName) {
			this.customerName = customerName;
		}




		public String getPhoneno() {
			return phoneno;
		}




		public void setPhoneno(String phoneno) {
			this.phoneno = phoneno;
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




		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		

		public Set<Order> getOrders() {
			return orders;
		}

		public void setOrders(Set<Order> orders) {
			this.orders = orders;
		}
	    
}
