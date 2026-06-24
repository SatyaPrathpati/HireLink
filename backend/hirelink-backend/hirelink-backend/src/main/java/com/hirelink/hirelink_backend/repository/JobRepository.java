package com.hirelink.hirelink_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hirelink.hirelink_backend.model.Job;

public interface JobRepository extends JpaRepository<Job, Long> {

}