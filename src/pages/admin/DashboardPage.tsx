import  { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { mockMedia } from '../../data/mockData';
import { Trash, Upload, Image, Video, Plus, Search } from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();
  const [media, setMedia] = useState(mockMedia);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadType, setUploadType] = useState<'image' | 'video'>('image');

  const handleDelete = (id: number) => {
    setMedia(media.filter((item) => item.id !== id));
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate upload
    const newMedia = {
      id: Math.max(...media.map(m => m.id)) + 1,
      title: uploadTitle,
      filePath: 'https://images.unsplash.com/photo-1741636371794-2925a472dbb0',
      type: uploadType,
      uploadedAt: new Date().toISOString().split('T')[0]
    };
    
    setMedia([newMedia, ...media]);
    setShowUploadForm(false);
    setUploadTitle('');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg mb-6 p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Welcome, {user?.email}</h2>
            <p className="text-gray-600">
              This is your admin dashboard where you can manage website content.
            </p>
          </div>
          
          <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">Media Library</h2>
              <button 
                onClick={() => setShowUploadForm(!showUploadForm)} 
                className="btn btn-primary flex items-center"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add New
              </button>
            </div>
            
            {showUploadForm && (
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <form onSubmit={handleUpload}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        className="input"
                        placeholder="Enter a title"
                        value={uploadTitle}
                        onChange={(e) => setUploadTitle(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                        Type
                      </label>
                      <select
                        id="type"
                        className="input"
                        value={uploadType}
                        onChange={(e) => setUploadType(e.target.value as 'image' | 'video')}
                      >
                        <option value="image">Image</option>
                        <option value="video">Video</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      File
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center">
                      <div className="mb-2">
                        {uploadType === 'image' ? (
                          <Image className="h-8 w-8 text-gray-400" />
                        ) : (
                          <Video className="h-8 w-8 text-gray-400" />
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        Drag and drop a file here, or click to select a file
                      </p>
                      <input type="file" className="hidden" />
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="btn btn-outline mr-3"
                      onClick={() => setShowUploadForm(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary flex items-center">
                      <Upload className="h-4 w-4 mr-1" />
                      Upload
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            <div className="p-4">
              <div className="flex justify-between mb-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="pl-10 input max-w-xs"
                    placeholder="Search media..."
                  />
                </div>
                <div>
                  <select className="input max-w-xs">
                    <option value="">All Types</option>
                    <option value="image">Images</option>
                    <option value="video">Videos</option>
                  </select>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Media
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {media.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-12 w-12 bg-gray-100 rounded overflow-hidden">
                            <img 
                              src={`${item.filePath}?fit=fillmax&h=100&w=100`} 
                              alt={item.title} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{item.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            item.type === 'image' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {item.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.uploadedAt}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
 