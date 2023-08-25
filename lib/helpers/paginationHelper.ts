function paginationHelper(page: number, per_page: number, count: number) {
  return {
    page_context: {
      page,
      per_page,
      total_page: count === 0 ? 1 : Math.ceil(count/per_page)
    }
  }
}

export default paginationHelper