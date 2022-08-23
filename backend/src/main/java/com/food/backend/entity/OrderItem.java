package com.food.backend.entity;

import java.math.BigDecimal;

import javax.persistence.*;

@Entity
@Table(name="order_item")
public class OrderItem {
	 @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	   
	    private Long id;

	    
	    private String imageUrl;

	    
	    private BigDecimal unitPrice;

	    
	    private int quantity;

	    private Long productId;
	    
	    private String productname;

	    @ManyToOne
	    @JoinColumn(name = "order_id")
	    private Order order;
	    
	    
	    
		public OrderItem() {
		}

		

		public OrderItem(Long id, String imageUrl, BigDecimal unitPrice, int quantity, Long productId,
				String productname, Order order) {
			super();
			this.id = id;
			this.imageUrl = imageUrl;
			this.unitPrice = unitPrice;
			this.quantity = quantity;
			this.productId = productId;
			this.productname = productname;
			this.order = order;
		}



		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getImageUrl() {
			return imageUrl;
		}

		public void setImageUrl(String imageUrl) {
			this.imageUrl = imageUrl;
		}

		public BigDecimal getUnitPrice() {
			return unitPrice;
		}

		public void setUnitPrice(BigDecimal unitPrice) {
			this.unitPrice = unitPrice;
		}

		public int getQuantity() {
			return quantity;
		}

		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}

		public Long getProductId() {
			return productId;
		}

		public void setProductId(Long productId) {
			this.productId = productId;
		}

		public Order getOrder() {
			return order;
		}

		public void setOrder(Order order) {
			this.order = order;
		}

		public String getProductname() {
			return productname;
		}

		public void setProductname(String productname) {
			this.productname = productname;
		}
	    
	    
}
