
function initMap() {
   
    const barbearia = { lat: -6.82646, lng: -35.12433 }; 
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: barbearia,
    });

    const marker = new google.maps.Marker({
        position: barbearia,
        map: map,
        title: 'Barbearia João Batista'
    });
}



