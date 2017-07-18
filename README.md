
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


## 'Dealer.js' is an random generator for the card
 
 The requirement is we can generate a string which contains 4 different number in the range 1 - 9.
 
 It seems it's impossible to test a random string, but we can find some key words to test.
  
 1. the **number** in the string is **different**
 2. the string **length** is **4**
 3. the number in the **range 1 - 9**