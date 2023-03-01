import { MatchReader } from './readers/MatchReader'
import { Summarizer } from './Summarizer'
import { REPORTERS } from './ts/enums'

const fileReader = MatchReader.fromCsv('football.csv')
const summary = Summarizer.generateWinSummary('Man United', 'html' as REPORTERS)

fileReader.load()
summary.report(fileReader.dumps())
