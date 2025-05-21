<script>
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // stop page reload
    const pickup = document.getElementById("pickup").value;
    const delivery = document.getElementById("delivery").value;

    alert(`Pickup: ${pickup}\nDelivery: ${delivery}`);
    
    // Here you can send data to a server/API
  });
</script>