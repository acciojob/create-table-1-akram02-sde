
function insert_Row() {
    //Write your code here
	const table = document.getElementById('sampleTable');
	const newRow = table.insertRow(0);
	const cell1 = newRow.insertCell();
	const cell2 = newRow.insertCell();
	cell1.innerText = "New Cell1"
	cell2.innerText = "New Cell2"
  
}
