const paginationBuilder = ({
  currentPage,
  itemsPerPage,
  numberOfButtons,
  numberOfItems,
}) => {
  const numberOfPages = itemsPerPage
    ? Math.ceil(numberOfItems / itemsPerPage)
    : 0;

  if (currentPage > numberOfPages || currentPage < 1) {
    return {
      pagination: [],
      currentPage,
    };
  }

  const buttons = Array(numberOfPages)
    .fill(1)
    .map((e, i) => e + i);
  const sideButtons = numberOfButtons % 2 === 0
    ? numberOfButtons / 2
    : (numberOfButtons - 1) / 2;

  const calculLeft = (rest = 0) => ({
    array: buttons
      .slice(0, currentPage - 1)
      .reverse()
      .slice(0, sideButtons + rest)
      .reverse(),
    rest() {
      return sideButtons - this.array.length;
    },
  });

  const calculRight = (rest = 0) => ({
    array: buttons.slice(currentPage).slice(0, sideButtons + rest),
    rest() {
      return sideButtons - this.array.length;
    },
  });

  const leftButtons = calculLeft(calculRight().rest()).array;
  const rightButtons = calculRight(calculLeft().rest()).array;

  return {
    currentPage,
    numberOfPages,
    pagination: [...leftButtons, currentPage, ...rightButtons],
  };
};

export default paginationBuilder;
