import './styles/style.css'
import { User } from './User'
import { Company } from './Company'
import { MapEntity } from './MapEntity'

const company = new Company()
const user = new User()
const mapEntity = new MapEntity('map')

mapEntity.generateMark(company)
mapEntity.generateMark(user)
