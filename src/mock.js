import { v4 } from 'uuid';
import { getRandomArrayElement } from './utils';

const TASKS_COUNT = 7;
const CATEGORIES_COUNT = 2;

const generateRandomTaskText = () => {
  const texts = [
    'Сходить в магазин',
    'Покормить кота',
    'Заняться спортом',
    'Позвонить маме',
    'Помочь бабушке на даче',
    'Сделать уроки',
    'Помириться с Пашей',
    'Посмотреть фильм',
    'Приготовить поесть',
    'Сходить в душ',
    'Помедитировать',
    'Проведать тетю Машу',
    'Собрать стол',
    'Убрать на кухне'
  ];

  return getRandomArrayElement(texts);
};

const generateRandomCategoryName = () => {
  const names = [
    'Срочные',
    'Домашние',
    'Рабочие',
    'Прямо сейчас',
    'Быт',
  ];

  return getRandomArrayElement(names);
};

const getRandomCategoryId = () => {
  const category = getRandomArrayElement(categories);
  return category.id;
}

const generateCategory = () => {
  return {
    name: generateRandomCategoryName(),
    id: v4()
  }
};

const generateTask = () => {
  return {
    title: generateRandomTaskText(),
    text: generateRandomTaskText(),
    id: v4(),
    completed: false,
    categoryId: getRandomCategoryId()
  }
};

export const categories = new Array(CATEGORIES_COUNT).fill().map(generateCategory);
export const tasks = new Array(TASKS_COUNT).fill().map(generateTask);
export const currentCategory = getRandomCategoryId();