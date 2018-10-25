import * as functions from 'firebase-functions'
import { CSQuotesService } from './cs-quotes'

export const csQuotes = functions.https.onRequest((request, response) => {
  const quote = new CSQuotesService().getRandomCsQuote()
  response.send(quote)
});
