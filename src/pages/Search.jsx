function Search(props) {

    const list = props
    .categorizedProducts
    .flatMap(x => x.products)
    .map((x, i) => {
            return (
                <div key={i}>{x.capname}</div>
            );
        }
    );

    return (
        <div>
            <p>サーチページです</p>
            <p>{list}</p>
        </div>
    );
}   

export default Search;