package com.swen90016.vr1family.controller;
import com.swen90016.vr1family.model.RecipientInformation;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RecipientInformationController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/recipients/information")
    public List<RecipientInformation> getRecipients() {
        String sql = "SELECT recipient_id, name, age, previous_address, total_family_members, partner_name, partner_age FROM Recipients";

        List<RecipientInformation> recipientInfor = jdbcTemplate.query(sql, (rs, rowNum) -> {
            RecipientInformation recipientInformation = new RecipientInformation();
            recipientInformation.setId(rs.getInt("recipient_id"));
            recipientInformation.setName(rs.getString("name"));
            recipientInformation.setAge(rs.getInt("age"));
            recipientInformation.setPreviousAddress(rs.getString("previous_address"));
            recipientInformation.setTotalFamilyMembers(rs.getInt("total_family_members"));
            recipientInformation.setPartnerName(rs.getString("partner_name"));
            recipientInformation.setPartnerAge(rs.getInt("partner_age"));
            return recipientInformation;
        });

        return recipientInfor;
    }
}
