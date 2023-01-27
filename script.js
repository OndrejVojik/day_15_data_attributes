const allAlerts = document.querySelectorAll(".alert");

allAlerts.forEach(alert=>{
  const type = alert.getAttribute("data-type");

alert.classList.add("alert--"+type)
})