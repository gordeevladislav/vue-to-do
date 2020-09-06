import { v4 } from 'uuid';

export const groups = [
  { name: 'Срочные', id: v4() },
  { name: 'Рабочие', id: v4() }
];

export const tasks = [
  { title: 'Сходить в магазин',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, esse! Voluptatibus veniam sint, ipsum ratione ipsam optio mollitia dolore eligendi odio porro ipsa non dolor modi enim doloribus esse cum.',
    id: v4(),
    completed: false,
    groupId: groups[0].id
  }, {
    title: 'Позвонить маме',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quos, excepturi nam assumenda eligendi consectetur, minima voluptatibus laborum explicabo sint eaque totam similique fuga quaerat minus! Consequuntur cum praesentium enim.',
    id: v4(),
    completed: false,
    groupId: groups[0].id
  }, {
    title: 'Помедитировать',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita dolorem impedit asperiores obcaecati voluptatem officiis, temporibus dignissimos laborum error provident dicta aut consectetur eligendi, totam, ipsa sed ducimus sapiente tempora.',
    id: v4(),
    completed: false,
    groupId: groups[0].id
  }, {
    title: 'Собрать стол',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam enim ullam voluptate dolorum commodi, vel consequatur sit obcaecati. Mollitia itaque aperiam quidem laborum? Sed labore iusto ea possimus cupiditate.',
    id: v4(),
    completed: false,
    groupId: groups[0].id
  }, {
    title: 'Позвонить начальнику',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam enim ullam voluptate dolorum commodi, vel consequatur sit obcaecati. Mollitia itaque aperiam quidem laborum? Sed labore iusto ea possimus cupiditate.',
    id: v4(),
    completed: false,
    groupId: groups[1].id
  }, {
    title: 'Приготовить поесть',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam enim ullam voluptate dolorum commodi, vel consequatur sit obcaecati. Mollitia itaque aperiam quidem laborum? Sed labore iusto ea possimus cupiditate.',
    id: v4(),
    completed: false,
    groupId: groups[1].id
  }, {
    title: 'Убрать на кухне',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam enim ullam voluptate dolorum commodi, vel consequatur sit obcaecati. Mollitia itaque aperiam quidem laborum? Sed labore iusto ea possimus cupiditate.',
    id: v4(),
    completed: false,
    groupId: groups[1].id
  }
];

export const currentGroup = groups[0].id;