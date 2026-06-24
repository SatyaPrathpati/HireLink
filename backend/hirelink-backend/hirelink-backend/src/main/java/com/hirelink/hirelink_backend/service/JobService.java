package com.hirelink.hirelink_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hirelink.hirelink_backend.model.Job;
import com.hirelink.hirelink_backend.repository.JobRepository;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }

    public Job updateJob(Long id, Job job) {

        Job existingJob = jobRepository.findById(id).orElseThrow();

        existingJob.setTitle(job.getTitle());
        existingJob.setCompany(job.getCompany());
        existingJob.setLocation(job.getLocation());
        existingJob.setSalary(job.getSalary());
        existingJob.setSkills(job.getSkills());
        existingJob.setDescription(job.getDescription());

        return jobRepository.save(existingJob);
    }
}