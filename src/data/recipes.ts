import type { Recipe } from '../types/recipe'

export const seedRecipes: Recipe[] = [
  {
    slug: 'borscht', title: 'Український борщ', category: 'first', difficulty: 'medium', time: 90, servings: 6,
    summary: 'Класичний наваристий борщ з буряком, капустою та м\'ясом на кістці.',
    ingredients: [
      { name: 'Яловичина на кістці', amount: 600, unit: 'г' },
      { name: 'Буряк', amount: 2, unit: 'шт' },
      { name: 'Капуста білокачанна', amount: 300, unit: 'г' },
      { name: 'Картопля', amount: 4, unit: 'шт' },
      { name: 'Морква', amount: 1, unit: 'шт' },
      { name: 'Томатна паста', amount: 2, unit: 'ст. л.' }
    ],
    steps: [
      'Зваріть м\'ясний бульйон протягом 1 години, знімаючи піну.',
      'Обсмажте буряк, моркву та цибулю з томатною пастою.',
      'Додайте у бульйон картоплю, через 10 хвилин — капусту.',
      'Влийте засмажку, посоліть і варіть ще 10 хвилин.',
      'Дайте борщу настоятися 15 хвилин і подавайте зі сметаною.'
    ],
    nutrition: { calories: 180, protein: 12, fat: 8, carbs: 15 },
    author: 'Редакція'
  },
  {
    slug: 'deruny', title: 'Деруни зі сметаною', category: 'main', difficulty: 'easy', time: 40, servings: 4,
    summary: 'Хрусткі картопляні деруни — простий сніданок або вечеря.',
    ingredients: [
      { name: 'Картопля', amount: 800, unit: 'г' },
      { name: 'Цибуля', amount: 1, unit: 'шт' },
      { name: 'Яйце', amount: 1, unit: 'шт' },
      { name: 'Борошно', amount: 3, unit: 'ст. л.' },
      { name: 'Олія для смаження', amount: 100, unit: 'мл' }
    ],
    steps: [
      'Натріть картоплю та цибулю, відіжміть зайву рідину.',
      'Додайте яйце, борошно, сіль і перемішайте.',
      'Смажте порціями на розігрітій олії до золотистої скоринки.',
      'Подавайте гарячими зі сметаною.'
    ],
    nutrition: { calories: 290, protein: 6, fat: 15, carbs: 33 },
    author: 'Редакція'
  },
  {
    slug: 'caesar-salad', title: 'Салат Цезар з куркою', category: 'salad', difficulty: 'easy', time: 25, servings: 2,
    summary: 'Свіжий салат з курячим філе, сухариками та пармезаном.',
    ingredients: [
      { name: 'Куряче філе', amount: 250, unit: 'г' },
      { name: 'Салат романо', amount: 1, unit: 'шт' },
      { name: 'Сухарики', amount: 60, unit: 'г' },
      { name: 'Пармезан', amount: 40, unit: 'г' },
      { name: 'Соус Цезар', amount: 4, unit: 'ст. л.' }
    ],
    steps: [
      'Обсмажте куряче філе до готовності та наріжте скибочками.',
      'Порвіть листя салату руками й викладіть у миску.',
      'Додайте курку, сухарики, заправте соусом і посипте пармезаном.'
    ],
    nutrition: { calories: 340, protein: 28, fat: 20, carbs: 12 },
    author: 'Редакція'
  },
  {
    slug: 'syrnyky', title: 'Сирники', category: 'dessert', difficulty: 'easy', time: 30, servings: 4,
    summary: 'Ніжні сирники з домашнього сиру, які люблять і діти, і дорослі.',
    ingredients: [
      { name: 'Сир кисломолочний', amount: 500, unit: 'г' },
      { name: 'Яйце', amount: 1, unit: 'шт' },
      { name: 'Цукор', amount: 3, unit: 'ст. л.' },
      { name: 'Борошно', amount: 4, unit: 'ст. л.' },
      { name: 'Ванільний цукор', amount: 1, unit: 'ч. л.' }
    ],
    steps: [
      'Розімніть сир виделкою з яйцем, цукром та ванільним цукром.',
      'Додайте борошно та замісіть тісто.',
      'Сформуйте невеликі коржики й обваляйте в борошні.',
      'Смажте з двох боків до золотистого кольору.'
    ],
    nutrition: { calories: 230, protein: 17, fat: 8, carbs: 22 },
    author: 'Редакція'
  },
  {
    slug: 'tiramisu', title: 'Тірамісу', category: 'dessert', difficulty: 'hard', time: 45, servings: 6,
    summary: 'Італійський десерт з маскарпоне, савоярді та кавою.',
    ingredients: [
      { name: 'Маскарпоне', amount: 500, unit: 'г' },
      { name: 'Печиво савоярді', amount: 200, unit: 'г' },
      { name: 'Яєчні жовтки', amount: 4, unit: 'шт' },
      { name: 'Цукор', amount: 100, unit: 'г' },
      { name: 'Міцна кава', amount: 250, unit: 'мл' },
      { name: 'Какао', amount: 2, unit: 'ст. л.' }
    ],
    steps: [
      'Збийте жовтки з цукром до світлої пишної маси.',
      'Додайте маскарпоне та обережно перемішайте до однорідності.',
      'Швидко вмочіть савоярді в каву й викладіть шаром у форму.',
      'Покрийте кремом, повторіть шари та приберіть у холодильник на 6 годин.',
      'Перед подачею посипте какао.'
    ],
    nutrition: { calories: 420, protein: 8, fat: 28, carbs: 34 },
    author: 'Редакція'
  },
  {
    slug: 'chicken-soup', title: 'Курячий суп з локшиною', category: 'first', difficulty: 'easy', time: 60, servings: 4,
    summary: 'Легкий домашній суп, що підійде для щоденного обіду.',
    ingredients: [
      { name: 'Курячі стегна', amount: 500, unit: 'г' },
      { name: 'Картопля', amount: 3, unit: 'шт' },
      { name: 'Морква', amount: 1, unit: 'шт' },
      { name: 'Вермішель', amount: 80, unit: 'г' }
    ],
    steps: [
      'Зваріть курку 30 хвилин і дістаньте з бульйону.',
      'Додайте картоплю та моркву, варіть 15 хвилин.',
      'Всипте вермішель, поверніть м\'ясо й варіть ще 5 хвилин.'
    ],
    nutrition: { calories: 160, protein: 14, fat: 5, carbs: 15 },
    author: 'Редакція'
  },
  {
    slug: 'bruschetta', title: 'Брускета з томатами', category: 'snack', difficulty: 'easy', time: 15, servings: 4,
    summary: 'Швидка закуска з хрусткого хліба, свіжих томатів та базиліку.',
    ingredients: [
      { name: 'Багет', amount: 1, unit: 'шт' },
      { name: 'Томати', amount: 3, unit: 'шт' },
      { name: 'Часник', amount: 2, unit: 'зубчики' },
      { name: 'Оливкова олія', amount: 2, unit: 'ст. л.' },
      { name: 'Базилік', amount: 10, unit: 'г' }
    ],
    steps: [
      'Наріжте багет та підсушіть шматочки на сухій сковороді.',
      'Дрібно наріжте томати, змішайте з часником, олією та базиліком.',
      'Викладіть суміш на хліб і подавайте одразу.'
    ],
    nutrition: { calories: 150, protein: 4, fat: 5, carbs: 22 },
    author: 'Редакція'
  },
  {
    slug: 'stroganoff', title: 'Бефстроганов', category: 'main', difficulty: 'hard', time: 50, servings: 4,
    summary: 'Ніжна яловичина у вершково-грибному соусі до картопляного пюре.',
    ingredients: [
      { name: 'Яловичина (вирізка)', amount: 500, unit: 'г' },
      { name: 'Печериці', amount: 250, unit: 'г' },
      { name: 'Цибуля', amount: 2, unit: 'шт' },
      { name: 'Вершки 20%', amount: 200, unit: 'мл' },
      { name: 'Борошно', amount: 1, unit: 'ст. л.' }
    ],
    steps: [
      'Наріжте яловичину тонкими брусочками та швидко обсмажте на сильному вогні.',
      'Окремо обсмажте цибулю з печерицями.',
      'Поєднайте все, додайте борошно та вершки.',
      'Тушкуйте 15 хвилин на малому вогні до загустіння соусу.'
    ],
    nutrition: { calories: 390, protein: 30, fat: 25, carbs: 9 },
    author: 'Редакція'
  }
]
