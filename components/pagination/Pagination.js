export default function Pagination(props) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalProducts / props.productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-6">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          {pageNumbers.map((number) => {
            return (
              <li className="page-item" key={number}>
                <a
                  className="page-link relative block py-1.5 px-6 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-900 hover:text-blue-500 focus:shadow-none focus:bg-blue-400"
                  href="#"
                  onClick={() => props.paginate(number)}
                >
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
