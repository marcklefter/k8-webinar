function initMap() {
  fetch('/api/location')
    .then(response => response.json())
    .then(positions => {
      if (!positions.length) {
        console.log('No delivery position available!');
        return;
      }

      const {
        zoom,
        ...coords
      } = JSON.parse(positions[0]);

      const map = new google.maps.Map(
        document.getElementById('map'), 
        {
          zoom,
          center: coords,
        }
      );

      new google.maps.Marker({
        position: coords,
        map
      });
    });
}