import {render, screen } from "@testing-library/react";
import { Button } from ".";
import userEvent from "@testing-library/user-event";

describe('<Button />', () => {
    it('should render the button with the text', () => {
      const fn = jest.fn();
      render(<Button text="Load more" disabled={false} onClick={fn} />);

        expect.assertions(1); //para ter certeza que o teste ocorreu

        const button = screen.getByRole('button', {name:/load more/i});
        expect(button).toBeInTheDocument("class",'button');
    });
    it('should call function on butoon click', () => {
        
        const fn = jest.fn();//mock de funçao
        render(<Button text="Load more" disabled={false}  onClick={fn} />);

        
        const button = screen.getByRole('button', {name:/load more/i});

        // fireEvent.click(button);
        userEvent.click(button);//serve para ternar o teste mais simples possivel;

        expect(fn).toHaveBeenCalledTimes(1);//dar numers de chamadas do evento

        // expect(fn).toHaveBeenCalled(); //foi chamada essa funçao
       
    });
    it('should be disabled when disabled is true', () => {
      const fn = jest.fn();
      render(<Button text="Load more" disabled={true} onClick={fn} />);
      const button = screen.getByRole('button', { name: /load more/i });
      expect(button).toBeDisabled();
    });
  
    it('should be enabled when disabled is false', () => {
      const fn = jest.fn();
      render(<Button text="Load more" disabled={false} onClick={fn} />);
      const button = screen.getByRole('button', { name: /load more/i });
      expect(button).toBeEnabled();
    });
  
});