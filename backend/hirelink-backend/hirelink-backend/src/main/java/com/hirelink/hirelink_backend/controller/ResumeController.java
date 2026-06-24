package com.hirelink.hirelink_backend.controller;

import java.io.File;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin("*")
public class ResumeController {

    @PostMapping("/upload")
    public String uploadResume(
            @RequestParam("file") MultipartFile file) {

        try {

            System.out.println("Resume Upload Request Received");
            System.out.println("File Name: " + file.getOriginalFilename());
            System.out.println("File Size: " + file.getSize());

            String uploadDir = System.getProperty("user.dir") + "/uploads/";

            File dir = new File(uploadDir);

            if (!dir.exists()) {
                dir.mkdirs();
            }

            String fileName = file.getOriginalFilename();

            File destination = new File(uploadDir + fileName);

            System.out.println("Saving To: " + destination.getAbsolutePath());

            file.transferTo(destination);

            System.out.println("Resume Uploaded Successfully");

            return "Resume Uploaded Successfully";

        } catch (Exception e) {

            e.printStackTrace();

            return "Upload Failed : " + e.getMessage();
        }
    }
}