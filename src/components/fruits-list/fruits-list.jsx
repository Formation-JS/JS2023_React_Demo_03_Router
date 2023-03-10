
const FruitsList = ({ data, onSelectedFruit }) => {

    return (
        <div>
            {data.map(fruit => (
                <article key={fruit.id} onClick={() => onSelectedFruit(fruit.id)}>
                    <p>
                        {fruit.name} {fruit.origin && (
                            <span>({fruit.origin})</span>
                        )}
                    </p>
                </article>
            ))}
        </div>
    );
};

export default FruitsList;