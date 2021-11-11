<?php
    require 'layout/header.php';
?>
<section id="main">
    <article>
        <table style="margin-left: auto;  margin-right: auto;  border: 1px solid black;">
            <tr style="border: 1px solid black;">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
            </tr>
            <?php
                require 'bd_connection.php';
                $query = "SELECT * FROM attendees";
                $result = $conn->query($query);
                /* numeric array */
                while ($row = $result->fetch_array(MYSQLI_NUM)) {
                    echo "<tr class='xd' style=\"border: 1px solid black;\">";
                    echo "<td>" . $row[0] . "</td>";
                    echo "<td>" . $row[1] . "</td>";
                    echo "<td>" . $row[2] . "</td>";
                    echo "<td>" . $row[3] . "</td>";
                    echo "</tr>";
                }
            ?>
        </table>
    </article>
</section>
<?php
    require 'layout/footer.php';
?>