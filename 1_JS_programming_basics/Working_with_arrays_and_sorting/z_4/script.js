function findMostFrequentElement(elements) {
    if (elements.length === 0) {
      console.log("Массив пуст.");
      return;
    }
  
    const uniqueElements = [];
    const elementCounts = [];
  
    for (let i = 0; i < elements.length; i++) {
      const currentElement = elements[i];
      const indexOfElement = uniqueElements.indexOf(currentElement);
  
      if (indexOfElement === -1) {
        uniqueElements.push(currentElement);
        elementCounts.push(1);
      } else {
        elementCounts[indexOfElement]++;
      }
    }
  
    let mostFrequentElement = uniqueElements[0];
    let maxCount = elementCounts[0];
  
    for (let i = 1; i < uniqueElements.length; i++) {
      if (elementCounts[i] > maxCount) {
        mostFrequentElement = uniqueElements[i];
        maxCount = elementCounts[i];
      }
    }
  
    console.log(`Наиболее часто встречающийся элемент: ${mostFrequentElement}`);
  }
  

  const elementArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  findMostFrequentElement(elementArray);
  