function durationFormatter(value) {
  return value.secs + value.nanos / 1000000000.0;
}

function booleanFormatter(value) {
  if (value) {
    return "<span data-feather=\"check\"></span>";
  } else {
    return "<span data-feather=\"x\"></span>";
  }
}

function instanceFormatter(value, row, index) {
  return "<a href=\"nodes.html?i=" + value + "\">" + value + "</a>";
}

function domainsFormatter(value) {
  return value;
}

function shutdownFormatter() {
  return "<button type=\"button\" class=\"btn btn-danger btn-sm\"><span data-feather=\"trash-2\"></span></button>"
}
