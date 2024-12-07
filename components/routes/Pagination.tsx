// components/routes/Pagination.tsx
import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number;
  totalBlogs: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalBlogs,
  onPageChange,
}: PaginationProps) => {
  const perPage = 8;
  const totalPages = Math.ceil(totalBlogs / perPage);

  // 前のページに移動
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  // 次のページに移動
  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) onPageChange(page);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1); // ページ番号を動的に生成

  return (
    <PaginationUI>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={handlePrev} />
        </PaginationItem>

        {/* ページ番号リンクを動的に生成 */}
        {pageNumbers.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={currentPage === page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* 省略記号（必要に応じて追加） */}
        {totalPages > 5 && currentPage < totalPages - 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext href="#" onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </PaginationUI>
  );
};

export default Pagination;
