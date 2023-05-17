package com.swen90016.vr1family.controller;

import com.swen90016.vr1family.model.RecipientChildren;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RecipientChildrenController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/recipients/children")
    public List<RecipientChildren> getRecipients() {
        String sql = "SELECT id, recipient_id, name, age FROM Kids";

        List<RecipientChildren> recipientChildren = jdbcTemplate.query(sql, (rs, rowNum) -> {
            RecipientChildren children = new RecipientChildren();
            children.setId(rs.getInt("id"));
            children.setRecipientId(rs.getInt("recipient_id"));
            children.setName(rs.getString("name"));
            children.setAge(rs.getInt("age"));
            return children;
        });

        return recipientChildren;
    }
}
