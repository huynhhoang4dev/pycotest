import React from 'react'
import { Link } from 'react-router-dom'


const GifPagination = (pagination) => {
    let { total_count, offset } = pagination.pagination

    let currentPage = offset + 1
    let pageCount = Math.ceil(total_count / 20)
    return (
        <nav aria-label="...">
            <ul className="pagination">
                <PageButton type="first_page" currentPage={currentPage} page_count={pageCount} />
                <PageButton type="prev_page" currentPage={currentPage} page_count={pageCount} />
                <PageButton type="active_page" currentPage={currentPage} page_count={pageCount} />
                <PageButton type="next_page" currentPage={currentPage} page_count={pageCount} />
                <PageButton type="latest_page" currentPage={currentPage} page_count={pageCount} />
            </ul>
        </nav>

    )
}

const PageButton = ({type, currentPage, page_count}) => {
    let page = {
        displayValue: '',
        isDisabled: false,
        isShow: false,
        isActive: false,
        pageId: 1
    }

    let active = false

    switch (type) {
        case 'first_page': 
            if(page_count === 1) {
                page = {
                    displayValue: 1,
                    isDisabled: true,
                    isShow: false,
                    isActive: true,
                    pageId: 1
                }
            } else {
                if(currentPage === 1) {
                    page = {
                        displayValue: 1,
                        isDisabled: true,
                        isShow: true,
                        isActive: true,
                        pageId: 1
                    }
                } else {
                    page = {
                        displayValue: 1,
                        isDisabled: false,
                        isShow: true,
                        isActive: false,
                        pageId: 1
                    }
                }
            }
        break;
        case 'prev_page': 
            if(currentPage >= 3) {
                if(currentPage === 3) {
                    page = {
                        displayValue: 2,
                        isDisabled: false,
                        isShow: true,
                        isActive: true,
                        pageId: 2
                    }
                } else {
                    page = {
                        displayValue: 'Prev',
                        isDisabled: false,
                        isShow: true,
                        isActive: true,
                        pageId: currentPage - 1
                    }
                }
                
            } else {
                page = {
                    isShow: false
                }
            }
        break;
        case 'active_page': 
            if(currentPage === 1 || currentPage === page_count) {
                page = {
                    isShow: false,
                    isActive: true
                }
            } else {
                page = {
                    displayValue: currentPage,
                    isDisabled: true,
                    isShow: true,
                    isActive: false,
                    pageId: currentPage
                }
            }
        break;
        case 'next_page': 
            if(currentPage === page_count || (page_count - currentPage === 1)) {
                page =  {
                    isShow: false
                }
            } else {
                page = {
                    displayValue: 'Next',
                    isDisabled: false,
                    isShow: true,
                    isActive: true,
                    pageId: currentPage + 1
                }
            }
        break;
        case 'latest_page': 
            if(currentPage === page_count) {
                page= {
                    displayValue: currentPage,
                    isShow: false,
                    isActive: true
                }
            } else {
                page = {
                    displayValue: page_count,
                    isDisabled: false,
                    isShow: true,
                    pageId: page_count
                }
            }
        break;
        default: {}
    }

    if(page.isShow) {
        return (
            // <li className={"page-item active " + (page.isDisabled ? 'disabled' : '  ') + (page.isActive ? ' active ' : '') }>
            <li>
                {/* <a className="page-link" href={"page/" + page.pageId} tabIndex="-1">{page.displayValue}</a> */}
          
                <Link to={"/page/" + page.pageId}>
                    <button type="button" className={"btn " + (page.isDisabled ? ' disabled ' : '  ') + (page.isActive ? ' btn-info ' : '')} >
                        {page.displayValue}
                    </button>
                </Link>
                
            </li>
            
        )
    } else {
        return null
    }
}

export default GifPagination