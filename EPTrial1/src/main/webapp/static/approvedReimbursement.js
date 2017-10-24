console.log("approvedReimbursement.js started")

window.onload = function(){
	console.log("approvedReimbursement.js on load function")
	document.getElementById('manager-container-approved').innerHTML = "";
	retrieveAllReimbursements();
}

function retrieveAllReimbursements(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(xhttp.readyState === 4 && xhttp.status === 200){
			var reimbursements = JSON.parse(xhttp.responseText);
					
			reimbursements.forEach((Reimbursement) => {
				document.getElementById('manager-container-approved').innerHTML += `
				<tr>
				<td>${Reimbursement.reimbId}</td>
				<td>${new Date(Reimbursement.reimbSubmitted).toString().substring(4, 15)}</td>
				<td>${Reimbursement.reimbAuthor}</td>
				<td>${Reimbursement.reimbDescription}</td>
				<td>${Reimbursement.reimbAmount}</td>
				</tr>				
				`;
			
			});
		}
		}
		xhttp.open('GET', '../Manager/Approved');
		xhttp.send()
		
	}
