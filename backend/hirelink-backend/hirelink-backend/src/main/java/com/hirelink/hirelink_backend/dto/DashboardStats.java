package com.hirelink.hirelink_backend.dto;

public class DashboardStats {

    private long totalJobs;
    private long totalApplications;
    private long acceptedApplications;
    private long rejectedApplications;
    private long pendingApplications;

    public long getTotalJobs() {
        return totalJobs;
    }

    public void setTotalJobs(long totalJobs) {
        this.totalJobs = totalJobs;
    }

    public long getTotalApplications() {
        return totalApplications;
    }

    public void setTotalApplications(long totalApplications) {
        this.totalApplications = totalApplications;
    }

    public long getAcceptedApplications() {
        return acceptedApplications;
    }

    public void setAcceptedApplications(long acceptedApplications) {
        this.acceptedApplications = acceptedApplications;
    }

    public long getRejectedApplications() {
        return rejectedApplications;
    }

    public void setRejectedApplications(long rejectedApplications) {
        this.rejectedApplications = rejectedApplications;
    }

    public long getPendingApplications() {
        return pendingApplications;
    }

    public void setPendingApplications(long pendingApplications) {
        this.pendingApplications = pendingApplications;
    }
}