import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, User, LogOut, Home, Leaf, Calendar, Settings, HelpCircle, ChevronDown, Search, 
  BarChart2, TrendingUp, Droplet, Sun, Filter, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

function Statistik() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeTab, setActiveTab] = useState('produksi');
  const [activePeriod, setActivePeriod] = useState('bulan');
  const [selectedTanaman, setSelectedTanaman] = useState('semua');

  // Data untuk notifikasi
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Waktunya menyiram cabai merah!", time: "1 jam yang lalu" },
    { id: 2, text: "Padi siap untuk dipanen!", time: "3 jam yang lalu" },
    { id: 3, text: "Pemupukan jagung terjadwal besok", time: "5 jam yang lalu" }
  ]);

  /// Data untuk grafik
const dataProduksiBulanan = [
  { name: 'Jan', cabai: 40, padi: 100, jagung: 60, tomat: 30, selada: 20 },
  { name: 'Feb', cabai: 45, padi: 110, jagung: 65, tomat: 35, selada: 25 },
  { name: 'Mar', cabai: 50, padi: 120, jagung: 70, tomat: 40, selada: 30 },
  { name: 'Apr', cabai: 55, padi: 130, jagung: 75, tomat: 45, selada: 35 },
  { name: 'Mei', cabai: 60, padi: 140, jagung: 80, tomat: 50, selada: 40 },
];


const dataDistribusiTanaman = [
  { name: 'Cabai', value: 20 },
  { name: 'Padi', value: 40 },
  { name: 'Jagung', value: 15 },
  { name: 'Tomat', value: 15 },
  { name: 'Selada', value: 10 },
];

