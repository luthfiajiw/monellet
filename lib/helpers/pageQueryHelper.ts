
function pageQueryHelper(req: Request) {
  const url = new URL(req.url)

  const page = url.searchParams.get('page');
  const perPage = url.searchParams.get('perPage');

  return {
    page: page && page != '' ? parseInt(page) : 1,
    perPage: perPage && perPage != '' ? parseInt(perPage) : 10,
  }
}

export default pageQueryHelper