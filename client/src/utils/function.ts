const formatCurrency = (amount: number): string => {
  const formatted = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);

  return `₫${formatted.replace("₫", "").trim()}`;
};

export { formatCurrency };
