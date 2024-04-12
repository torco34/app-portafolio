
import { Button, Form } from "react-bootstrap";

import { useThemeContext } from '../../usecontext/ ContextProvider';
interface IPropsSearch {

    query: string;
    onSearch: (searchQuery: string) => void;

}
export const Search = ({ onSearch }: IPropsSearch) => {
    const { query, setQuery } = useThemeContext() ?? { query: '' };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSearch(query);
        
    };
    return (
        <div>
            <Form onSubmit={handleSubmit} className="d-flex">
                <Form.Control
                    type="search"
                    className="me-2"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar en varias páginas..."
                    aria-label="Search"
                />

                <Button type="submit" className="bg-light text-dark">Buscar</Button>
            </Form>
        </div>
    )
}
