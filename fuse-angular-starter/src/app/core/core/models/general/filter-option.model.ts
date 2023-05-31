
import { SortDirection } from '../../enums/sort-direction';


/**
 * the interface that describe the filtering options
 */
export interface IFilterOption {

    /**
     * the search Query to search with it
     */
    SearchQuery: string;

    /**
     * the page index
     */
    Page: number;

    /**
     * the size of the page
     */
    PageSize: number;

    /**
     * the Sort Direction
     */
    SortDirection: SortDirection;

    /**
     * what property to order by with it
     */
    OrderBy: string;
}
