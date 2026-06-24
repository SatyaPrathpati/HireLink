package com.hirelink.hirelink_backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hirelink.hirelink_backend.model.Job;
import com.hirelink.hirelink_backend.repository.JobRepository;

@Service
public class RecommendationService {

    @Autowired
    private JobRepository jobRepository;

    public List<Job> recommendJobs(
            String userSkills) {

        List<Job> jobs = jobRepository.findAll();

        List<Job> recommendations = new ArrayList<>();

        for (Job job : jobs) {

            if (job.getSkills() != null &&
                    job.getSkills()
                            .toLowerCase()
                            .contains(
                                    userSkills.toLowerCase())) {

                recommendations.add(job);
            }
        }

        return recommendations;
    }
}