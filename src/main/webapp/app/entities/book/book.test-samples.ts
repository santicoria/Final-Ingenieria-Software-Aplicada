import { IBook, NewBook } from './book.model';

export const sampleWithRequiredData: IBook = {
  id: 6385,
  isbn: 'eager Mobilit',
  name: 'Borders Danish',
  publishYear: 'vainly',
  copies: 12727,
};

export const sampleWithPartialData: IBook = {
  id: 3583,
  isbn: 'withdrawal co',
  name: 'override local',
  publishYear: 'Berkshire Sulfur Copernicium',
  copies: 13575,
};

export const sampleWithFullData: IBook = {
  id: 23644,
  isbn: 'Regional user',
  name: 'capability Bicycle whereas',
  publishYear: 'turquoise Hybrid',
  copies: 25843,
  cover: '../fake-data/blob/hipster.png',
  coverContentType: 'unknown',
};

export const sampleWithNewData: NewBook = {
  isbn: 'West Pants Au',
  name: 'Gloves prickly',
  publishYear: 'Bedfordshire impactful',
  copies: 14424,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
