package com.hirelink.hirelink_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hirelink.hirelink_backend.model.Application;
import com.hirelink.hirelink_backend.model.InterviewRequest;
import com.hirelink.hirelink_backend.repository.ApplicationRepository;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    private EmailService emailService;

    // Apply for Job
    public Application applyForJob(Application application) {

        return applicationRepository.save(application);
    }

    // Get All Applications
    public List<Application> getAllApplications() {

        return applicationRepository.findAll();
    }

    // Get Applicants by Job ID
    public List<Application> getApplicantsByJobId(
            Long jobId) {

        return applicationRepository.findByJobId(jobId);
    }

    // Get Applications of Logged-in User
    public List<Application> getUserApplications(
            String email) {

        return applicationRepository
                .findByApplicantEmail(email);
    }

    // Accept Application
    public Application acceptApplication(Long id) {

        Application application = applicationRepository
                .findById(id)
                .orElse(null);

        if (application != null) {

            application.setStatus("ACCEPTED");

            applicationRepository.save(application);

            try {

                emailService.sendEmail(
                        application.getApplicantEmail(),
                        "Application Accepted",
                        "Congratulations "
                                + application.getApplicantName()
                                + ", your application has been ACCEPTED.");

            } catch (Exception e) {

                System.out.println(
                        "Email sending failed: "
                                + e.getMessage());
            }

            return application;
        }

        return null;
    }

    // Reject Application
    public Application rejectApplication(Long id) {

        Application application = applicationRepository
                .findById(id)
                .orElse(null);

        if (application != null) {

            application.setStatus("REJECTED");

            applicationRepository.save(application);

            try {

                emailService.sendEmail(
                        application.getApplicantEmail(),
                        "Application Rejected",
                        "Hello "
                                + application.getApplicantName()
                                + ", unfortunately your application has been REJECTED.");

            } catch (Exception e) {

                System.out.println(
                        "Email sending failed: "
                                + e.getMessage());
            }

            return application;
        }

        return null;
    }

    // Schedule Interview
    public Application scheduleInterview(
            Long id,
            InterviewRequest request) {

        Application application = applicationRepository
                .findById(id)
                .orElse(null);

        if (application != null) {

            application.setInterviewDate(
                    request.getInterviewDate());

            application.setInterviewTime(
                    request.getInterviewTime());

            application.setMeetingLink(
                    request.getMeetingLink());

            applicationRepository.save(application);

            try {

                emailService.sendEmail(
                        application.getApplicantEmail(),
                        "Interview Scheduled",
                        "Dear "
                                + application.getApplicantName()
                                + "\n\nInterview Date: "
                                + request.getInterviewDate()
                                + "\nInterview Time: "
                                + request.getInterviewTime()
                                + "\nMeeting Link: "
                                + request.getMeetingLink());

            } catch (Exception e) {

                System.out.println(
                        "Email sending failed: "
                                + e.getMessage());
            }

            return application;
        }

        return null;
    }
}