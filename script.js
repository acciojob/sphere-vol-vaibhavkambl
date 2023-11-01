function volume_sphere() {
  // Get the input value from the radius field
  var radius = document.getElementById("radius").value;

  // Calculate the volume of the sphere
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Update the volume field with the calculated volume
  document.getElementById("volume").value = volume.toFixed(4); // fixed to 4 decimal places
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
