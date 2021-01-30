var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxK6kPr-wtVA2AG0MNQrLlz96ahhGhmjg2kvj5YTX5DIpX3DqKy6F32dQ/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})