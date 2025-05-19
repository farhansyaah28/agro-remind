import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, User, LogOut, Home, Leaf, PlusCircle, Droplet, Sun, Calendar, Settings, HelpCircle, ChevronDown, Search, ArrowUpRight, BarChart2, Thermometer, CloudRain } from 'lucide-react';

function Dashboard() {
  // Menggunakan useNavigate hook dari react-router-dom
  const navigate = useNavigate();
  
  const [showMenu, setShowMenu] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Waktunya menyiram cabai merah!", time: "1 jam yang lalu" },
    { id: 2, text: "Padi siap untuk dipanen!", time: "3 jam yang lalu" },
    { id: 3, text: "Pemupukan jagung terjadwal besok", time: "5 jam yang lalu" }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  
  const tanaman = [
    { id: 1, nama: "Cabai Merah", jenis: "Sayuran", status: "Pertumbuhan", progress: 65, nextAction: "Perlu disiram", nextActionDate: "Hari ini" },
    { id: 2, nama: "Padi", jenis: "Biji-bijian", status: "Matang", progress: 100, nextAction: "Siap panen", nextActionDate: "Hari ini" },
    { id: 3, nama: "Jagung", jenis: "Biji-bijian", status: "Pertumbuhan", progress: 45, nextAction: "Perlu dipupuk", nextActionDate: "Besok" },
    { id: 4, nama: "Tomat", jenis: "Sayuran", status: "Pertumbuhan", progress: 30, nextAction: "Perlu disiram", nextActionDate: "2 hari lagi" },
    { id: 5, nama: "Selada", jenis: "Sayuran", status: "Bibit", progress: 10, nextAction: "Perlu disiram", nextActionDate: "Hari ini" }
  ];
  
  const weatherData = {
    suhu: 28,
    kelembaban: 75,
    curahHujan: "Ringan",
    lokasi: "Banda Aceh, Aceh"
  };
  
  const kegiatan = [
    { tanggal: "19 Mei", kegiatan: "Menyiram cabai merah" },
    { tanggal: "19 Mei", kegiatan: "Memanen padi" },
    { tanggal: "20 Mei", kegiatan: "Memupuk jagung" },
    { tanggal: "21 Mei", kegiatan: "Menyiram tomat" }
  ];
  
  const handleLogout = () => {
    // Implementasi logout sebenarnya
    console.log('Logging out...');
    navigate('/login');
  };
  
  // Add function to handle marking all notifications as read
  const markAllNotificationsAsRead = () => {
    setNotifications([]);
  };
  
  const userName = "Al-Mahfuzh";
  
  // Tanggal hari ini dalam format Indonesia
  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar dengan bayangan untuk memberikan kedalaman */}
      <div className="bg-white shadow-md py-3 px-6 flex justify-between items-center sticky top-0 z-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="font-bold text-2xl text-green-700">AGROREMIND</div>
        </div>
        
        {/* Centered Search Bar */}
        <div className="flex-1 flex justify-center px-4">
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
          
          {/* Profil - Dengan jarak yang lebih baik */}
          <div className="relative ml-2">
            <button 
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img
                src="/api/placeholder/40/40"
                alt=":*:"
                className="h-8 w-8 rounded-full object-cover border-2 border-green-500"
              />
              <div className="flex items-center">
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
                <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  <User size={16} className="mr-2" />
                  Profil Saya
                </button>
                <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
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
      
      {/* Main Content Area */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm p-4 min-h-screen">
          <div className="flex flex-col space-y-1">
            <button onClick={() => navigate('/dashboard')} className="flex items-center space-x-2 p-3 rounded-md bg-green-100 text-green-700">
              <Home size={18} />
              <span>Beranda</span>
            </button>
            <button onClick={() => navigate('/lihat')} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700">
              <Leaf size={18} />
              <span>Tanaman Saya</span>
            </button>
            <button onClick={() => navigate('/kalender')} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700">
              <Calendar size={18} />
              <span>Kalender Pertanian</span>
            </button>
            <button onClick={() => navigate('/statistik')} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700">
              <BarChart2 size={18} />
              <span>Statistik</span>
            </button>
            
            <div className="border-t border-gray-200 my-2 pt-2">
              <h3 className="px-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Bantuan & Dukungan</h3>
            </div>
            
            <button onClick={() => navigate('/panduan')} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700">
              <HelpCircle size={18} />
              <span>Panduan Pengguna</span>
            </button>
            <button onClick={() => navigate('/pengaturan')} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700">
              <Settings size={18} />
              <span>Pengaturan</span>
            </button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Selamat Datang, {userName}!</h1>
            <p className="text-gray-600">{today}</p>
          </div>
          
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="col-span-12 lg:col-span-8">
              {/* Ringkasan Statistik */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total Tanaman</p>
                      <p className="text-2xl font-bold text-gray-800">5</p>
                    </div>
                    <div className="p-3 bg-green-100 rounded-full">
                      <Leaf size={24} className="text-green-600" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Perlu Disiram Hari Ini</p>
                      <p className="text-2xl font-bold text-gray-800">2</p>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Droplet size={24} className="text-blue-600" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Siap Panen</p>
                      <p className="text-2xl font-bold text-gray-800">1</p>
                    </div>
                    <div className="p-3 bg-yellow-100 rounded-full">
                      <Sun size={24} className="text-yellow-600" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Daftar Tanaman */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-semibold text-lg">Tanaman Saya</h2>
                  <button onClick={() => navigate('/lihat')} className="text-sm text-green-600 hover:text-green-800 flex items-center">
                    Lihat Semua <ArrowUpRight size={14} className="ml-1" />
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Tanaman</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi Selanjutnya</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {tanaman.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{item.nama}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.jenis}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              item.status === 'Matang' ? 'bg-green-100 text-green-800' : 
                              item.status === 'Pertumbuhan' ? 'bg-blue-100 text-blue-800' : 
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {item.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className="bg-green-600 h-2.5 rounded-full" style={{width: `${item.progress}%`}}></div>
                            </div>
                            <span className="text-xs text-gray-500">{item.progress}%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{item.nextAction}</div>
                            <div className="text-xs text-gray-500">{item.nextActionDate}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Aksi */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full mr-4">
                      <Leaf size={24} className="text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Tambah Tanaman Baru</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Daftarkan tanaman baru untuk mendapatkan pengingat perawatan otomatis</p>
                  <button 
                    onClick={() => navigate('/tambah')}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors w-full"
                  >
                    Tambah Tanaman
                  </button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full mr-4">
                      <BarChart2 size={24} className="text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Lihat Statistik</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Analisis pertumbuhan tanaman dan peningkatan hasil panen Anda</p>
                  <button 
                    onClick={() => navigate('/statistik')}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-full"
                  >
                    Lihat Statistik
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="col-span-12 lg:col-span-4">
              {/* Weather Widget */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="font-semibold text-lg">Cuaca Hari Ini</h2>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">{weatherData.lokasi}</p>
                      <div className="flex items-center">
                        <Thermometer size={18} className="text-red-500 mr-1" />
                        <p className="text-2xl font-bold">{weatherData.suhu}°C</p>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-full">
                      <CloudRain size={28} className="text-blue-600" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500">Kelembaban</p>
                      <p className="font-semibold">{weatherData.kelembaban}%</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-500">Curah Hujan</p>
                      <p className="font-semibold">{weatherData.curahHujan}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Jadwal Kegiatan */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-semibold text-lg">Jadwal Kegiatan</h2>
                  <button onClick={() => navigate('/kalender')} className="text-sm text-green-600 hover:text-green-800 flex items-center">
                    Kalender <ArrowUpRight size={14} className="ml-1" />
                  </button>
                </div>
                <div className="p-4">
                  <ul className="space-y-3">
                    {kegiatan.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2 mt-0.5">
                          {item.tanggal}
                        </div>
                        <span className="text-sm text-gray-700">{item.kegiatan}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Tip Pertanian */}
              <div className="bg-green-50 rounded-lg shadow-sm border border-green-200 p-4">
                <h2 className="font-semibold text-lg text-green-800 mb-2">Tip Pertanian</h2>
                <p className="text-sm text-green-700 mb-3">
                  Menyiram tanaman di pagi hari lebih baik daripada di siang hari karena dapat mencegah penguapan air yang berlebihan.
                </p>
                <div className="flex justify-end">
                  <button className="text-xs text-green-700 hover:text-green-800 flex items-center">
                    Tip lainnya <ArrowUpRight size={12} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;