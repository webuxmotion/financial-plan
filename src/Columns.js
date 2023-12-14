const Columns = ({ count }) => {
    const items = Array(count).fill();
    const width = 100 / count;

    return (
        <>
            {items.map((_, idx) => (
                <div key={idx} style={{
                    position: 'absolute',
                    height: '100%',
                    width: `${width}%`,
                    left: `${width * idx}%`,
                    borderRight: '1px solid gray',
                    boxSizing: 'border-box'
                }}></div>
            ))}
        </>
    )
}

export default Columns;