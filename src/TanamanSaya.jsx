import React, { useState } from 'react';
import { Search, Leaf, Droplet, Sun, Filter, ChevronDown, Edit, Trash2, Eye, Bell, HelpCircle, Settings, User, LogOut, Home, Calendar, PieChart, Clipboard, Users, Plus, Menu } from 'lucide-react';
// Import fungsi navigasi dari react-router-dom
import { useNavigate } from 'react-router-dom';

function TanamanSaya() {
  // Menggunakan useNavigate hook dari react-router-dom
  const navigate = useNavigate();
  
  // State untuk filter dan selected tanaman
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('Semua');
  const [selectedTanaman, setSelectedTanaman] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  
  // State untuk sidebar dan navbar
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  
  // User data
  const userName = "Pak Tani";
  
  // Notifications data
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Tanaman cabai merah perlu disiram hari ini", time: "1 jam yang lalu" },
    { id: 2, text: "Padi siap untuk dipanen", time: "2 jam yang lalu" },
    { id: 3, text: "Tomat membutuhkan pemupukan", time: "Kemarin" },
  ]);

  const markAllNotificationsAsRead = () => {
    setNotifications([]);
    setShowNotifications(false);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logout clicked");
    // Setelah logout, navigasi ke halaman login
    navigate('/login');
  };
  
  const tanaman = [
    { id: 1, nama: "Cabai Merah", jenis: "Sayuran", status: "Pertumbuhan", progress: 65, nextAction: "Perlu disiram", nextActionDate: "Hari ini", tanggalTanam: "15 April 2025", estimasiPanen: "30 Juni 2025", catatan: "Tumbuh dengan baik di area dengan sinar matahari penuh." },
    { id: 2, nama: "Padi", jenis: "Biji-bijian", status: "Matang", progress: 100, nextAction: "Siap panen", nextActionDate: "Hari ini", tanggalTanam: "10 Februari 2025", estimasiPanen: "19 Mei 2025", catatan: "Varietas padi unggul, tahan hama wereng." },
    { id: 3, nama: "Jagung", jenis: "Biji-bijian", status: "Pertumbuhan", progress: 45, nextAction: "Perlu dipupuk", nextActionDate: "Besok", tanggalTanam: "1 April 2025", estimasiPanen: "15 Juli 2025", catatan: "Ditanam dengan jarak 75cm antar baris." },
    { id: 4, nama: "Tomat", jenis: "Sayuran", status: "Pertumbuhan", progress: 30, nextAction: "Perlu disiram", nextActionDate: "2 hari lagi", tanggalTanam: "20 April 2025", estimasiPanen: "25 Juli 2025", catatan: "Perlu pemasangan ajir untuk menopang tanaman." },
    { id: 5, nama: "Selada", jenis: "Sayuran", status: "Bibit", progress: 10, nextAction: "Perlu disiram", nextActionDate: "Hari ini", tanggalTanam: "10 Mei 2025", estimasiPanen: "25 Juni 2025", catatan: "Cocok ditanam di tempat teduh dengan sedikit sinar matahari." }
  ];

  const filterOptions = ['Semua', 'Sayuran', 'Biji-bijian', 'Buah'];
  const statusOptions = ['Semua Status', 'Bibit', 'Pertumbuhan', 'Matang'];
  
  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
    setFilterOpen(false);
  };

  const openDetailModal = (tanaman) => {
    setSelectedTanaman(tanaman);
    setShowDetailModal(true);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <div className="bg-white shadow-md py-3 px-6 flex justify-between items-center sticky top-0 z-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <button 
            className="p-2 rounded-full hover:bg-gray-100 lg:hidden mr-2"
            onClick={toggleSidebar}
          >
            <Menu size={20} className="text-gray-700" />
          </button>
          <div className="font-bold text-2xl text-green-700">AGROREMIND</div>
        </div>
        
        {/* Centered Search Bar */}
        <div className="flex-1 flex justify-center px-4 hidden md:flex">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input 
              type="text" 
              className="bg-gray-100 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2" 
              placeholder="Cari tanaman..."
            />
          </div>
        </div>
        
        {/* Right Side Menu */}
        <div className="flex items-center space-x-5">
          {/* Notifikasi */}
          <div className="relative">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell size={20} className="text-gray-700" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-20">
                <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-semibold">Notifikasi</h3>
                  <button 
                    className="text-xs text-gray-500 hover:text-gray-700"
                    onClick={markAllNotificationsAsRead}
                  >
                    Tandai semua telah dibaca
                  </button>
                </div>
                {notifications.length > 0 ? (
                  notifications.map(notification => (
                    <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
                      <p className="text-sm">{notification.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-gray-500">
                    Tidak ada notifikasi
                  </div>
                )}
                <div className="px-4 py-2">
                  <button className="text-sm text-green-600 hover:text-green-800">
                    Lihat semua notifikasi
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Help */}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <HelpCircle size={20} className="text-gray-700" />
          </button>
          
          {/* Settings */}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Settings size={20} className="text-gray-700" />
          </button>
          
          {/* Profil */}
          <div className="relative ml-2">
            <button 
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img
                src="/api/placeholder/40/40"
                alt="."
                className="h-8 w-8 rounded-full object-cover border-2 border-green-500"
              />
              <div className="hidden md:flex items-center">
                <span className="text-sm font-medium mr-1">{userName}</span>
                <ChevronDown size={16} className="text-gray-500" />
              </div>
            </button>
            
            {showMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-20">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-semibold">{userName}</p>
                  <p className="text-xs text-gray-500">petani@example.com</p>
                </div>
                <button 
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={() => navigate('/profil')}
                >
                  <User size={16} className="mr-2" />
                  Profil Saya
                </button>
                <button 
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={() => navigate('/pengaturan')}
                >
                  <Settings size={16} className="mr-2" />
                  Pengaturan
                </button>
                <div className="border-t border-gray-100 my-1"></div>
                <button onClick={handleLogout} className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                  <LogOut size={16} className="mr-2" />
                  Keluar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
         {/* Sidebar */}
         <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-sm p-4 min-h-screen flex flex-col justify-between transition-all duration-300`}>
          <div className="flex flex-col space-y-1">
            <button 
              onClick={() => navigate('/dashboard')} 
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700"
            >
              <Home size={18} />
              {sidebarOpen && <span>Beranda</span>}
            </button>
            <button 
              onClick={() => navigate('/tanaman')} 
              className="flex items-center space-x-2 p-3 rounded-md bg-green-100 text-green-700"
            >
              <Leaf size={18} />
              {sidebarOpen && <span>Tanaman Saya</span>}
            </button>
            <button 
              onClick={() => navigate('/kalender')} 
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700"
            >
              <Calendar size={18} />
              {sidebarOpen && <span>Kalender Pertanian</span>}
            </button>
            <button 
              onClick={() => navigate('/statistik')} 
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700"
            >
              <PieChart size={18} />
              <span>{sidebarOpen && "Statistik"}</span>
            </button>
            
            {sidebarOpen && (
              <div className="border-t border-gray-200 my-2 pt-2">
                <h3 className="px-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Bantuan & Dukungan</h3>
              </div>
            )}
            
            <button 
              onClick={() => navigate('/panduan')} 
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700"
            >
              <HelpCircle size={18} />
              {sidebarOpen && <span>Panduan Pengguna</span>}
            </button>
            <button 
              onClick={() => navigate('/pengaturan')} 
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700"
            >
              <Settings size={18} />
              {sidebarOpen && <span>Pengaturan</span>}
            </button>
          </div>
          
          {/* Tombol tambah tanaman di sidebar bottom */}
          <div className="mt-auto pt-4 border-t border-gray-200">
            <button 
              onClick={() => navigate('/tambah')}
              className={`flex items-center ${sidebarOpen ? 'justify-center w-full py-2 px-4' : 'p-2'} bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200`}
            >
              <Plus size={18} className={sidebarOpen ? "mr-2" : ""} />
              {sidebarOpen && <span>Tambah Tanaman</span>}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Tanaman Saya</h1>
              <p className="text-gray-600">Kelola semua tanaman Anda dalam satu tempat</p>
            </div>
            
            {/* Filter dan Search Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="flex space-x-2">
                {/* Filter by type */}
                <div className="relative">
                  <button 
                    className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
                    onClick={() => setFilterOpen(!filterOpen)}
                  >
                    <Filter size={16} />
                    <span>{currentFilter}</span>
                    <ChevronDown size={16} />
                  </button>
                  
                  {filterOpen && (
                    <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-20 border border-gray-200">
                      {filterOptions.map((option) => (
                        <button 
                          key={option}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          onClick={() => handleFilterChange(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Filter by status */}
                <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500">
                  {statusOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              {/* Search Bar for mobile */}
              <div className="relative w-full md:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5 shadow-sm" 
                  placeholder="Cari tanaman..."
                />
              </div>
            </div>
            
            {/* Tanaman Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tanaman.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">{item.nama}</h3>
                        <p className="text-sm text-gray-600">{item.jenis}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        item.status === 'Matang' ? 'bg-green-100 text-green-800' : 
                        item.status === 'Pertumbuhan' ? 'bg-blue-100 text-blue-800' : 
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="px-6 py-4">
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{item.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{width: `${item.progress}%`}}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        {item.nextAction === 'Perlu disiram' ? (
                          <Droplet size={16} className="text-blue-500 mr-2" />
                        ) : item.nextAction === 'Siap panen' ? (
                          <Sun size={16} className="text-yellow-500 mr-2" />
                        ) : (
                          <Leaf size={16} className="text-green-500 mr-2" />
                        )}
                        <span>{item.nextAction}</span>
                      </div>
                      <p className="text-xs text-gray-500">{item.nextActionDate}</p>
                    </div>
                    
                    <div className="flex justify-end space-x-2 border-t border-gray-100 pt-4">
                      <button 
                        onClick={() => openDetailModal(item)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-md"
                        title="Lihat Detail"
                      >
                        <Eye size={16} />
                      </button>
                      <button 
                        onClick={() => navigate(`/edit-tanaman/${item.id}`)}
                        className="p-2 text-green-600 hover:bg-green-50 rounded-md" 
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-md" title="Hapus">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Detail Modal */}
      {showDetailModal && selectedTanaman && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h3 className="font-semibold text-lg">{selectedTanaman.nama}</h3>
              <button 
                onClick={() => setShowDetailModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Jenis</p>
                  <p className="font-medium">{selectedTanaman.jenis}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium">{selectedTanaman.status}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tanggal Tanam</p>
                  <p className="font-medium">{selectedTanaman.tanggalTanam}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Estimasi Panen</p>
                  <p className="font-medium">{selectedTanaman.estimasiPanen}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-500">Progress</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{width: `${selectedTanaman.progress}%`}}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0%</span>
                  <span>{selectedTanaman.progress}%</span>
                  <span>100%</span>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-500">Catatan</p>
                <p className="mt-1 text-sm">{selectedTanaman.catatan}</p>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded-md border border-yellow-200 flex items-start">
                <Sun size={16} className="text-yellow-600 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-800">Aksi Selanjutnya</p>
                  <p className="text-sm text-yellow-700">
                    {selectedTanaman.nextAction} ({selectedTanaman.nextActionDate})
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 px-6 py-4 flex justify-end space-x-2">
              <button 
                onClick={() => setShowDetailModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Tutup
              </button>
              <button 
                onClick={() => {
                  setShowDetailModal(false);
                  navigate(`/edit-tanaman/${selectedTanaman.id}`);
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Edit Tanaman
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TanamanSaya;