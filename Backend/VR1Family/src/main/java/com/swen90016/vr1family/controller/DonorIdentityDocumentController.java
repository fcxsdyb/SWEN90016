package com.swen90016.vr1family.controller;

import com.swen90016.vr1family.model.DonorIdentityDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DonorIdentityDocumentController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/donors/documents")
    public List<DonorIdentityDocument> getDonors() {
        String sql = "SELECT document_id, donor_id, nationality, document_number, document_expiry_date, business_registration_details FROM DonorIdentityDocuments";

        List<DonorIdentityDocument> donorDocs = jdbcTemplate.query(sql, (rs, rowNum) -> {
            DonorIdentityDocument doc = new DonorIdentityDocument();
            doc.setId(rs.getInt("document_id"));
            doc.setDonorId(rs.getInt("donor_id"));
            doc.setNationality(rs.getString("nationality"));
            doc.setDocumentNumber(rs.getString("document_number"));
            doc.setDocumentExpiryDate(rs.getString("document_expiry_date"));
            doc.setBusinessRegistrationDetail(rs.getString("business_registration_details"));
            return doc;
        });

        return donorDocs;
    }
}
