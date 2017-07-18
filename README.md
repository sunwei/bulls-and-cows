
> This project was designed with **TDD** .

## `Notary.js` provide judge method to tell user the result

If we want to balance the effort and confidence, how many tests we need to make for Notary judge method ? please have a look at three ways below, and I believe you will get the answer by yourself. 

1. **Exhaustive**, so that we need to have **15** tests, because 3A1B is not exist.
2. **Edge + Normal**, so that we need 0A4B, 4A0B, 0A0B, 2A2B, so the number is **4**
3. **Orthogonal decomposition**, which looks like below, and what we can see is there are **6** tests we need to cover

| Position\Number | Totally Equal | Partially Equal | Totally not Equal |
| ------| ------ | ------ | ------ |
| **Totally Equal** | 4A0B | NOT EXIST | NOT EXIST |
| **Partially Equal** | 2A2B | 2A0B | NOT EXIST |
| **Totally not Equal** | 0A4B | 0A2B | 0A0B |
 