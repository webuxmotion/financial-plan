export const add = (accumulator, a) => {
    return accumulator + a;
}

export const generateSalary = (count) => {
    const res = [];

    for (let i = 0; i < count; i++) {
        let other = 0;

        if (i >= 2) {
            let from = 2;
            let to = 10;

            if (i > 10) {
                from = 10;
                to = 26;
            }
            other = random(from, to);
        }

        if (i <= 13) {
            res.push([other, 37, 15]);
        } else {
            res.push([other, 40, 20]);
        }
    }

    return res;
}

export const generateRandomIncome = (count) => {
    const res = [];

    for (let i = 0; i < count; i++) {
        let other = 0;

        if (i >= 2) {
            other = random(0, 50);
        }

        res.push([other]);
    }

    return res;
}

export const generatePessimisticIncome = () => {
    const res = [
        [0],[0],
        [5],[10],[15],[20],[30],[40],[20],[30],[40],[60],[70],[80],
        [120],[130],[125],[30],[40],[90],[95],[80],[95],[100],[120],[120],
    ];

    return res;
}

export const generateOptimisticIncome = (count) => {
    const res = [];
    let other = 0;
    let maxIncome = 140;

    for (let i = 0; i < count; i++) {
        let step = 5;

        if (i > 4) {
            step = 15;
        }

        if (i >= 2) {
            if (other + step > maxIncome) {
                other = maxIncome;
            } else {
                other += step;
            }
        }

        res.push([other]);
    }

    return res;
}

export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const calculateSum = (data) => {
    let res = 0;

    data.forEach((column) => {
        const sum = column.reduce(add, 0);

        res += sum;
    });

    return res;
}