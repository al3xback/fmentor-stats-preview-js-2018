const cardEl = document.querySelector('.card');

/* Promise.finally */
let description;

const promise = Promise.resolve(
	'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.'
);

promise
	.then((text) => {
		description = text;
	})
	.finally(() => {
		const cardDescriptionEl = cardEl.querySelector('.card__desc');
		cardDescriptionEl.textContent = description;
	});

/* Object rest properties */
const card = {
	title: 'Get insights that help your business grow.',
	companyLabel: 'Companies',
	templateLabel: 'Templates',
	queryLabel: 'Queries',
};

const { title, ...statusLabels } = card;

const cardStatusItemEls = cardEl.querySelectorAll('.card__stats-list-item');

let i = 0;
for (const key in statusLabels) {
	cardStatusItemEls[i].querySelector('.label').textContent =
		statusLabels[key];
	i++;
}
