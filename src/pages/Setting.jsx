import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, LogOut, Bell, HelpCircle, User, Settings, ChevronDown, Search, Camera, Mail, ShieldCheck, Clock, PenTool, ArrowLeft } from 'lucide-react';

function Setting() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('account');
  const [username, setUsername] = useState("Pak Tani");
  const [email, setEmail] = useState("petani@example.com");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [notifications] = useState([
    { id: 1, text: "Waktunya menyiram tanaman jagung", time: "Baru saja", isRead: false },
    { id: 2, text: "Panen tomat diperkirakan minggu depan", time: "2 jam yang lalu", isRead: false }
  ]);

  const handleSave = () => {
    console.log("Settings saved:", { username, email, notificationsEnabled });
    // Add success notification
    alert("Pengaturan berhasil disimpan");
  };


  const handleBack = () => {
    navigate(-1); // Navigate back to previous page
  };

  const markAllNotificationsAsRead = () => {
    // Implementation for marking notifications as read
    console.log("Marking all notifications as read");
  };

   // Fungsi untuk menangani logout
  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logout clicked");
    // Setelah logout, navigasi ke halaman login
    navigate('/login');
  };
  
  // Fungsi untuk navigasi ke halaman setting
   const navigateToSettings = () => {
    navigate('/setting'); // Perbaikan: Menggunakan navigate alih-alih setCurrentPage
    setShowMenu(false); // Menutup menu setelah navigasi
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar with shadow for depth */}
      <div className="bg-white shadow-md py-4 px-7 flex justify-between items-center sticky top-0 z-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="font-bold text-2xl text-green-700">
            AGRO<span className="text-green-800">REMIND</span>
          </div>
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
                            placeholder="Cari kegiatan..."
                          />
                        </div>
                      </div>
        
        {/* Right Side Menu */}
        <div className="flex items-center space-x-5">
          {/* Notifications */}
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
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-1 z-20 border border-gray-200">
                <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">Notifikasi</h3>
                  <button 
                    className="text-xs text-green-600 hover:text-green-700 font-medium"
                    onClick={markAllNotificationsAsRead}
                  >
                    Tandai semua dibaca
                  </button>
                </div>
                {notifications.length > 0 ? (
                  notifications.map(notification => (
                    <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <Clock size={16} className="text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">{notification.text}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                        {!notification.isRead && (
                          <div className="ml-auto">
                            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-gray-500 text-center">Tidak ada notifikasi</div>
                )}
                <div className="px-4 py-2 text-center border-t border-gray-100">
                  <button className="text-sm text-green-600 hover:text-green-800 font-medium">Lihat semua notifikasi</button>
                </div>
              </div>
            )}
          </div>
          
          {/* Help */}
          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-700">
            <HelpCircle size={20} />
          </button>
          
          {/* Profile */}
          <div className="relative">
            <button 
              className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-gray-100"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img
                src="/api/placeholder/40/40"
                alt=":*:"
                className="h-8 w-8 rounded-full object-cover border-2 border-green-500"
              />
              <div className="hidden md:flex md:items-center">
                <span className="text-sm font-medium mr-1 text-gray-800">{username}</span>
                <ChevronDown size={16} className="text-gray-500" />
              </div>
            </button>
            
            {showMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-1 z-20 border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-bold text-gray-800">{username}</p>
                  <p className="text-xs text-gray-500">{email}</p>
                </div>
                <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50 w-full text-left">
                  <User size={16} className="mr-2 text-green-600" />
                  Profil Saya
                </button>
                <button onClick={navigateToSettings} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-50 w-full text-left">
                  <Settings size={16} className="mr-2 text-green-600" />
                  Pengaturan
                </button>
                <div className="border-t border-gray-100 my-1"></div>
                <button onClick={handleLogout} className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left">
                  <LogOut size={16} className="mr-2" />
                  Keluar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back button and Title */}
        <div className="flex items-center mb-6 relative">
          <button 
            onClick={handleBack} 
            className="flex items-center text-gray-600 hover:text-green-700  hover:bg-gray-50 rounded-lg px-3 py-2 absolute left-0"
          >
            <ArrowLeft size={18} className="mr-1" />
            <span className="font-medium">Kembali</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-800 mx-auto text-center w-full">Pengaturan Akun</h1>
        </div>

        {/* Settings Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow-sm border border-gray-200 h-fit">
            <div className="p-4">
              <button 
                onClick={() => setActiveTab('account')}
                className={`flex items-center w-full px-3 py-2 mb-1 rounded-md text-left ${activeTab === 'account' ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <User size={18} className="mr-2" />
                Akun
              </button>
              <button 
                onClick={() => setActiveTab('notifications')}
                className={`flex items-center w-full px-3 py-2 mb-1 rounded-md text-left ${activeTab === 'notifications' ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <Bell size={18} className="mr-2" />
                Notifikasi
              </button>
              <button 
                onClick={() => setActiveTab('security')}
                className={`flex items-center w-full px-3 py-2 mb-1 rounded-md text-left ${activeTab === 'security' ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <ShieldCheck size={18} className="mr-2" />
                Keamanan
              </button>
              <button 
                onClick={() => setActiveTab('profile')}
                className={`flex items-center w-full px-3 py-2 mb-1 rounded-md text-left ${activeTab === 'profile' ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <PenTool size={18} className="mr-2" />
                Preferensi
              </button>
            </div>
          </div>

          {/* Settings Content */}
          <div className="flex-1">
            {activeTab === 'account' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-100 pb-2">Informasi Akun</h2>
                
                {/* Profile Photo */}
                <div className="flex flex-col md:flex-row md:items-center mb-6 gap-4">
                  <div className="relative">
                    <img
                      src="/api/placeholder/90/90"
                      alt=""
                      className="h-24 w-24 rounded-full object-cover border-4 border-green-100"
                    />
                    <button className="absolute bottom-0 right-0 bg-green-600 text-white p-2 rounded-full hover:bg-green-700">
                      <Camera size={16} />
                    </button>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-800">Foto Profil</h3>
                    <p className="text-sm text-gray-500 mb-2">Unggah foto untuk personalisasi akun Anda</p>
                    <div className="flex gap-2">
                      <button className="text-sm bg-green-600 text-white px-3 py-1.5 rounded-md hover:bg-green-700">
                        Ganti Foto
                      </button>
                      <button className="text-sm text-gray-600 border border-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-50">
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Pengguna</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="border border-gray-300 rounded-lg p-2.5 w-full focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2.5 pl-10 w-full focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi</label>
                    <select className="border border-gray-300 rounded-lg p-2.5 w-full focus:ring-green-500 focus:border-green-500">
                      <option>Jawa Barat</option>
                      <option>Jawa Tengah</option>
                      <option>Jawa Timur</option>
                      <option>Sumatera Utara</option>
                      <option>Kalimantan Timur</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tipe Lahan</label>
                    <select className="border border-gray-300 rounded-lg p-2.5 w-full focus:ring-green-500 focus:border-green-500">
                      <option>Sawah</option>
                      <option>Kebun</option>
                      <option>Ladang</option>
                      <option>Pekarangan</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-2 bg-green-600 text-white rounded-lg px-4 py-2.5 hover:bg-green-700 transition-colors shadow-sm"
                  >
                    <Save size={16} /> <span>Simpan Perubahan</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-100 pb-2">Pengaturan Notifikasi</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-800">Notifikasi Aplikasi</h3>
                      <p className="text-sm text-gray-500">Terima pemberitahuan di dalam aplikasi</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={notificationsEnabled} onChange={() => setNotificationsEnabled(!notificationsEnabled)} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-800">Pemberitahuan Email</h3>
                      <p className="text-sm text-gray-500">Kirim pemberitahuan ke email Anda</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-800">Pengingat Jadwal</h3>
                      <p className="text-sm text-gray-500">Notifikasi jadwal kegiatan pertanian</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-2 bg-green-600 text-white rounded-lg px-4 py-2.5 hover:bg-green-700 transition-colors shadow-sm"
                  >
                    <Save size={16} /> <span>Simpan Perubahan</span>
                  </button>
                </div>
              </div>
            )}
            
            {/* Placeholder for other tabs */}
            {activeTab === 'security' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-100 pb-2">Keamanan Akun</h2>
                <p className="text-gray-500">Pengaturan keamanan akun Anda akan ditampilkan di sini.</p>
              </div>
            )}
            
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-100 pb-2">Preferensi Pengguna</h2>
                <p className="text-gray-500">Pengaturan preferensi pengguna akan ditampilkan di sini.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;