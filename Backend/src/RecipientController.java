import java.sql.*;

public class RecipientController {
    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        try {
            // Register JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Open a connection
            System.out.println("Connecting to database...");
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/VR1Family", "root", "qzzyh0808");

            // Execute a query
            System.out.println("Creating statement...");
            stmt = conn.createStatement();
            String sql;
            sql = "SELECT recipient_id, name, age, previous_address, total_family_members, partner_name, partner_age FROM Recipients";
            rs = stmt.executeQuery(sql);

            // Extract data from result set
            while (rs.next()) {
                //Retrieve by column name
                int id = rs.getInt("recipient_id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                String previous_address = rs.getString("previous_address");
                int total_family_members = rs.getInt("total_family_members");
                String partner_name = rs.getString("partner_name");
                int partner_age = rs.getInt("partner_age");


                //Display values
                System.out.print("ID: " + id);
                System.out.print(", Name: " + name);
                System.out.print(", Age: " + age);
                System.out.print("previous_address: " + previous_address);
                System.out.print(", total_family_members: " + total_family_members);
                System.out.print(", partner_name: " + partner_name);
                System.out.print("partner_age: " + partner_age);
            }
        } catch (Exception e) {
            //Handle errors for Class.forName
            e.printStackTrace();
        } finally {
            //finally block used to close resources
            try {
                if (stmt != null)
                    stmt.close();
            } catch (SQLException se2) {
            }// nothing we can do
            try {
                if (conn != null)
                    conn.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }//end finally try
        }//end try
        System.out.println("Goodbye!");
    }//end main
}//end FirstExample
