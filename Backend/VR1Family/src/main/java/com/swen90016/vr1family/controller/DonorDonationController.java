package com.swen90016.vr1family.controller;

import com.swen90016.vr1family.model.DonorDonation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DonorDonationController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/donors/donation")
    public List<DonorDonation> getDonors() {
        String sql = "SELECT donation_id, donor_id, item_id FROM DonorDonations";

        List<DonorDonation> donorDonations = jdbcTemplate.query(sql, (rs, rowNum) -> {
            DonorDonation donation = new DonorDonation();
            donation.setId(rs.getInt("donation_id"));
            donation.setDonorId(rs.getInt("donor_id"));
            donation.setItemId(rs.getInt("item_id"));
            return donation;
        });

        return donorDonations;
    }
}
