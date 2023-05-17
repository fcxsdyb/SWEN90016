package com.swen90016.vr1family.controller;

import com.swen90016.vr1family.model.DonorInformation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DonorInformationController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/donors/information")
    public List<DonorInformation> getDonors() {
        String sql = "SELECT donor_id, name, age, address, phone_number, email, principal_contact_person, is_organization FROM Donors";

        List<DonorInformation> donorInfor = jdbcTemplate.query(sql, (rs, rowNum) -> {
            DonorInformation donorInformation = new DonorInformation();
            donorInformation.setId(rs.getInt("donor_id"));
            donorInformation.setName(rs.getString("name"));
            donorInformation.setAge(rs.getInt("age"));
            donorInformation.setAddress(rs.getString("address"));
            donorInformation.setPhoneNumber(rs.getInt("phone_number"));
            donorInformation.setEmail(rs.getString("email"));
            donorInformation.setContact(rs.getString("principal_contact_person"));
            donorInformation.setIsOrganization(rs.getInt("is_organization"));
            return donorInformation;
        });

        return donorInfor;
    }
}
