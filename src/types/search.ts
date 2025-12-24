export interface SearchResult {
  id: string;
  title: string;
  description: string;
  breadcrumb: string;
  author: string;
  date: string;
  likes: number;
}

export interface SearchSuggestion {
  id: string;
  title: string;
  breadcrumb: string;
}

export interface PaginationState {
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  totalResults: number;
}
