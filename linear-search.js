//Реализуй функции линейного поиска. Проверь результат тестами.
//принимает два аргумента: объект и массив. Она должна последовательно перебирать каждый элемент и возвращать индекс,
// в котором объект был изначально найден. Если объект не найден, то функция возвращает значение -1.
function linearSearch(n, arr) {
  for (let i = 0; i< arr.length; i++){
    if (arr[i] == n ) {
      return i
    } 
  }
      return -1
  }

//напишем новый метод globalLinearSearch, который возвращает массив всех индексов, в которых найден элемент.
function globalLinearSearch(n, arr) {
  const indexes = []
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === n) {
          indexes.push(i)
      }
  }
  return indexes
}

module.exports = {
  linearSearch,
  globalLinearSearch
}
