const Info = ({ optimisticIncome, pessimisticIncome, randomIncome }) => {
    const incomeFromItemVariants = [10, 20, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000, 10000];
    const totalIncome = optimisticIncome.reduce((prev, current) => {
        return prev + current[0];
    }, 0);
    const pessimisticTotalIncome = pessimisticIncome.reduce((prev, current) => {
        return prev + current[0];
    }, 0);
    const randomTotalIncome = randomIncome.reduce((prev, current) => {
        return prev + current[0];
    }, 0);

    return <>
        <h2>Optimistic Income</h2>
        <table>
            <tr>
                <th>Monthly income</th>
                {incomeFromItemVariants.map((income, idx) => (
                    <th key={idx}>{income} UAH</th>
                ))}
            </tr>
            {optimisticIncome.map((column, idx) => {
                const income = column[0] * 1000;

                return (
                    <tr key={idx}>
                        <td>{income} UAH</td>
                        {incomeFromItemVariants.map((item, idx) => (
                            <td key={idx}>
                                {Math.ceil(income / item)} <span className="small-text">items/month</span><br />
                                {Math.ceil(income / item / 24)} <span className="small-text">items/working day</span>
                            </td>
                        ))}
                    </tr>
                )
            })}
        </table>

        <h2>Optimistic Income. Total items in {optimisticIncome.length} monthes</h2>
        <table>
            <tr>
                <th>Total income</th>
                {incomeFromItemVariants.map((income, idx) => (
                    <th key={idx}>{income} UAH</th>
                ))}
            </tr>
            <tr>
                <td>{totalIncome * 1000} UAH</td>
                {incomeFromItemVariants.map((item, idx) => (
                    <td key={idx}>
                        {Math.ceil(totalIncome * 1000 / item)} <span className="small-text">items</span><br />
                    </td>
                ))}
            </tr>
        </table>

        <h2>Pessimistic Income. Total items in {pessimisticIncome.length} monthes</h2>
        <table>
            <tr>
                <th>Total income</th>
                {incomeFromItemVariants.map((income, idx) => (
                    <th key={idx}>{income} UAH</th>
                ))}
            </tr>
            <tr>
                <td>{pessimisticTotalIncome * 1000} UAH</td>
                {incomeFromItemVariants.map((item, idx) => (
                    <td key={idx}>
                        {Math.ceil(pessimisticTotalIncome * 1000 / item)} <span className="small-text">items</span><br />
                        {Math.ceil(pessimisticTotalIncome * 1000 / item / pessimisticIncome.length)} <span className="small-text">items/month</span>
                    </td>
                ))}
            </tr>
        </table>

        <h2>Random Income. Total items in {randomIncome.length} monthes</h2>
        <table>
            <tr>
                <th>Total income</th>
                {incomeFromItemVariants.map((income, idx) => (
                    <th key={idx}>{income} UAH</th>
                ))}
            </tr>
            <tr>
                <td>{randomTotalIncome * 1000} UAH</td>
                {incomeFromItemVariants.map((item, idx) => (
                    <td key={idx}>
                        {Math.ceil(randomTotalIncome * 1000 / item)} <span className="small-text">items</span><br />
                        {Math.ceil(randomTotalIncome * 1000 / item / randomIncome.length)} <span className="small-text">items/month</span>
                    </td>
                ))}
            </tr>
        </table>
    </>
    
}

export default Info;