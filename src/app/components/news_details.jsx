import { useTranslation } from 'react-i18next';
import client from '@/app/sanityClient';
import { urlFor } from '@/app/sanityImage';

export default async function NewsDetails({ id }) {
    const {t, i18n} = useTranslation();
    if (!id) return <p>Invalid News ID.</p>;

    const query = `*[_type == "news" && _id == $id][0]`;
    const news = await client.fetch(query, { id });

    console.log(news)

    if (!news) return <p>News not found.</p>;

    return (
        <div className="max-w-3xl mx-auto p-6 min-h-[100vh]">
            <h1 className="text-3xl font-bold mb-4">
                {news[`news_headline_${i18n.language}`]}
            </h1>
            <p className="text-gray-500">{new Date(news.news_date).toLocaleDateString('fr-FR')}</p>
            <img 
                src={news.news_image ? urlFor(news.news_image).url() : "/images/placeholder.jpg"} 
                alt="News" 
                className="w-full h-80 object-cover rounded-lg mt-4" 
            />
            <p className="mt-6 text-lg">
            {news[`news_script_${i18n.language}`]}
            </p>
        </div>
    );
}
