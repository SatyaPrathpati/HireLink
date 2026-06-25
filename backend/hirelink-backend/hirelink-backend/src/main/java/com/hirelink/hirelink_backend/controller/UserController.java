package com.hirelink.hirelink_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hirelink.hirelink_backend.model.LoginRequest;
import com.hirelink.hirelink_backend.model.User;
import com.hirelink.hirelink_backend.service.EmailService;
import com.hirelink.hirelink_backend.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = {
        "http://localhost:3000",
        "https://hire-link-eight.vercel.app"
})
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private EmailService emailService;

    // Register User
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    // Get All Users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // Login User
    @PostMapping("/login")
    public User login(@RequestBody LoginRequest request) {

        User user = userService.login(
                request.getEmail(),
                request.getPassword());

        return user;
    }

    @GetMapping("/test-email")
    public String testEmail() {

        emailService.sendEmail(
                "ammu@gmail.com",
                "HireLink Test",
                "Email configuration is working!");

        return "Email Sent Successfully";
    }
}