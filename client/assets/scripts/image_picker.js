function handleFileSelect(evt)
{
    var files = evt.target.files;
    var f = files[0];
    var reader = new FileReader();

    reader.onload = (function (theFile) {
        return function (e) {
            document.getElementById('cvs_facepic').innerHTML = '<img class="img_lockedAR" align="middle" src="' + e.target.result + '"/>';
        };
    })(f);

    reader.readAsDataURL(f);
}

function loadPic(evt, element)
{

    var files = evt.target.files;
    var f = files[0];
    var reader = new FileReader();
    var img = new Image();
    reader.onload = (function (theFile) {
        return function (e) {
            img.src = e.target.result;
            if (img.width > HTMLBodyElement.width)
                document.getElementById(element.getAttribute("name")).innerHTML = '<img style="width:100%" src="' + img.src + '"/>';
            else document.getElementById(element.getAttribute("name")).innerHTML = '<img style="width:'+ img.width+ 'px" src="' + img.src + '"/>';

        };
    })(f);

    reader.readAsDataURL(f);
}
