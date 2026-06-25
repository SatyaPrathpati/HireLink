package com.hirelink.hirelink_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hirelink.hirelink_backend.model.Job;
import com.hirelink.hirelink_backend.service.RecommendationService;

@RestController
@RequestMapping("/api/recommendations")
public class RecommendationController {

    @Autowired
    private RecommendationService recommendationService;

    @GetMapping("/{skills}")
    public List<Job> getRecommendations(
            @PathVariable String skills) {

        return recommendationService
                .recommendJobs(skills);
    }
}