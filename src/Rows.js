const Rows = ({ count }) => {
    const items = Array(count).fill();
    const height = 100 / count;

    return (
        <>
            {items.map((_, idx) => (
                <div key={idx} style={{
                    position: 'absolute',
                    width: '100%',
                    height: `${height}%`,
                    top: `${height * idx}%`,
                    borderBottom: '1px solid gray',
                    boxSizing: 'border-box'
                }}></div>
            ))}
        </>
    )
}

export default Rows;