import styled from '@emotion/styled'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FieldHookConfig, useField } from 'formik'
import { css } from '@emotion/react'
import ArrowDown from '../assets/arrow-down.svg'
import { InputStyles } from './mixins'
import CalendarIcon from '../assets/calendar.svg'
import InputLabel from './inputLabel'

type Props = {
  label: string
  className?: string
} & FieldHookConfig<string> &
  Partial<ReactDatePickerProps>

const StyledContainer = styled.div<{ disabled?: boolean }>`
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`

const StyledDatePickerContainer = styled.div`
  .react-datepicker {
    border: none;
    border-radius: ${(props) => props.theme.radii[0]};
    box-shadow: 0rem 1rem 2rem rgba(72, 84, 159, 0.25);
    padding: 0 1.15rem ${(props) => props.theme.space[12]};

    ${(props) =>
      props.theme.mode === 'light' &&
      css`
        background-color: ${props.theme.colors.all.white};
      `}

    ${(props) =>
      props.theme.mode === 'dark' &&
      css`
        background-color: ${props.theme.colors.all.darkBlue.spaceCadet[200]};
      `}

    &-wrapper {
      display: block;
    }

    &__input-container {
      position: relative;

      &:after {
        background-image: ${`url(${CalendarIcon})`};
        content: '';
        position: absolute;
        top: 2.4rem;
        width: 1.6rem;
        height: 1.6rem;
        transform: translateY(-50%);
        right: 1.6rem;
      }

      input {
        ${InputStyles}

        &:hover {
          border: 0.1rem solid
            ${(props) => props.theme.colors.all.violet.mediumPurple};
        }
      }
    }

    &__header {
      height: 4rem;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      border: none;
      margin-bottom: ${(props) => props.theme.space[12]};

      ${(props) =>
        props.theme.mode === 'light' &&
        css`
          background-color: ${props.theme.colors.all.white};
        `}

      ${(props) =>
        props.theme.mode === 'dark' &&
        css`
          background-color: ${props.theme.colors.all.darkBlue.spaceCadet[200]};
        `}
    }

    &__current-month {
      font-family: ${(props) => props.theme.fonts[0]};
      font-size: ${(props) => props.theme.fontSizes[1]};

      ${(props) =>
        props.theme.mode === 'light' &&
        css`
          color: ${props.theme.colors.text};
        `}

      ${(props) =>
        props.theme.mode === 'dark' &&
        css`
          color: ${props.theme.colors.muted};
        `}
    }

    &__month {
      margin: 0;
    }

    &__day-names {
      display: none;
    }

    &__day {
      font-family: ${(props) => props.theme.fonts[0]};
      font-size: ${(props) => props.theme.fontSizes[1]};
      font-weight: ${(props) => props.theme.fontWeights[1]};
      width: 1.6rem;
      height: 1.5rem;
      margin: ${(props) => props.theme.space[4]} 0.75rem;

      ${(props) =>
        props.theme.mode === 'light' &&
        css`
          color: ${props.theme.colors.text};
        `}

      ${(props) =>
        props.theme.mode === 'dark' &&
        css`
          color: ${props.theme.colors.muted};
        `}

      &:hover,
      &--selected,
      &--keyboard-selected {
        outline: none;
        color: ${(props) => props.theme.colors.secondary};

        ${(props) =>
          props.theme.mode === 'light' &&
          css`
            background-color: ${props.theme.colors.all.white};
          `}

        ${(props) =>
          props.theme.mode === 'dark' &&
          css`
            background-color: ${props.theme.colors.all.darkBlue
              .spaceCadet[200]};
          `}
      }
    }

    &__navigation--next,
    &__navigation--previous {
      border: none;
      width: 1rem;
      height: 0.7rem;
      background-image: ${`url(${ArrowDown})`};
      background-repeat: no-repeat;
      top: 3rem;
    }

    &__navigation--next {
      transform: rotate(-90deg);
      right: 2.4rem;
    }

    &__navigation--previous {
      transform: rotate(90deg);
      left: 2.4rem;
    }
  }
`

const DatePicker = ({
  label,
  id,
  name,
  value,
  className,
  disabled,
  ...props
}: Props) => {
  const [field, , meta] = useField({ name, ...props })

  return (
    <StyledContainer className={className} disabled={disabled}>
      <InputLabel htmlFor={id || name}>{label}</InputLabel>
      <StyledDatePickerContainer>
        <ReactDatePicker
          disabled={disabled}
          selected={field.value ? new Date(field.value) : new Date()}
          dateFormatCalendar="MMM yyyy"
          dateFormat="dd MMM yyyy"
          showPopperArrow={false}
          onChange={(date) => meta.setValue(date?.toString() || '')}
        />
      </StyledDatePickerContainer>
    </StyledContainer>
  )
}

export default DatePicker
