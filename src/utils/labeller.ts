type Category = 1 | 2 | 3 | 4 | 5;
type Grade = 'Best' | 'Good' | 'Okay' | 'Poor' | 'Help';
type Background = 'blue' | 'green' | 'yellow' | 'orange' | 'red';
type Color = 'white' | 'black';

interface Label {
  grade: Grade;
  background: Background;
  color: Color;
}

function createLabel(category: Category): Label {
  let grade: Grade;
  let background: Background;
  let color: Color;

  switch (category) {
    case 1:
      grade = 'Best';
      background = 'blue';
      color = 'white';
      break;
    case 2:
      grade = 'Good';
      background = 'green';
      color = 'white';
      break;
    case 3:
      grade = 'Okay';
      background = 'yellow';
      color = 'black';
      break;
    case 4:
      grade = 'Poor';
      background = 'orange';
      color = 'white';
      break;
    case 5:
    default:
      grade = 'Help';
      background = 'red';
      color = 'white';
      break;
  }

  return { grade, background, color };
}

export { Category, createLabel };
