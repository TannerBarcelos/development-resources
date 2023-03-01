import { Mappable } from './common/ts/interfaces'
export class MapEntity {
  private map: google.maps.Map
  constructor(mapId: string) {
    this.map = new google.maps.Map(
      document.getElementById(mapId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      },
    )
  }

  public generateMark(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    })
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.print(),
      })
      infoWindow.open(this.map, marker)
    })
  }
}
