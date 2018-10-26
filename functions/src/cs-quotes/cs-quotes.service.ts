import { CSQuote } from './cs-quotes'
import { CSQuotesData } from './cs-quotes.data'
import { SlackMessage } from '../shared/slack-message'

export class CSQuotesService {
  getRandomCsQuote(): CSQuote {
    const randomNum = Math.floor(Math.random() * CSQuotesData.length)
    return CSQuotesData[randomNum]
  }

  getCSQuote(): SlackMessage {
    const quote = this.getRandomCsQuote().text
    return { text: quote }
  }
}
