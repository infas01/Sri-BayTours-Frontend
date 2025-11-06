'use client';

import { useState } from 'react';
import placesData from '@/data/places.json';
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaStar,
  FaMapMarkerAlt,
  FaTimes,
} from 'react-icons/fa';
import Image from 'next/image';

export default function AdminPlacesPage() {
  const [places, setPlaces] = useState(placesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingPlace, setEditingPlace] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Historical',
    location: '',
    coordinates: { lat: '', lng: '' },
    images: ['', '', ''],
    rating: 4.5,
    bestTimeToVisit: '',
    entryFee: '',
    highlights: ['', '', '', ''],
  });

  const filteredPlaces = places.filter(
    (place) =>
      place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this place?')) {
      setPlaces(places.filter((p) => p.id !== id));
      alert(
        'Place deleted! (Note: This is temporary - changes not saved to JSON)'
      );
    }
  };

  const handleAddNew = () => {
    setEditingPlace(null);
    setFormData({
      name: '',
      description: '',
      category: 'Historical',
      location: '',
      coordinates: { lat: '', lng: '' },
      images: ['', '', ''],
      rating: 4.5,
      bestTimeToVisit: '',
      entryFee: '',
      highlights: ['', '', '', ''],
    });
    setShowModal(true);
  };

  const handleEdit = (place) => {
    setEditingPlace(place);
    setFormData({
      name: place.name,
      description: place.description,
      category: place.category,
      location: place.location,
      coordinates: place.coordinates,
      images:
        place.images.length >= 3
          ? place.images
          : [...place.images, '', '', ''].slice(0, 3),
      rating: place.rating,
      bestTimeToVisit: place.bestTimeToVisit,
      entryFee: place.entryFee,
      highlights:
        place.highlights.length >= 4
          ? place.highlights
          : [...place.highlights, '', '', '', ''].slice(0, 4),
    });
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCoordinateChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      coordinates: {
        ...prev.coordinates,
        [field]: value,
      },
    }));
  };

  const handleImageChange = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData((prev) => ({
      ...prev,
      images: newImages,
    }));
  };

  const handleHighlightChange = (index, value) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData((prev) => ({
      ...prev,
      highlights: newHighlights,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter out empty images and highlights
    const cleanedImages = formData.images.filter((img) => img.trim() !== '');
    const cleanedHighlights = formData.highlights.filter(
      (h) => h.trim() !== ''
    );

    if (cleanedImages.length === 0) {
      alert('Please add at least one image URL');
      return;
    }

    if (cleanedHighlights.length === 0) {
      alert('Please add at least one highlight');
      return;
    }

    const placeData = {
      ...formData,
      images: cleanedImages,
      highlights: cleanedHighlights,
      rating: parseFloat(formData.rating),
    };

    if (editingPlace) {
      // Update existing place
      setPlaces(
        places.map((p) =>
          p.id === editingPlace.id ? { ...placeData, id: editingPlace.id } : p
        )
      );
      alert(
        'Place updated! (Note: This is temporary - changes not saved to JSON)'
      );
    } else {
      // Add new place
      const newPlace = {
        ...placeData,
        id: String(Math.max(...places.map((p) => parseInt(p.id))) + 1),
      };
      setPlaces([...places, newPlace]);
      alert(
        'Place added! (Note: This is temporary - changes not saved to JSON)'
      );
    }

    setShowModal(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Manage Tourist Places
        </h1>
        <button
          onClick={handleAddNew}
          className="btn-primary flex items-center gap-2"
        >
          <FaPlus /> Add New Place
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        <input
          type="text"
          placeholder="Search places by name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-field"
        />
      </div>

      {/* Places Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Image
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Rating
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Fee
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredPlaces.map((place) => (
                <tr key={place.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="relative h-16 w-24 rounded-lg overflow-hidden bg-gray-200">
                      <Image
                        src={place.images[0]}
                        alt={place.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-800">{place.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <FaMapMarkerAlt className="mr-1 text-orange-500" />
                      {place.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm">
                      {place.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span className="font-semibold">{place.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-700">{place.entryFee}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(place)}
                        className="p-2 text-sky-500 hover:bg-sky-50 rounded-lg transition-colors"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(place.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredPlaces.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No places found matching your search.
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingPlace ? 'Edit Place' : 'Add New Place'}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Place Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  >
                    <option value="Historical">Historical</option>
                    <option value="Beach">Beach</option>
                    <option value="Religious">Religious</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Wildlife">Wildlife</option>
                    <option value="Nature">Nature</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="input-field"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g., Sigiriya, Matale District"
                    className="input-field"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Latitude
                    </label>
                    <input
                      type="text"
                      value={formData.coordinates.lat}
                      onChange={(e) =>
                        handleCoordinateChange('lat', e.target.value)
                      }
                      placeholder="7.9570"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Longitude
                    </label>
                    <input
                      type="text"
                      value={formData.coordinates.lng}
                      onChange={(e) =>
                        handleCoordinateChange('lng', e.target.value)
                      }
                      placeholder="80.7603"
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              {/* Images */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URLs (Add at least 1) *
                </label>
                {formData.images.map((image, index) => (
                  <input
                    key={index}
                    type="url"
                    value={image}
                    onChange={(e) => handleImageChange(index, e.target.value)}
                    placeholder={`Image URL ${index + 1}`}
                    className="input-field mb-2"
                  />
                ))}
                <p className="text-xs text-gray-500 mt-1">
                  Use placeholder:
                  https://placehold.co/800x600/0EA5E9/FFF?text=Place+Name
                </p>
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating *
                  </label>
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    min="0"
                    max="5"
                    step="0.1"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Entry Fee *
                  </label>
                  <input
                    type="text"
                    name="entryFee"
                    value={formData.entryFee}
                    onChange={handleInputChange}
                    placeholder="e.g., USD 30 or Free"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Best Time to Visit *
                  </label>
                  <input
                    type="text"
                    name="bestTimeToVisit"
                    value={formData.bestTimeToVisit}
                    onChange={handleInputChange}
                    placeholder="e.g., December to April"
                    className="input-field"
                    required
                  />
                </div>
              </div>

              {/* Highlights */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Highlights (Add at least 1) *
                </label>
                {formData.highlights.map((highlight, index) => (
                  <input
                    key={index}
                    type="text"
                    value={highlight}
                    onChange={(e) =>
                      handleHighlightChange(index, e.target.value)
                    }
                    placeholder={`Highlight ${index + 1}`}
                    className="input-field mb-2"
                  />
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 justify-end pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  {editingPlace ? 'Update Place' : 'Add Place'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
