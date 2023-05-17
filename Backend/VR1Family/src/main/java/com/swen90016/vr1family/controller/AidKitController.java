package com.swen90016.vr1family.controller;

import com.swen90016.vr1family.model.AidKit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AidKitController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/aid/kit")
    public List<AidKit> getAids() {
        String sql = "SELECT kit_id, kit_name, kit_items FROM AidKits";

        List<AidKit> aidKits = jdbcTemplate.query(sql, (rs, rowNum) -> {
            AidKit kit = new AidKit();
            kit.setId(rs.getInt("kit_id"));
            kit.setName(rs.getString("kit_name"));
            kit.setItem(rs.getString("kit_items"));
            return kit;
        });

        return aidKits;
    }
}
