// *** Types ***
type Stat = {
	id: string;
	value: string;
	label: string;
};

type StatsCardData = {
	title: {
		before: string;
		highlight: string;
		after: string;
	};
	description: string;
	image: {
		desktop: string;
		mobile: string;
		alt: string;
	};
	stats: Stat[];
};
// *** End of Types ***

// *** Data ***
const cardData: StatsCardData = {
	title: {
		before: "Get",
		highlight: "insights",
		after: "that help your business grow.",
	},
	description:
		"Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.",
	image: {
		desktop: "/stats-preview-card-react/images/image-header-desktop.jpg",
		mobile: "/stats-preview-card-react/images/image-header-mobile.jpg",
		alt: "People working in an office",
	},
	stats: [
		{ id: "companies", value: "10k+", label: "companies" },
		{ id: "templates", value: "314", label: "templates" },
		{ id: "queries", value: "12M+", label: "queries" },
	],
};
// *** End of Data ***

const App = () => {
	const { title, description, image, stats } = cardData;

	return (
		<main className="flex min-h-screen items-center justify-center bg-body-primary px-6 py-20 font-primary md:px-8">
			<article className="flex w-full max-w-81.75 md:max-w-277.5 flex-col overflow-hidden rounded-lg bg-card-primary shadow-[0_20px_20px_-10px_color-mix(in_srgb,var(--color-card-shadow-primary)_20%,transparent)] md:flex-row-reverse">
				{/* Image */}
				<div className="relative h-60 w-full shrink-0 md:h-auto md:w-[48.65%]">
					<picture>
						<source
							media="(min-width: 768px)"
							srcSet={image.desktop}
						/>
						<img
							src={image.mobile}
							alt={image.alt}
							className="h-full w-full object-cover"
						/>
					</picture>

					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-0 bg-purple-primary opacity-90 mix-blend-multiply"
					/>
				</div>
				{/* End of Image */}

				{/* Content */}
				<div className="flex min-w-0 flex-1 flex-col px-10 pt-10 pb-8 text-center text-white md:px-10 md:py-16 md:text-left lg:px-21.25">
					<h1 className="text-[28px] leading-8 font-bold md:text-[30px] md:leading-10 lg:text-[36px] lg:leading-11">
						{title.before}{" "}
						<span className="text-purple-primary">
							{title.highlight}
						</span>{" "}
						{title.after}
					</h1>

					<p className="mt-4 text-[15px] leading-6.25 text-white/60 md:mt-6 md:max-w-87.5">
						{description}
					</p>

					{/* Stats */}
					<ul className=" md:max-w-93.75 mt-10 flex flex-col items-center gap-6 md:mt-auto md:flex-row md:items-start md:justify-between md:gap-4 md:pt-10">
						{stats.map(({ id, value, label }) => (
							<li key={id} className="flex flex-col gap-0.5">
								<strong className="text-2xl leading-7 font-bold">
									{value}
								</strong>

								<span className="font-secondary text-xs leading-6.25 tracking-[1px] text-white/60 uppercase">
									{label}
								</span>
							</li>
						))}
					</ul>
					{/* End of Stats */}
				</div>
				{/* End of Content */}
			</article>
		</main>
	);
};

export default App;
