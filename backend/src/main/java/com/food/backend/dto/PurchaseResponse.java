package com.food.backend.dto;


public class PurchaseResponse {
	private String orderTrackingNumber ;

	public void setOrderTrackingNumber(String orderTrackingNumber) {
		this.orderTrackingNumber = orderTrackingNumber;
	}

	

	public PurchaseResponse(String orderTrackingNumber) {
		super();
		this.orderTrackingNumber = orderTrackingNumber;
	}



	public String getOrderTrackingNumber() {
		return orderTrackingNumber;
	}
	
}
