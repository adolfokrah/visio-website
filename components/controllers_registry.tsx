import DatePickerController from './controllers/DatePickerController';
import { CustomControllerType } from '@/lib/types';

const customControllers: CustomControllerType[] = [
  {
    type: 'datePicker',
    component: DatePickerController,
  },
];

export default customControllers;
