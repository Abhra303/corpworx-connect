

export default function SvgContainer( props ) {
    return (
        <div className={ props.class }>
            <img src={ props.source } alt="details" />
        </div>
    );
}