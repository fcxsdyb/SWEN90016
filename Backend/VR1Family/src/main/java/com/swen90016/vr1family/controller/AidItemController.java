package com.swen90016.vr1family.controller;

import com.swen90016.vr1family.model.AidItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AidItemController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/aid/item")
    public List<AidItem> getAids() {
        String sql = "SELECT item_id, category_id, kit_id, expiry_date, main_ingredients, allergen_info, size, brand, quantity FROM AidItems";

        List<AidItem> aidItems = jdbcTemplate.query(sql, (rs, rowNum) -> {
            AidItem item = new AidItem();
            item.setId(rs.getInt("item_id"));
            item.setCategoryId(rs.getInt("category_id"));
            item.setKitId(rs.getInt("kit_id"));
            item.setExpiryDate(rs.getString("expiry_date"));
            item.setMainIngredients(rs.getString("main_ingredients"));
            item.setAllergenInfo(rs.getString("allergen_info"));
            item.setSize(rs.getString("size"));
            item.setBrand(rs.getString("brand"));
            item.setQuantity(rs.getInt("quantity"));
            return item;
        });

        return aidItems;
    }
}
