import { useSearchParams } from "next/navigation";

function pageQueryHelper(req: Request) {
  const url = new URL(req.url)

  const page = url.searchParams.get('page');
  const perPage = url.searchParams.get('per_page');

  return {
    page: page && page != '' ? parseInt(page) : 1,
    perPage: perPage && perPage != '' ? parseInt(perPage) : 10,
  }
}

export default pageQueryHelper