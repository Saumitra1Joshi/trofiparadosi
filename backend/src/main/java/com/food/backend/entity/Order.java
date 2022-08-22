package com.food.backend.entity;

import java.math.BigDecimal;
import java.util.*;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


@Entity
@Table(name="orders")
public class Order {
		@Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    
	    private Long id;
		
	    private String orderTrackingNumber;

	    
	    private int totalQuantity;

	    
	    private BigDecimal totalPrice;

	    
	    private String status;

	    
	    @CreationTimestamp
	    private Date dateCreated;

	   
	    @UpdateTimestamp
	    private Date lastUpdated;

	    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order")
	    private Set<OrderItem> orderItems = new HashSet<>();

	    @ManyToOne
	    @JoinColumn(name = "customer_id")
	    private Customer customer;


	    public void add(OrderItem item) {

	        if (item != null) {
	            if (orderItems == null) {
	                orderItems = new HashSet<>();
	            }

	            orderItems.add(item);
	            item.setOrder(this);
	        }
	    }
	    
	    
	    
		public Order() {
		}



		public Order(Long id, String orderTrackingNumber, int totalQuantity, BigDecimal totalPrice, String status,
				Date dateCreated, Date lastUpdated, Set<OrderItem> orderItems, Customer customer) {
			super();
			this.id = id;
			this.orderTrackingNumber = orderTrackingNumber;
			this.totalQuantity = totalQuantity;
			this.totalPrice = totalPrice;
			this.status = status;
			this.dateCreated = dateCreated;
			this.lastUpdated = lastUpdated;
			this.orderItems = orderItems;
			this.customer = customer;
		}


		public Long getId() {
			return id;
		}


		public void setId(Long id) {
			this.id = id;
		}


		public String getOrderTrackingNumber() {
			return orderTrackingNumber;
		}


		public void setOrderTrackingNumber(String orderTrackingNumber) {
			this.orderTrackingNumber = orderTrackingNumber;
		}


		public int getTotalQuantity() {
			return totalQuantity;
		}


		public void setTotalQuantity(int totalQuantity) {
			this.totalQuantity = totalQuantity;
		}


		public BigDecimal getTotalPrice() {
			return totalPrice;
		}


		public void setTotalPrice(BigDecimal totalPrice) {
			this.totalPrice = totalPrice;
		}


		public String getStatus() {
			return status;
		}


		public void setStatus(String status) {
			this.status = status;
		}


		public Date getDateCreated() {
			return dateCreated;
		}


		public void setDateCreated(Date dateCreated) {
			this.dateCreated = dateCreated;
		}


		public Date getLastUpdated() {
			return lastUpdated;
		}


		public void setLastUpdated(Date lastUpdated) {
			this.lastUpdated = lastUpdated;
		}


		public Set<OrderItem> getOrderItems() {
			return orderItems;
		}


		public void setOrderItems(Set<OrderItem> orderItems) {
			this.orderItems = orderItems;
		}


		public Customer getCustomer() {
			return customer;
		}


		public void setCustomer(Customer customer) {
			this.customer = customer;
		}
	    
}
