/*
These functions help "Exercise 1/index.html" to produce a table with user-
specified length.
@author:     Carrie Carlton
@modified:   4 May 18, "May the fourth be with you"
*/

"use strict";

function buildOmbreTable(numberOfRows) {
    var buildTableText = document.getElementById("buildTableText");
    buildTableText.innerHTML = "Default is 256 lines for shades of the color red.";

    var table = document.createElement("TABLE");
    table.setAttribute("id", "myTable");
    document.body.appendChild(table);  //write table to end of HTML document

    for (var i = 0; i < numberOfRows; i++) {
        var x = table.insertRow(0); //creates empty <tr> element, adds to table, param is column number
        x.setAttribute("id", "myTr");
        x.insertCell(0);
    }//for

    document.getElementById("myTable").appendChild(y); //adds table to end of HTML

}//function
