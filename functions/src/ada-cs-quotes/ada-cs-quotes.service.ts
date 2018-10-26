import { AdaCSQuote } from './ada-cs-quotes'
import { SlackMessage } from '../shared/slack-message'

export class AdaCSQuotesService {

  quotes:Array<AdaCSQuote> = [
    {
      text: 'The unexamined life is not worth living.', 
      author: 'Socrates'
    },
    {
      text: 'The journey of a thousand miles begins with one step.',
      author: 'Lao Tzu'
    }
  ]

  getRandomAdaCsQuote(): AdaCSQuote {
    const randomNum = Math.floor(Math.random() * this.quotes.length)
    return this.quotes[randomNum]
  }

  getAdaCSQuote(): SlackMessage {
    const quote = this.getRandomAdaCsQuote().text
    return { text: quote }
  }
}
