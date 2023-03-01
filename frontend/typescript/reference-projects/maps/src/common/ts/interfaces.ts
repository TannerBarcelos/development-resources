export interface Mappable {
  location: { lat: number; lng: number }
  print(): string
}
