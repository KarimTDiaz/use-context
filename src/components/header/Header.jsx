import { useContext } from 'react';
import { CounterContext } from '../../App';
import { StyledHeader } from './styles';

const Header = () => {
	const { counter } = useContext(CounterContext);
	return (
		<StyledHeader>
			<h2>{counter}</h2>
		</StyledHeader>
	);
};

export default Header;
