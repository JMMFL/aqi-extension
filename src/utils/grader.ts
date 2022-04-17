type Category = 1 | 2 | 3 | 4 | 5;

function assignGrade(category: Category): String {
  let result = '';

  switch (category) {
    case 1:
      result = 'Best';
      break;
    case 2:
      result = 'Good';
      break;
    case 3:
      result = 'Okay';
      break;
    case 4:
      result = 'Poor';
      break;
    case 5:
      result = 'Help';
      break;
  }

  return result;
}

export { Category, assignGrade };
