export const handlePagination = (page) => ({
  from: (page - 1) * 10,
  to: (page) * 10
});
