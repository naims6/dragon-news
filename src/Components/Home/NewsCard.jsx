import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
    others,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{formattedDate}</span>
          {others.is_trending && (
            <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full">
              🔥 Trending
            </span>
          )}
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

        <p className="text-gray-700 text-sm mb-4">
          {details.slice(0, 200)}
          <Link to={`/newsdetails/${id}`}>
            <span className="text-pink-600 cursor-pointer">...Read More</span>
          </Link>
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">{author.name}</p>
              <p className="text-xs text-gray-500">Views: {total_view}</p>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            ⭐ {rating.number}{" "}
            <span className="ml-1 text-xs bg-yellow-100 px-2 py-1 rounded">
              {rating.badge}
            </span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
