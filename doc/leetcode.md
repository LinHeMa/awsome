# Greatest Common Divisor:Trial Division Algorithm

For two strings s and t, we say "t divides s" if and only if 
`s = t + ... + t (i.e., t is concatenated with itself one or more times).`

## second
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

按照題目，主要分為兩種情況：完全沒有因數倍數關係的狀況，回傳空字串；另一種情況是兩者有因倍數關係，那麼就要回傳最大公因數。

```js
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1, str2) {
  // str1 + str2 = ABABABABAB
  // str2 + str1 = ABABABABAB

  if (str1 + str2 !== str2 + str1) {
    return "";
  }
// step 1 : 如果b的長度是0，直接回傳a
// step 2 : 如果b的長度不是0，a, b互換，第二項取餘數（短除法），目的是為了找到最大公因數的長度
// step 3 : 如果b的長度是0，直接回傳a  
     
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const gcdLength = gcd(str1.length, str2.length);

  return str1.substring(0, gcdLength);
}
```
第一段程式碼
```js
 if (str1 + str2 !== str2 + str1) {
    return "";
  } 
```
用來判斷是否為因數倍數關係，提早篩除沒有可能的條件：
```md
str1=n*gcd
str2=m*gcd
str1 + str2 = (m+n)*gcd
```
所以如果相加必須是相等的，如果不是的話會在這個條件被篩掉。

```js
 const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
```
這一段在找最大公因數的長度。
例如 （6，4）要找最大公因數（已知答案是2）

```js
gcd(6,4) => gcd(4,2)

  1｜   6 ｜  4
   ｜   4 ｜
    ------------
        2            

gcd(4,2) => gcd(2,0) => 2

  2｜   4 ｜  2
   ｜   4 ｜   
    ------------
        0  <---- b === 0 餘數等於0條件成就，因此2就是gcd
```
```js
return str1.substring(0, gcdLength);
```
最後只要找到gcd字串並且return！