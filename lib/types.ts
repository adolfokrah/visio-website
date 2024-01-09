import { ComponentType } from 'react';

export type DatePickerT = {
  type: 'datePicker';
  minDate: Date;
};

export type CustomControllerT = DatePickerT

export type CustomControllerType = Pick<CustomControllerT , 'type'> & {
  component: ComponentType<any>;
};