import { RequestMethod } from '@angular/http';

export type ApiMock = {
  url: string,
  method: RequestMethod,
  /** Body, of a POST for example */
  data?: Object,
  /** Query params, in the url */
  params?: {[key: string]: string},
  response: {
    status: number,
    body: Object | Array<any>
  }
};