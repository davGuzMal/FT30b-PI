import React from 'react';

export default function Paginate ({ currentPage, setCurrentPage, totalCards, cardsPerPage }){
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    let pages = [];

	for (let p = 1; p <= totalPages; p++) {
		pages.push(p);
	}
    return(
		<div className='pagination-container'>
        <ul className="pagination">
			<li className="page-item">
				<button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage===1}>
					&laquo;
				</button>
			</li>
			{pages.map((page) => (
				<li
					key={page}
					className={`page-item ${page === currentPage && `active`}`}
					onClick={() => setCurrentPage(page)}
				>
					<button className="page-link">{page}</button>
				</li>
			))}
			<li className={`page-item ${currentPage === totalPages && `disabled`}`}>
				<button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage===totalPages}>
					&raquo;
				</button>
			</li>
		</ul>
		</div>
    )
}