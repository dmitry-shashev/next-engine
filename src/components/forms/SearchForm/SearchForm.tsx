import React, { FC, ReactElement } from 'react'
import { FormProps } from '@lib/interfaces/form/form-props'
import SearchFormData from '@lib/interfaces/form/search-form-data'
import { useForm, Controller } from 'react-hook-form'
import { TextField } from '@mui/material'
import styles from './SearchForm.module.scss'
import { useDebouncedCallback } from 'use-debounce'

const SearchForm: FC<FormProps<SearchFormData>> = ({
  defaultValues = {},
  onSubmit,
}) => {
  const { handleSubmit, control, watch } = useForm<SearchFormData>({
    defaultValues,
  })

  const submitDebounced = useDebouncedCallback(handleSubmit(onSubmit), 300)

  watch((): void => {
    submitDebounced()
  })

  return (
    <form
      aria-label="Search Form"
      className={styles.wrap}
      onSubmit={submitDebounced}
    >
      <Controller
        name="search"
        control={control}
        render={({ field: { onChange, value } }): ReactElement => (
          <TextField
            inputProps={{
              'aria-label': 'Search Input',
            }}
            onChange={onChange}
            value={value}
            placeholder="Search ..."
          />
        )}
      />
    </form>
  )
}

export default SearchForm
