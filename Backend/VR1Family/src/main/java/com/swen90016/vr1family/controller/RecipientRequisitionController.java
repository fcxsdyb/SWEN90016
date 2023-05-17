package com.swen90016.vr1family.controller;

import com.swen90016.vr1family.model.AidKit;
import com.swen90016.vr1family.model.RecipientRequisition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RecipientRequisitionController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/recipients/requisitions")
    public List<RecipientRequisition> getRecipients() {
        String sql = "SELECT requisition_id, recipient_id, item_id, quantity, notes FROM RecipientRequisitions";

        List<RecipientRequisition> recipientRequisitions = jdbcTemplate.query(sql, (rs, rowNum) -> {
            RecipientRequisition requisition = new RecipientRequisition();
            requisition.setId(rs.getInt("requisition_id"));
            requisition.setRecipientId(rs.getInt("recipient_id"));
            requisition.setItemId(rs.getInt("item_id"));
            requisition.setQuantity(rs.getInt("quantity"));
            requisition.setNotes(rs.getString("notes"));
            return requisition;
        });

        return recipientRequisitions;
    }

    @PostMapping("/recipients/requisitions")
    public RecipientRequisition addRecipients(@RequestBody RecipientRequisition recipientRequisition) {
        String sql = "INSERT INTO RecipientRequisitions (recipient_id, item_id, quantity, notes) VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql, recipientRequisition.getRecipientId(), recipientRequisition.getItemId(), recipientRequisition.getQuantity(), recipientRequisition.getNotes());

        // Get the last inserted id
        int id = jdbcTemplate.queryForObject("SELECT LAST_INSERT_ID()", Integer.class);

        recipientRequisition.setId(id);
        return recipientRequisition;
    }
}
