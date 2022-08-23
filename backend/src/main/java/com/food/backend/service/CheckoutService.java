package com.food.backend.service;

import com.food.backend.dto.Purchase;
import com.food.backend.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
