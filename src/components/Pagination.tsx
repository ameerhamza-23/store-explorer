interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination(props: PaginationProps) {
  const { currentPage, totalPages, onPageChange } = props;

  if (totalPages <= 1) {
    return null;
  }

  const pages = new Array(totalPages).fill(0).map((_, index) => index + 1);

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            padding: "8px 12px",
            margin: "4px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            backgroundColor: currentPage === page ? "#3498db" : "#fff",
            color: currentPage === page ? "#fff" : "#333",
            cursor: "pointer",
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
