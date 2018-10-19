<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div></div>
</body>

<script src="//cdn.bootcss.com/underscore.js/1.8.3/underscore.js"></script>
<script type="text/template" id="tpl">
  <ul class="list">
    <%_.each(obj, function(e, i, a){%>
      <% if (i === a.length - 1) %>
        <li class="last-item"><%=e.name%></li>
      <% else %>
        <li><%=e.name%></li>
    <%})%>
  </ul>
</script>

<script>
// 模拟数据
var data = [{name: "apple"}, {name: "orange"}, {name: "peach"}];

var compiled = _.template(document.getElementById("tpl").innerHTML);
var str = compiled(data);
document.querySelector("div").innerHTML = str;
</script>

</html>