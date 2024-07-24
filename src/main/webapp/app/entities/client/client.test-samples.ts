import { IClient, NewClient } from './client.model';

export const sampleWithRequiredData: IClient = {
  id: 16173,
  firstName: 'Lina',
  lastName: 'Langworth',
};

export const sampleWithPartialData: IClient = {
  id: 23935,
  firstName: 'Kaitlyn',
  lastName: 'Bogan',
  email: 'Brycen_Gerlach78@gmail.com',
  address: 'neuron grey',
};

export const sampleWithFullData: IClient = {
  id: 27863,
  firstName: 'Garrett',
  lastName: 'Rodriguez',
  email: 'Isabelle_Mayer43@hotmail.com',
  address: 'Smart white Seaborgium',
  phone: '289.369.1588 x031',
};

export const sampleWithNewData: NewClient = {
  firstName: 'Crystal',
  lastName: 'Stracke',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
