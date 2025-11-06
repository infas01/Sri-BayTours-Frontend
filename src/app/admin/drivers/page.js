'use client';

import { useState } from 'react';
import driversData from '@/data/drivers.json';
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaStar,
  FaCar,
  FaTimes,
} from 'react-icons/fa';
import Image from 'next/image';

export default function AdminDriversPage() {
  const [drivers, setDrivers] = useState(driversData);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingDriver, setEditingDriver] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    photo: '',
    vehicleType: 'Car',
    vehicleModel: '',
    vehicleNumber: '',
    capacity: 4,
    location: '',
    pricePerDay: '',
    languages: ['', '', ''],
    rating: 4.5,
    experience: '',
    description: '',
    features: ['', '', '', ''],
  });

  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.vehicleModel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this driver?')) {
      setDrivers(drivers.filter((d) => d.id !== id));
      alert(
        'Driver deleted! (Note: This is temporary - changes not saved to JSON)'
      );
    }
  };

  const handleAddNew = () => {
    setEditingDriver(null);
    setFormData({
      name: '',
      photo: '',
      vehicleType: 'Car',
      vehicleModel: '',
      vehicleNumber: '',
      capacity: 4,
      location: '',
      pricePerDay: '',
      languages: ['', '', ''],
      rating: 4.5,
      experience: '',
      description: '',
      features: ['', '', '', ''],
    });
    setShowModal(true);
  };

  const handleEdit = (driver) => {
    setEditingDriver(driver);
    setFormData({
      name: driver.name,
      photo: driver.photo,
      vehicleType: driver.vehicleType,
      vehicleModel: driver.vehicleModel,
      vehicleNumber: driver.vehicleNumber,
      capacity: driver.capacity,
      location: driver.location,
      pricePerDay: driver.pricePerDay,
      languages:
        driver.languages.length >= 3
          ? driver.languages
          : [...driver.languages, '', '', ''].slice(0, 3),
      rating: driver.rating,
      experience: driver.experience,
      description: driver.description,
      features:
        driver.features.length >= 4
          ? driver.features
          : [...driver.features, '', '', '', ''].slice(0, 4),
    });
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleLanguageChange = (index, value) => {
    const newLanguages = [...formData.languages];
    newLanguages[index] = value;
    setFormData((prev) => ({
      ...prev,
      languages: newLanguages,
    }));
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData((prev) => ({
      ...prev,
      features: newFeatures,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter out empty languages and features
    const cleanedLanguages = formData.languages.filter(
      (lang) => lang.trim() !== ''
    );
    const cleanedFeatures = formData.features.filter((f) => f.trim() !== '');

    if (cleanedLanguages.length === 0) {
      alert('Please add at least one language');
      return;
    }

    if (cleanedFeatures.length === 0) {
      alert('Please add at least one feature');
      return;
    }

    const driverData = {
      ...formData,
      languages: cleanedLanguages,
      features: cleanedFeatures,
      rating: parseFloat(formData.rating),
      capacity: parseInt(formData.capacity),
    };

    if (editingDriver) {
      // Update existing driver
      setDrivers(
        drivers.map((d) =>
          d.id === editingDriver.id
            ? { ...driverData, id: editingDriver.id }
            : d
        )
      );
      alert(
        'Driver updated! (Note: This is temporary - changes not saved to JSON)'
      );
    } else {
      // Add new driver
      const newDriver = {
        ...driverData,
        id: String(Math.max(...drivers.map((d) => parseInt(d.id))) + 1),
      };
      setDrivers([...drivers, newDriver]);
      alert(
        'Driver added! (Note: This is temporary - changes not saved to JSON)'
      );
    }

    setShowModal(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Drivers</h1>
        <button
          onClick={handleAddNew}
          className="btn-primary flex items-center gap-2"
        >
          <FaPlus /> Add New Driver
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        <input
          type="text"
          placeholder="Search drivers by name or vehicle..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-field"
        />
      </div>

      {/* Drivers Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Photo
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Vehicle
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Rating
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Price/Day
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredDrivers.map((driver) => (
                <tr key={driver.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden bg-gradient-to-br from-sky-100 to-cyan-100">
                      <Image
                        src={driver.photo}
                        alt={driver.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-800">{driver.name}</p>
                    <p className="text-sm text-gray-500">{driver.experience}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <FaCar className="mr-1 text-sky-500" />
                      {driver.vehicleModel}
                    </div>
                    <p className="text-xs text-gray-500">
                      {driver.vehicleNumber}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                      {driver.vehicleType}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-700">{driver.location}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span className="font-semibold">{driver.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-sky-500">
                      {driver.pricePerDay}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(driver)}
                        className="p-2 text-sky-500 hover:bg-sky-50 rounded-lg transition-colors"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(driver.id)}
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

      {filteredDrivers.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No drivers found matching your search.
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingDriver ? 'Edit Driver' : 'Add New Driver'}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Driver Name *
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
                      Photo URL *
                    </label>
                    <input
                      type="url"
                      name="photo"
                      value={formData.photo}
                      onChange={handleInputChange}
                      placeholder="https://placehold.co/400x400/0EA5E9/FFF?text=Driver"
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g., Colombo"
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience *
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="e.g., 10 years"
                      className="input-field"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    className="input-field"
                    required
                  />
                </div>
              </div>

              {/* Vehicle Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Vehicle Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Type *
                    </label>
                    <select
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    >
                      <option value="Car">Car</option>
                      <option value="Van">Van</option>
                      <option value="Tuk-Tuk">Tuk-Tuk</option>
                      <option value="SUV">SUV</option>
                      <option value="Bus">Bus</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Model *
                    </label>
                    <input
                      type="text"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleInputChange}
                      placeholder="e.g., Toyota Axio"
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Number *
                    </label>
                    <input
                      type="text"
                      name="vehicleNumber"
                      value={formData.vehicleNumber}
                      onChange={handleInputChange}
                      placeholder="e.g., CAR-1234"
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Capacity (Passengers) *
                    </label>
                    <input
                      type="number"
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleInputChange}
                      min="1"
                      max="50"
                      className="input-field"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Pricing & Rating */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Pricing & Rating
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price Per Day *
                    </label>
                    <input
                      type="text"
                      name="pricePerDay"
                      value={formData.pricePerDay}
                      onChange={handleInputChange}
                      placeholder="e.g., USD 50"
                      className="input-field"
                      required
                    />
                  </div>

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
                </div>
              </div>

              {/* Languages */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Languages (Add at least 1) *
                </label>
                {formData.languages.map((language, index) => (
                  <input
                    key={index}
                    type="text"
                    value={language}
                    onChange={(e) =>
                      handleLanguageChange(index, e.target.value)
                    }
                    placeholder={`Language ${
                      index + 1
                    } (e.g., English, Sinhala, Tamil)`}
                    className="input-field mb-2"
                  />
                ))}
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Features (Add at least 1) *
                </label>
                {formData.features.map((feature, index) => (
                  <input
                    key={index}
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    placeholder={`Feature ${
                      index + 1
                    } (e.g., AC Vehicle, WiFi Available)`}
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
                  {editingDriver ? 'Update Driver' : 'Add Driver'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
