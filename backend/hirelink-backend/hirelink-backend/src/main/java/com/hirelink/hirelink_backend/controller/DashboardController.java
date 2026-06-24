package com.hirelink.hirelink_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hirelink.hirelink_backend.dto.DashboardStats;
import com.hirelink.hirelink_backend.repository.ApplicationRepository;
import com.hirelink.hirelink_backend.repository.JobRepository;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin("*")
public class DashboardController {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private ApplicationRepository applicationRepository;

    @GetMapping("/stats")
    public DashboardStats getStats() {

        DashboardStats stats = new DashboardStats();

        stats.setTotalJobs(
                jobRepository.count());

        stats.setTotalApplications(
                applicationRepository.count());

        stats.setAcceptedApplications(
                applicationRepository.countByStatus("ACCEPTED"));

        stats.setRejectedApplications(
                applicationRepository.countByStatus("REJECTED"));

        stats.setPendingApplications(
                applicationRepository.countByStatus("APPLIED"));

        return stats;
    }
}