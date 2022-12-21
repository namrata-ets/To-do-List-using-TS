interface taskData{

  tid:string;
  name:string;
  status:string;
  stime:string;
  etime:string;
}
function storeData():void{

    var formdata=JSON.parse(localStorage.getItem('formdata'))||[];
  
    formdata.push({
  
      tid:(<HTMLInputElement>document.getElementById("taskid")).value,
      name:(<HTMLInputElement>document.getElementById("taskname")).value,
      status:(<HTMLInputElement>document.getElementById("status")).value,
      stime:(<HTMLInputElement>document.getElementById("starttime")).value,
      etime:(<HTMLInputElement>document.getElementById("endtime")).value,
  
    });
  
    localStorage.setItem('formdata',JSON.stringify(formdata));
   
    generateTable();
}
function generateTable() {

  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  // creates a table row
    const row = document.createElement("tr");
    const h1=document.createElement("th");
    const c1=document.createTextNode('TaskID');
    h1.appendChild(c1);
    row.appendChild(h1);
    
    const h2=document.createElement("th");
    const c2=document.createTextNode('TaskName');
    h2.appendChild(c2);
    row.appendChild(h2);
   
    const h3=document.createElement("th");
    const c3=document.createTextNode('Status');
    h3.appendChild(c3);
    row.appendChild(h3);
   
    const h4=document.createElement("th");
    const c4=document.createTextNode('Start Time');
    h4.appendChild(c4);
    row.appendChild(h4);

    const h5=document.createElement("th");
    const c5=document.createTextNode('End Time');
    h5.appendChild(c5);
    row.appendChild(h5);

    const h6=document.createElement("th");
    const c6=document.createTextNode('Edit/Delete');
    h6.appendChild(c6);
    row.appendChild(h6);


    // add the row to the end of the table body
    tblBody.appendChild(row);

    var data=JSON.parse(localStorage.getItem('formdata'));
    console.log("SIze of Data parsed from LS is "+data.length);

 
    for(var i=0;i<data.length;i++){
      var row2=document.createElement("tr");
     //  row2.deleteCell(-1);
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell1 = document.createElement("td");
      const cellText1 = document.createTextNode(data[i].tid);
      cell1.appendChild(cellText1);
      row2.appendChild(cell1);

      const cell2 = document.createElement("td");
      const cellText2 = document.createTextNode(data[i].name);
      cell2.appendChild(cellText2);
      row2.appendChild(cell2);

      const cell3 = document.createElement("td");
      const cellText3 = document.createTextNode(data[i].status);
      cell3.appendChild(cellText3);
      row2.appendChild(cell3);

      const cell4 = document.createElement("td");
      const cellText4 = document.createTextNode(data[i].stime);
      cell4.appendChild(cellText4);
      row2.appendChild(cell4);

      const cell5 = document.createElement("td");
      const cellText5 = document.createTextNode(data[i].etime);
      cell5.appendChild(cellText5);
      row2.appendChild(cell5);

      const cell6=document.createElement("td");
      //const cellText6=document.createTextNode(`<button type="button" onclick="edit(this,${i})">
      //<i class="fa-solid fa-pen-to-square"></i></button>
      //<button type="button" onclick="remove(this,${i})"><i class="fa-solid fa-trash"></i></button>`);
      const cellText6=document.createElement("button");
      const cellText7=document.createElement("button");
      cellText6.innerHTML='<i class="fa-solid fa-pen-to-square"></i>';
      cell6.appendChild(cellText6);
      cellText7.innerHTML='<i class="fa-solid fa-trash"></i>';
      cell6.appendChild(cellText7);
      
      row2.appendChild(cell6);

      tblBody.appendChild(row2);
    }
 /*data.forEach((element:taskData,index:number) => {
      //console.log(element,index);
      //console.log(element.tid,element.name,element.status,element.stime,element.etime);
 
      var row2 = document.createElement("tr");
    
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell1 = document.createElement("td");
      const cellText1 = document.createTextNode(element.tid);
      cell1.appendChild(cellText1);
      row2.appendChild(cell1);

      const cell2 = document.createElement("td");
      const cellText2 = document.createTextNode(element.name);
      cell2.appendChild(cellText2);
      row2.appendChild(cell2);

      const cell3 = document.createElement("td");
      const cellText3 = document.createTextNode(element.status);
      cell3.appendChild(cellText3);
      row2.appendChild(cell3);

      const cell4 = document.createElement("td");
      const cellText4 = document.createTextNode(element.stime);
      cell4.appendChild(cellText4);
      row2.appendChild(cell4);

      const cell5 = document.createElement("td");
      const cellText5 = document.createTextNode(element.etime);
      cell5.appendChild(cellText5);
      row2.appendChild(cell5);

      tblBody.appendChild(row2);
    });*/

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);

    // appends <table> into <body>
    document.body.appendChild(tbl);

    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
    tbl.setAttribute("align","center");
}