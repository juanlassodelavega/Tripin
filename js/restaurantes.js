function search() {
    var search = document.getElementById("search").value;
    var start = document.getElementById("start").value;
    var guests = document.getElementById("guests").value;

    if (search.length == 0) {
        swal({
            text: "¡Rellena todos los campos!",
            icon: "error",
          });
    } else if (start.length == 0) {
        swal({
            text: "¡Rellena todos los campos!",
            icon: "error",
          });
    } else if (guests.length == 0) {
        swal({
            text: "¡Rellena todos los campos!",
            icon: "error",
          });
    } else {
        window.location.href = "busquedaRestaurantes.html";
    }
}
