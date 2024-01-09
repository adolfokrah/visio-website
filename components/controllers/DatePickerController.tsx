'use client';
import { DatePickerT } from '@/lib/types';
import { Datepicker } from 'flowbite-react';
import { CustomControllerProps } from 'visio-cms';

export default function DatePickerController({
  prop,
  propIndex,
  defaultValue,
  handlePropValueChange,
}: CustomControllerProps<DatePickerT>) {
  return (
    <div className="absolute w-full left-0 px-1 date-picker">
      <Datepicker
        onSelectedDateChanged={(date) => handlePropValueChange(date, propIndex, prop)}
        defaultValue={defaultValue}
        minDate={prop.minDate}
      />
    </div>
  );
}
