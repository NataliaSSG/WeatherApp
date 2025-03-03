import React from "react";
import useWeather from "../hooks/useWeather";

interface CityCardProps {
  cityName: string;
  onClose: () => void;
}

const CityCard: React.FC<CityCardProps> = ({ cityName, onClose }) => {
  const { weather, loading, error } = useWeather(cityName);

  if (loading) return <p>Loading {cityName}...</p>;
  if (error) return <p>Error loading {cityName}: {error}</p>;
  if (!weather) return null;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64 border border-gray-300 relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold hover:bg-red-600"
      >
        ×
      </button>

      {/* Weather Info */}
      <div>
        <h2 className="text-lg font-semibold">{weather.name}</h2>
        <p className="text-gray-600">{weather.main.temp}°C</p>
        <p className="text-gray-500">{weather.weather[0].description}</p>
      </div>
    </div>
  );
};

export default CityCard;