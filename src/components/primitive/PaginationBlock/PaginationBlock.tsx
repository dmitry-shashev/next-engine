import React, { FC } from 'react'
import styles from './PaginationBlock.module.scss'
import PaginationModel from '@lib/interfaces/pagination.model'
import { TablePagination } from '@mui/material'
import PaginationLimit from '@lib/constants/pagination-limit'
import TypeHelper from '@lib/helpers/type.helper'
import PaginationHelper from '@lib/helpers/pagination.helper'

const allPossibleLimits = TypeHelper.getEnumValuesAsNum(PaginationLimit)

interface Props {
  pagination: PaginationModel
  onChange: (p: PaginationModel) => void
}

const PaginationBlock: FC<Props> = ({ pagination, onChange }) => {
  const onPageChange = (_e: unknown, newPage: number): void => {
    const newOffset = PaginationHelper.getCurrentOffset(pagination, newPage + 1)
    onChange({
      ...pagination,
      offset: newOffset,
    })
  }

  const onRowsPerPageChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    onChange({
      ...pagination,
      offset: 0,
      limit: Number(e.target.value),
    })
  }

  const currentPage = PaginationHelper.getCurrentPage(pagination)
  return (
    <div className={styles.wrap}>
      <TablePagination
        rowsPerPageOptions={allPossibleLimits}
        component="div"
        count={pagination.total}
        page={currentPage - 1}
        onPageChange={onPageChange}
        rowsPerPage={pagination.limit}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </div>
  )
}

export default PaginationBlock
