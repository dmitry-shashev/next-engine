import React, { FC } from 'react'
import styles from './ProductsList.module.scss'
import ProductModel from '@lib/interfaces/product.model'
import ProductShortCard from '@components/primitive/ProductShortCard/ProductShortCard'
import PaginationBlock from '@components/primitive/PaginationBlock/PaginationBlock'
import useLocalPagination from '@lib/hooks/useLocalPagination'
import PaginationKey from '@lib/constants/pagination-key'
import useLocalSearch from '@lib/hooks/useLocalSearch'
import SearchForm from '@components/forms/SearchForm/SearchForm'

interface Props {
  products: Array<ProductModel>
}

const ProductsList: FC<Props> = ({ products }) => {
  const { search, setSearch, filteredData } = useLocalSearch(products, '', [
    'title',
    'description',
  ])

  const { paginatedData, setPagination, pagination } = useLocalPagination(
    PaginationKey.Catalog,
    filteredData
  )

  return (
    <div className={styles.wrap}>
      <div className={styles.controls}>
        <SearchForm
          defaultValues={{
            search,
          }}
          onSubmit={(data): void => setSearch(data.search)}
        />
        <PaginationBlock onChange={setPagination} pagination={pagination} />
      </div>
      <div className={styles.productsList}>
        {paginatedData.map((p) => (
          <ProductShortCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default ProductsList
