import { StrapiImage } from '../StrapiImage';

export default function HeroSection({ props }) {
	const {
		id,
		headline,
		theme,
		image: { url, alternativeText },
		cta,
	} = props;
	const btnStyle = theme === 'turquoise' ? 'bg-turquoise' : 'bg-orange';
	const headlineArr = headline.split(' ');

	return (
		<section className='relative flex items-center'>
			<StrapiImage
				src={url}
				alt=''
				width={1920}
				height={1080}
				className='z-0'
			/>
			<div className='absolute space-y-12'>
				<div>
					{headlineArr.map((word) => (
						<h1 key={word}>{word}</h1>
					))}
				</div>
				<button className={`${btnStyle} self-start`}>{cta[0].title}</button>
			</div>
		</section>
	);
}

// {
//     "data": {
//         "id": 7,
//         "documentId": "t96jtzoirf9dhfyodjtk1dbn",
//         "title": "Home Page",
//         "desc": "Home Page Description",
//         "createdAt": "2025-07-07T15:37:51.819Z",
//         "updatedAt": "2025-07-07T15:43:56.014Z",
//         "publishedAt": "2025-07-07T15:43:56.028Z",
//         "sections": [
//             {
//                 "__component": "sections.hero-section",
//                 "id": 5,
//                 "headline": "barrel your happiness",
//                 "theme": "turquoise",
//                 "image": {
//                     "id": 4,
//                     "documentId": "zq7fqdfb3epjjmwrbn3of8vc",
//                     "url": "/uploads/jeremy_bishop_C_Fv3bnt_Ql_Q_unsplash_1_5cf694ca25.png",
//                     "alternativeText": null
//                 },
//                 "cta": [
//                     {
//                         "id": 12,
//                         "title": "Book Now",
//                         "href": null,
//                         "isExternal": false
//                     }
//                 ]
//             },
//             {
//                 "__component": "sections.info-section",
//                 "id": 6,
//                 "isAlignLeft": false,
//                 "headline": "the experience.",
//                 "content": "At Sam’s Surfcamp, we invite you to embark on an unforgettable surfing adventure. Nestled in the heart of [Location] our surf camp offers an exhilarating experience for beginners, intermediate surfers, and seasoned wave riders alike.\n\nDive into the world of surfing with our expert instructors who have years of experience and a deep passion for the sport. Whether you're a first-time surfer looking to catch your first wave or a seasoned pro seeking to enhance your skills, our dedicated team is here to guide you every step of the way.\n\nImmerse yourself in the natural beauty of our surf camp's surroundings. Picture yourself waking up to the sound of crashing waves and feeling the warm sand beneath your feet. With pristine beaches and a vibrant coastal atmosphere, [Location] sets the perfect stage for your surf adventure.",
//                 "theme": "orange",
//                 "image": {
//                     "id": 13,
//                     "documentId": "t6qzt76t3jggpu3so68mavtd",
//                     "url": "/uploads/pexels_rachel_claire_4825701_1_e8f6adb787.png",
//                     "alternativeText": null
//                 },
//                 "cta": {
//                     "id": 10,
//                     "title": "Book Now",
//                     "href": null,
//                     "isExternal": false
//                 }
//             },
//             {
//                 "__component": "sections.info-section",
//                 "id": 7,
//                 "isAlignLeft": false,
//                 "headline": "the lessonss",
//                 "content": "Our surf camp offers a variety of comprehensive programs tailored to meet your individual needs and goals. From group lessons to private coaching sessions, we create a supportive and inclusive environment that fosters growth, learning, and a whole lot of fun.\n\nSafety is our top priority, and our highly trained instructors ensure a safe and controlled learning environment. We provide top-quality surf equipment, including boards and wetsuits, to ensure you have everything you need for a comfortable and enjoyable experience.\n\nWhether you're seeking an adrenaline rush, a chance to reconnect with nature, or simply an escape from the everyday routine, [Surf Camp Name] is the ultimate destination. Join us for an unforgettable journey of waves, friendships, and unforgettable memories.\n\nReady to ride the waves? Contact us today to book your spot at [Surf Camp Name]. Get ready to experience the thrill of surfing and create memories that will last a lifetime!",
//                 "theme": "turquoise",
//                 "image": {
//                     "id": 7,
//                     "documentId": "i8yvss4q9jb8cfcsqmxzwg6p",
//                     "url": "/uploads/pexels_jess_loiterton_4321157_1_93c5103919.png",
//                     "alternativeText": null
//                 },
//                 "cta": {
//                     "id": 11,
//                     "title": "Contact Us",
//                     "href": null,
//                     "isExternal": false
//                 }
//             }
//         ]
//     },
//     "meta": {}
// }
