package com.swen90016.vr1family.controller;

import com.swen90016.vr1family.model.AidCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AidCategoryController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/aid/category")
    public List<AidCategory> getAids() {
        String sql = "SELECT category_id, category_name, inventory_status FROM AidCategories";

        List<AidCategory> aidCategories = jdbcTemplate.query(sql, (rs, rowNum) -> {
            AidCategory category = new AidCategory();
            category.setId(rs.getInt("category_id"));
            category.setName(rs.getString("category_name"));
            category.setStatus(rs.getString("inventory_status"));
            return category;
        });

        return aidCategories;
    }

    @PostMapping("/aid/category")
    public AidCategory addAid(@RequestBody AidCategory aidCategory) {
        String sql = "INSERT INTO AidCategories (category_name, inventory_status) VALUES (?, ?)";
        jdbcTemplate.update(sql, aidCategory.getName(), aidCategory.getStatus());

        // Get the last inserted id
        int id = jdbcTemplate.queryForObject("SELECT LAST_INSERT_ID()", Integer.class);

        aidCategory.setId(id);
        return aidCategory;
    }
}
