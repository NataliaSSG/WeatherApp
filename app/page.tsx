'use client'
import React, { useState } from "react";
import CityCard from "./components/CityCard";

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState<string[]>([]);

  const handleAddCity = () => {
    if (city && !cities.includes(city)) {
      setCities([...cities, city]);
      setCity("");
    }
  };

  const handleRemoveCity = (cityToRemove: string) => {
    setCities(cities.filter((c) => c !== cityToRemove));
  };

  return (
    <div className="px-16 py-4">

      <div className="mb-4 flex justify-center py-8">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="border border-pink-300 p-4 w-80 rounded-md mr-2 text-lg mr-4"
        />
        <button 
          onClick={handleAddCity} 
          className="bg-pink-400 text-white px-6 py-3 rounded-md text-l w-32"
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {cities.map((cityName) => (
          <CityCard
            key={cityName}
            cityName={cityName}
            onClose={() => handleRemoveCity(cityName)}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherApp;