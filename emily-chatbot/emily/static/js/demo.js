<script>
var nav = // the content - example of bootstrap's nav
'<nav class="navbar navbar-expand-lg navbar-light bg-dark bg-succes" >'+
'   <a class="navbar-brand" href="/"img src="/static/images/emily.jpg" alt="logo" class="logo" height="43px">
    </a>'+
'  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="color:azure !important">' +
'     <span class="navbar-toggler-icon" style="color:azure !important"></span>' +
'  </button>' +
'  <div class="collapse navbar-collapse" id="navbarSupportedContent">'+
'    <ul class="navbar-nav mr-auto" >'+
'      <li class="nav-item active">' +
'      <a class="nav-link" href="#" style="color:azure !important">Home <span class="sr-only">(current)</span></a>
        </li>' +
'      <li class="nav-item">' +
'      <a class="nav-link  " style="color:azure !important" href="/contact">Contact</a>
        </li>' +
'    <li class="nav-item">' +
'  <a class="nav-link  " style="color:azure !important" href="/emilybot">Emily Bot</a>
        </li>' +
'    <li class="nav-item">' +
'  <a class="nav-link" style="color:azure !important" href="/aboutus">About Us</a>
        </li>' +
'    <li class="nav-item">' +
'  <a class="nav-link"  style="color:azure !important" href="/login">Login</a>
        </li>' +
'   <li class="nav-item">' +
'  <a class="nav-link" style="color:azure !important" href="/signup">Signup</a>
        </li>' +
'     </ul>' +
'  </div>' +
'</nav>';

var demo = document.getElementById('demo'); // target element.
demo.insertAdjacentHTML('beforeend', nav); // add content.
</script>