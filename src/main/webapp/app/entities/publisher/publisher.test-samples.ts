import { IPublisher, NewPublisher } from './publisher.model';

export const sampleWithRequiredData: IPublisher = {
  id: 32297,
  name: 'tunic partnerships Hat',
};

export const sampleWithPartialData: IPublisher = {
  id: 6919,
  name: 'male',
};

export const sampleWithFullData: IPublisher = {
  id: 18168,
  name: 'Incredible harum Bedfordshire',
};

export const sampleWithNewData: NewPublisher = {
  name: 'at Sedan Wagon',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
