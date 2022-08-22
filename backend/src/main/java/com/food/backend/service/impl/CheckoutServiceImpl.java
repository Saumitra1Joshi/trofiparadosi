package com.food.backend.service.impl;


import java.util.Set;
import java.util.UUID;

import javax.transaction.Transactional;


import org.springframework.stereotype.Service;

import com.food.backend.dto.Purchase;
import com.food.backend.dto.PurchaseResponse;
import com.food.backend.entity.Customer;
import com.food.backend.entity.Order;
import com.food.backend.entity.OrderItem;
import com.food.backend.repo.CustomerRepository;
import com.food.backend.service.CheckoutService;

@Service
public class CheckoutServiceImpl implements CheckoutService{

	private CustomerRepository customerRepository;

    public CheckoutServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) {

        // retrieve the order info from dto
        Order order =  purchase.getOrder();

        // generate tracking number
        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        // populate order with orderItems
        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(item -> order.add(item));


        // populate customer with order
        Customer customer = purchase.getCustomer();
        
        //check for existing customer
        String thecustomerid =customer.getCustomerid();
        
        Customer customerFromDb = customerRepository.findByCustomerid(thecustomerid);
        
        if(customerFromDb!=null)
        {
        	customer=customerFromDb;
        }
        
        customer.add(order);

        // save to the database
        customerRepository.save(customer);

        // return a response
        return new PurchaseResponse(orderTrackingNumber);
    }

    private String generateOrderTrackingNumber() {

        // generate a random UUID number (UUID version-4)
        // For details see: https://en.wikipedia.org/wiki/Universally_unique_identifier
        //
        return UUID.randomUUID().toString();
    }
}
