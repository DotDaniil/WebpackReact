import App from "./app";
import {render, screen} from "@testing-library/react";

describe("<App />", () => {
    it('Should render App', () => {
        render(<App />)
        expect(screen.getByRole('heading',{ level: 1 }).textContent).toBe('React App');
        expect(screen.getByRole('heading',{ level: 2 }).textContent).toBe('Webpack & Babel & React & SCSS & Jest && React-Testing-Library');
        expect(screen.getByRole('heading',{ level: 3 }).textContent).toBe('Author: Daniil Tikhonov, GitHub: DotDaniil');
    })
})