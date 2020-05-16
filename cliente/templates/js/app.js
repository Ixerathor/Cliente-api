var xhr = $.ajax("https://repuestos2020.000webhostapp.com/repuestos/lista")
  .done(function (datos) {
    // console.log(datos);
    var data = JSON.parse(datos);
    $.each(data, function (key, val) {
      $("#resultados1").append(
        val.codigo+
        "<br/>"+"<br/>"
      );
      $("#resultados2").append(
      val.descripcion+
      "<br/>"+"<br/>"
      );
      $("#resultados3").append(
        val.marca +
        "<br/>"+"<br/>"
    );
      $("#resultados4").append(
          val.preciound +
          "<br/>"+"<br/>"
      );
    });
  })
  .fail(function () {
    console.log("Error lectura API");
  });
