package com.swen90016.vr1family.controller;

import com.swen90016.vr1family.model.RecipientIdentityDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RecipientIdentityDocumentController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/recipients/documents")
    public List<RecipientIdentityDocument> getRecipients() {
        String sql = "SELECT document_id, recipient_id, nationality, document_number, document_expiry_date, document_image FROM RecipientIdentityDocuments";

        List<RecipientIdentityDocument> recipientDocs = jdbcTemplate.query(sql, (rs, rowNum) -> {
            RecipientIdentityDocument doc = new RecipientIdentityDocument();
            doc.setId(rs.getInt("document_id"));
            doc.setRecipientId(rs.getInt("recipient_id"));
            doc.setNationality(rs.getString("nationality"));
            doc.setDocumentNumber(rs.getString("document_number"));
            doc.setDocumentExpiryDate(rs.getString("document_expiry_date"));
            doc.setDocumentImage(rs.getString("document_image"));
            return doc;
        });

        return recipientDocs;
    }
}
