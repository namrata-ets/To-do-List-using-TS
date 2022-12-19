function storeData() {
    var formdata = JSON.parse(localStorage.getItem('formdata')) || [];
    formdata.push({
        tid: document.getElementById("taskid").value,
        name: document.getElementById("taskname").value,
        status: document.getElementById("status").value,
        stime: document.getElementById("starttime").value,
        etime: document.getElementById("endtime").value
    });
    localStorage.setItem('formdata', JSON.stringify(formdata));
    generateTable();
}
function generateTable() {
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    // creating all cells
    // creates a table row
    var row = document.createElement("tr");
    var h1 = document.createElement("th");
    var c1 = document.createTextNode('TaskID');
    h1.appendChild(c1);
    row.appendChild(h1);
    var h2 = document.createElement("th");
    var c2 = document.createTextNode('TaskName');
    h2.appendChild(c2);
    row.appendChild(h2);
    var h3 = document.createElement("th");
    var c3 = document.createTextNode('Status');
    h3.appendChild(c3);
    row.appendChild(h3);
    var h4 = document.createElement("th");
    var c4 = document.createTextNode('Start Time');
    h4.appendChild(c4);
    row.appendChild(h4);
    var h5 = document.createElement("th");
    var c5 = document.createTextNode('End Time');
    h5.appendChild(c5);
    row.appendChild(h5);
    var row2 = document.createElement("tr");
    var data = JSON.parse(localStorage.getItem('formdata'));
    console.log("SIze of Data parsed from LS is " + data.length);
    data.forEach(function (element, index) {
        console.log(element, index);
        console.log(element.tid, element.name, element.status, element.stime, element.etime);
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell1 = document.createElement("td");
        var cellText1 = document.createTextNode(element.tid);
        cell1.appendChild(cellText1);
        row2.appendChild(cell1);
        var cell2 = document.createElement("td");
        var cellText2 = document.createTextNode(element.name);
        cell2.appendChild(cellText2);
        row2.appendChild(cell2);
        var cell3 = document.createElement("td");
        var cellText3 = document.createTextNode(element.status);
        cell3.appendChild(cellText3);
        row2.appendChild(cell3);
        var cell4 = document.createElement("td");
        var cellText4 = document.createTextNode(element.stime);
        cell4.appendChild(cellText4);
        row2.appendChild(cell4);
        var cell5 = document.createElement("td");
        var cellText5 = document.createTextNode(element.etime);
        cell5.appendChild(cellText5);
        row2.appendChild(cell5);
    });
    // add the row to the end of the table body
    tblBody.appendChild(row);
    tblBody.appendChild(row2);
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
    tbl.setAttribute("align", "center");
}
