<!-- 專案名稱 -->

# Formula

- 有太多專案需要使用到格式化的功能，因此建立一個 npm 讓未來方便導入

## 安裝 & 文件

#### NPM

```bash
npm install @paperhsiao/formula
```

#### YARN

```bash
yarn add @paperhsiao/formula
```

你可以將它像這樣的方式引入你的專案

```javascript
import formula from '@paperhsiao/formula'
```

## 現在有的 function？

```javascript
/* === Format ===*/
const format = formula.Format

// addComma
format.addComma(100) // "100"
format.addComma(1000) // "1,000"
format.addComma(10000) // "10,000"

// stringBy00
format.stringBy00(0) // "00"
format.stringBy00(-1) // "00"
format.stringBy00(5) // "05"
format.stringBy00(10) // "10"
format.stringBy00(100) // "100"

// stringBy00
format.stringBy000(0) // "000"
format.stringBy000(10) // "010"
format.stringBy000(99) // "099"
format.stringBy000(100) // "100"
format.stringBy000(999) // "999"
format.stringBy000(1999) // "1999"
format.stringBy000(-1000) // "000"
format.stringBy000(-100) // "000"
format.stringBy000(-10) // "000"

/*=== Maths ===*/
const maths = formula.Maths

// remap
maths.remap(50, 0, 100, 0, 1000) // 500
maths.remap(5, 0, 10, 20, 1000) // 510

// clamp
maths.clamp(-1, 50, 100) // 50
maths.clamp(77, 50, 100) // 77
maths.clamp(102, 50, 100) // 100

/*=== Fundraising ===*/
const fundraising = formula.Fundraising
const goal1 = { value: 5000000, rate: 33 }
const goal2 = { value: 7000000, rate: 66 }
const goal3 = { value: 10000000, rate: 100 }

const getRate = fundraising.rateFunction(goal1, goal2, goal3)
const progress = getRate(money)
```
