const lat = document.querySelector("#lat");
const lon = document.querySelector('#lon');
const end = document.querySelector('#end');
const btn = document.querySelector("#btn1")

navigator.geolocation.getCurrentPosition(geo);
var url = null;
function geo(pos) {
    lat.innerHTML=pos.coords.latitude;
    lon.innerHTML=pos.coords.longitude;
    url=`https://www.google.com.br/maps/dir//${lat.innerHTML},${lon.innerHTML}/@${lat.innerHTML},${lon.innerHTML},21z?entry=ttu`
    end.innerHTML=url;
}

btn.addEventListener("click",()=>{
    window.open(url)
})
