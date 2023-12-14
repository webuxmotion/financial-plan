import './App.css';
import Columns from './Columns';
import Income from './Income';
import Info from './Info';
import Rows from './Rows';
import Salary from './Salary';
import { calculateSum, generateOptimisticIncome, generatePessimisticIncome, generateRandomIncome, generateSalary } from './utils';

const columns = 26;
const rows = 15;
const height = rows * 100 / columns;
const columnCost = rows * 10;
const salary = generateSalary(columns);
const randomIncome = generateRandomIncome(columns);
const pessimisticIncome = generatePessimisticIncome();
const optimisticIncome = generateOptimisticIncome(columns);
const threeMonthEsvTax = 4422;
const fullPeriodTax = columns / 3 * threeMonthEsvTax;

const data = {
  spendings: calculateSum(salary) * 1000,
  randomIncome: calculateSum(randomIncome) * 1000,
  pessimisticIncome: calculateSum(pessimisticIncome) * 1000,
  optimisticIncome: calculateSum(optimisticIncome) * 1000
}

data.optimisticTaxes = data.optimisticIncome * 0.05 + fullPeriodTax;
data.randomTaxes = data.randomIncome * 0.05 + fullPeriodTax;
data.pessimisticTaxes = data.pessimisticIncome * 0.05 + fullPeriodTax;

data.optimisticProfit = data.optimisticIncome - data.spendings - data.optimisticTaxes;
data.randomProfit = data.randomIncome - data.spendings - data.randomTaxes;
data.pessimisticProfit = data.pessimisticIncome - data.spendings - data.pessimisticTaxes;

const medianaOptimisticPessimistic = (data.optimisticProfit + data.pessimisticProfit) / 2;
const medianaOptimisticRandom = (data.optimisticProfit + data.randomProfit) / 2;

function App() {
  return (
    <>
      <div className="App">
        <div style={{
          position: 'absolute',
          zIndex: 20,
          top: '20px',
          left: '20px'
        }}>
          Spendings: {data.spendings} UAH<br />
          <br />
          Random Income: {data.randomIncome} UAH<br />
          Taxes: {data.randomTaxes} UAH<br />
          Random Profit: {data.randomProfit}<br />
          <br />
          Pessimistic Income: {data.pessimisticIncome} UAH<br />
          Taxes: {data.pessimisticTaxes} UAH<br />
          Pessimistic Profit: {data.pessimisticProfit} UAH<br />
          <br />
          Optimistic Income: {data.optimisticIncome} UAH<br />
          Taxes: {data.optimisticTaxes} UAH<br />
          Optimistic Profit: {data.optimisticProfit} UAH<br />
          <br />
          Mediana Optimistic/Pessimistic: {medianaOptimisticPessimistic}<br />
          Mediana Optimistic/Random:{medianaOptimisticRandom}<br />

        </div>
        <div style={{ width: '70%' }}>
          <div className="inner" style={{ paddingBottom: `${height}%` }}>
            <Rows count={rows} />
            <Columns count={columns} />
            <Salary salary={salary} columnCost={columnCost} />
            <Income columns={randomIncome} columnCost={columnCost} color="rgb(181 181 181)" points />
            <Income columns={pessimisticIncome} columnCost={columnCost} color="red" points />
            <Income columns={optimisticIncome} columnCost={columnCost} color="green" points />
          </div>
        </div>
      </div>
      <Info optimisticIncome={optimisticIncome} randomIncome={randomIncome} pessimisticIncome={pessimisticIncome} />
    </>
  );
}

export default App;
