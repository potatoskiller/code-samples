import { useEffect, useState } from 'react';
import PhoneInput, { Country, Value } from 'react-phone-number-input';
import { getPhoneNumberData } from '@utils/phoneNumberFormatter';
import { PhoneFieldProps } from './PhoneField.types';
import 'react-phone-number-input/style.css';
import InputContainer from '../InputContainer/InputContainer';

const PhoneField = ({ value, inputSize, error, label, subLabel, placeholder, className, onPhoneValueChange }: PhoneFieldProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [countryCode, setCountryCode] = useState<Country>();

  const onChange = (phoneValue: Value) => {
    if (phoneValue === undefined) return;

    const phoneNumberData = getPhoneNumberData(phoneValue);
    if (phoneNumberData) {
      setCountryCode(phoneNumberData.country);
    }

    setPhoneNumber(phoneValue);
    onPhoneValueChange?.(phoneValue);
  };

  useEffect(() => {
    setPhoneNumber(value);
  }, [value]);

  return (
    <InputContainer
      {...{
        inputSize,
        error,
        label,
        subLabel,
      }}
      className={className}
    >
      <PhoneInput
        country={countryCode}
        defaultCountry='US'
        placeholder={placeholder}
        value={phoneNumber}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default PhoneField;
