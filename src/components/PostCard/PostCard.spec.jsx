import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { PostCardPropsMock } from "./mock";

const props = PostCardPropsMock;

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...props} />);

        expect(screen.getByRole('img', { name: /title 1/i }))
            .toHaveAttribute('src', 'img/img.png');
            expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument();
            expect(screen.getByText('body 1')).toBeInTheDocument();
    });
    //vai renderisar e vai salvar como esta seu componente como se fosse uma foto
    it('should match snapshot', () => {
       const {container } = render (<PostCard {...props} />);
       expect(container.firstChild).toMatchSnapshot();
    });
});