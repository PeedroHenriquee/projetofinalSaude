// scripts.js
document.getElementById('incidentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const incidentType = document.getElementById('incidentType').value;
    const patientName = document.getElementById('patientName').value;
    const worker = document.getElementById('worker').value;
    const description = document.getElementById('description').value;
    
    const incidentList = document.getElementById('incidentList');
    
    const incidentItem = document.createElement('div');
    incidentItem.className = 'incident-item';
    
    const incidentTitle = document.createElement('h3');
    incidentTitle.textContent = `${incidentType} - ${patientName}`;
    
    const incidentWorker = document.createElement('p');
    incidentWorker.textContent = `Trabalhador Alertado: ${worker}`;
    
    const incidentDescription = document.createElement('p');
    incidentDescription.textContent = description;
    
    incidentItem.appendChild(incidentTitle);
    incidentItem.appendChild(incidentWorker);
    incidentItem.appendChild(incidentDescription);
    
    incidentList.appendChild(incidentItem);
    
    document.getElementById('incidentForm').reset();
});
