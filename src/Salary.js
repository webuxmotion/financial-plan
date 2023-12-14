const Salary = ({ salary, columnCost }) => {
    const width = 100 / salary.length;

    return (
        <>
            {salary.map((column, idx) => (
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

                        return (
                            <div key={idx} style={{
                                height: `${height}%`,
                                width: "50%",
                                backgroundColor: idx === 0 ? '#8da58d' : '#a3c3a3',
                                display: 'flex',
                                alignItems: 'center',
                                opacity: 0.8
                            }}>{item}</div>
                        )
                    })}
                </div>
            ))}
        </>
    )
}

export default Salary;