const Income = ({ columns, columnCost, color, points = false }) => {
    const width = 100 / columns.length;

    return (
        <>
            {columns.map((column, idx) => (
                <div key={idx} style={{
                    position: 'absolute',
                    height: '100%',
                    width: `${width}%`,
                    left: `${width * idx}%`,
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                }}>
                    {column.map((item, idx) => {
                        const height =  item * 100 / columnCost;

                        if (points) {
                            return (
                                <div key={idx} style={{
                                    height: `${height}%`,
                                    width: "50%",
                                    transform: 'translateX(100%)',
                                    borderTop: `10px solid ${color}`,
                                    color: color,
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    opacity: 0.5
                                }}>{item}</div>
                            )
                        } else {
                            return (
                                <div key={idx} style={{
                                    height: `${height}%`,
                                    width: "50%",
                                    transform: 'translateX(100%)',
                                    backgroundColor: color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    opacity: 0.5
                                }}>{item}</div>
                            )
                        }
                    })}
                </div>
            ))}
        </>
    )
}

export default Income;