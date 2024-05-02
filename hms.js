document.addEventListener("DOMContentLoaded", function() {
  // Get the policy ID input element
  var policyIDInput = document.getElementById("policyID");

  // Add event listener to the form
  document.getElementById("insuranceForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Generate a random number (you can use any logic to generate your desired number)
    var randomNumber = Math.floor(Math.random() * 10000) + 1;

    // Construct the policy ID with "POL___" prefix
    var policyIDValue = "POL" + randomNumber;

    // Set the constructed policy ID value to the input field
    policyIDInput.value = policyIDValue;

    // Submit the form
    this.submit();
  })
});
function openPatientTab() {
  window.open('patient.html', '_blank');
}
function openambulanceTab() {
  window.open('ambulance.html', '_blank');
}
function openbillingTab() {
  window.open('billing.html', '_blank');
}
function opendepartmentTab() {
  window.open('department.html', '_blank');
}
function openmediactionTab() {
  window.open('medication.html', '_blank');
}
function openphysicianTab() {
  window.open('physician.html', '_blank');
}
function openinsuranceTab() {
  window.open('insurance.html', '_blank');
}
function openradiologistTab() {
  window.open('radiologist.html', '_blank');
}
function openroomTab() {
  window.open('room.html', '_blank');
}
function openmaintenanceTab() {
  window.open('maintenance.html', '_blank');
}
function opennurseTab() {
  window.open('nurse.html', '_blank');
}

  