const statistikRingkasan = [
  { label: "Total Produksi", nilai: "1,250 kg", perubahan: "+15%", icon: BarChart2, color: "green" },
  { label: "Rata-rata Pertumbuhan", nilai: "28 hari", perubahan: "-5%", icon: TrendingUp, color: "blue" },
  { label: "Total Penggunaan Air", nilai: "650 L", perubahan: "-10%", icon: Droplet, color: "blue" },
  { label: "Keberhasilan Panen", nilai: "92%", perubahan: "+8%", icon: Sun, color: "yellow" },
];
  
  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const userName = "Pak Tani";

  const markAllNotificationsAsRead = () => {
    setNotifications([]);
  };

  const formatTooltip = (value, name) => {
    const labelMap = {
      cabai: 'Cabai Merah',
      padi: 'Padi',
      jagung: 'Jagung',
      tomat: 'Tomat',
      selada: 'Selada'
    };
    return [value, labelMap[name] || name];
  };

  // Fungsi untuk menangani logout
  const handleLogout = () => {
    alert("Anda telah keluar dari sistem");
    // Dalam aplikasi nyata, ini akan membersihkan token, session, dll.
  };
  
  // Fungsi untuk navigasi ke halaman setting
   const navigateToSettings = () => {
    navigate('/setting'); // Perbaikan: Menggunakan navigate alih-alih setCurrentPage
    setShowMenu(false); // Menutup menu setelah navigasi
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
            <div className="bg-white shadow-md py-3 px-6 flex justify-between items-center sticky top-0 z-10">
              {/* Logo Section */}
              <div className="flex items-center">
                <div className="font-bold text-2xl text-green-700">AGROREMIND</div>
              </div>
              
              {/* Search Bar */}
              <div className="flex-1 flex justify-center px-4">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search size={16} className="text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    className="bg-gray-100 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2" 
                    placeholder="Cari kegiatan..."
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
                      <button onClick={navigateToSettings} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
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

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm p-4 min-h-screen">
          <div className="flex flex-col space-y-1">
            <button onClick={() => navigate('/dashboard')} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700">
              <Home size={18} /><span>Beranda</span>
            </button>
            <button onClick={() => navigate('/lihat')} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700">
              <Leaf size={18} /><span>Tanaman Saya</span>
            </button>
            <button onClick={() => navigate('/kalender')} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700">
              <Calendar size={18} /><span>Kalender Pertanian</span>
            </button>
            <button onClick={() => navigate('/statistik')} className="flex items-center space-x-2 p-3 rounded-md bg-green-100 text-green-700">
              <BarChart2 size={18} /><span>Statistik</span>
            </button>
            <div className="border-t border-gray-200 my-2 pt-2">
              <h3 className="px-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Bantuan & Dukungan</h3>
            </div>
            <button onClick={() => navigate('/panduan')} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700">
              <HelpCircle size={18} /><span>Panduan Pengguna</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Statistik Pertanian</h1>
            <p className="text-gray-600">{today}</p>
          </div>

          {/* Filter Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div>
                  <label htmlFor="periodFilter" className="block text-sm font-medium text-gray-700 mb-1">Periode</label>
                  <select
                    id="periodFilter"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    value={activePeriod}
                    onChange={(e) => setActivePeriod(e.target.value)}
                  >
                    <option value="minggu">Minggu Ini</option>
                    <option value="bulan">Bulan Ini</option>
                    <option value="tahun">Tahun Ini</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="tanamanFilter" className="block text-sm font-medium text-gray-700 mb-1">Tanaman</label>
                  <select
                    id="tanamanFilter"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    value={selectedTanaman}
                    onChange={(e) => setSelectedTanaman(e.target.value)}
                  >
                    <option value="semua">Semua Tanaman</option>
                    <option value="cabai">Cabai Merah</option>
                    <option value="padi">Padi</option>
                    <option value="jagung">Jagung</option>
                    <option value="tomat">Tomat</option>
                    <option value="selada">Selada</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-700 rounded-md border border-gray-300 hover:bg-gray-50">
                  <Filter size={16} /> <span>Filter Lanjutan</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                  <Download size={16} /> <span>Unduh Laporan</span>
                </button>
              </div>
            </div>
          </div>

          {/* Statistik Ringkasan */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {statistikRingkasan.map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-800">{stat.nilai}</p>
                    <span className={`text-xs ${stat.perubahan.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.perubahan} dari periode sebelumnya
                    </span>
                  </div>
                  <div className={`p-3 bg-${stat.color}-100 rounded-full`}>
                    <stat.icon size={24} className={`text-${stat.color}-600`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex flex-wrap">
                <button className={`py-4 px-6 font-medium text-sm ${activeTab === 'produksi' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('produksi')}>
                  Produksi Tanaman
                </button>
                <button className={`py-4 px-6 font-medium text-sm ${activeTab === 'pertumbuhan' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('pertumbuhan')}>
                  Pertumbuhan Tanaman
                </button>
                <button className={`py-4 px-6 font-medium text-sm ${activeTab === 'sumber-daya' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('sumber-daya')}>
                  Penggunaan Sumber Daya
                </button>
                <button className={`py-4 px-6 font-medium text-sm ${activeTab === 'lahan' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('lahan')}>
                  Analisis Lahan
                </button>
                <button className={`py-4 px-6 font-medium text-sm ${activeTab === 'perbandingan' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('perbandingan')}>
                  Perbandingan
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {/* Produksi Tanaman */}
              {activeTab === 'produksi' && (
                <div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Grafik Bar - Produksi Bulanan */}
                    <div className="lg:col-span-2 bg-white p-4 rounded-lg border border-gray-100">
                      <h3 className="text-lg font-semibold mb-4">Produksi Bulanan (kg)</h3>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={dataProduksiBulanan}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip formatter={formatTooltip} />
                            <Legend />
                            <Bar dataKey="cabai" fill="#16a34a" />
                            <Bar dataKey="padi" fill="#2563eb" />
                            <Bar dataKey="jagung" fill="#eab308" />
                            <Bar dataKey="tomat" fill="#ef4444" />
                            <Bar dataKey="selada" fill="#8b5cf6" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    {/* Distribusi Tanaman - Pie Chart */}
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <h3 className="text-lg font-semibold mb-4">Distribusi Tanaman (%)</h3>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsPieChart>
                            <Pie
                              data={dataDistribusiTanaman}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              dataKey="value"
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            >np
                            </Pie>
                            <Tooltip />
                            <Legend />
                          </RechartsPieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistik;