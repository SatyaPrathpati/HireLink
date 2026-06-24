package com.hirelink.hirelink_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hirelink.hirelink_backend.model.Application;

public interface ApplicationRepository
                extends JpaRepository<Application, Long> {

        List<Application> findByJobId(Long jobId);

        List<Application> findByApplicantEmail(
                        String applicantEmail);

        long countByStatus(String status);
}
