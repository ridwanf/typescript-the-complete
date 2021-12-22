import axios, { AxiosPromise } from 'axios'

interface HasId {
  id?: number
}
export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) { }
  fetch(id: number): AxiosPromise<T> {
    return axios.get(`${this.rootUrl}/${id}`)
  }
  save(data: T): AxiosPromise<T> {
    if (!data.id) {
      return axios.post(`${this.rootUrl}`, data)
    } else {
      return axios.put(`${this.rootUrl}/${data.id}`, data)
    }
  }
}