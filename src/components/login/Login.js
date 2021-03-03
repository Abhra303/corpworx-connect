import LoginContent from "./LoginContent";
import SvgContainer from "./SvgContainer";
import "./Login.css";
import source from '../../images/details-4 1.png';

export default function Login( props ) {
    return (
        <div>
            <div className="container">
                <SvgContainer class="detail" source={ source } />
                <LoginContent/>
            </div>
        </div>
    );
}