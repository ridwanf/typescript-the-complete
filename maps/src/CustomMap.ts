// intruction to every other class
// on how they can be an argument to 'add marker
export interface Mappable {
  location: {
    lat: number
    lng: number
  },
  markerContent(): string
  color: string
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0,
      },
    })
  }
  addMarker(mappAbble: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappAbble.location.lat,
        lng: mappAbble.location.lng
      }
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappAbble.markerContent()
      })

      infoWindow.open(this.googleMap, marker)
    })
  }
}