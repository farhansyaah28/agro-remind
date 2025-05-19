import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, User, LogOut, Home, Leaf, Calendar, Settings, 
  HelpCircle, ChevronDown, Search, ArrowUpRight, BarChart2, 
  ChevronLeft, X, Check, Camera, Save, ArrowLeft
} from 'lucide-react';

function TambahTanaman() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  
  // Data pengguna
  const userName = "Al-Mahfuzh";
  
  // Notifikasi
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Waktunya menyiram cabai merah!", time: "1 jam yang lalu" },
    { id: 2, text: "Padi siap untuk dipanen!", time: "3 jam yang lalu" },
    { id: 3, text: "Pemupukan jagung terjadwal besok", time: "5 jam yang lalu" }
  ]);
  
  // State untuk form tambah tanaman
  const [tanamanForm, setTanamanForm] = useState({
    nama: "",
    jenis: "sayuran",
    varietas: "",
    tanggalTanam: new Date().toISOString().split('T')[0],
    jumlahTanaman: 1,
    lokasi: "kebun utama",
    deskripsi: "",
    notifikasi: true,
    foto: null
  });
  
  // Opsi jenis tanaman
  const jenisTanaman = [
    { value: "sayuran", label: "Sayuran" },
    { value: "buah", label: "Buah-buahan" },
    { value: "padi", label: "Padi" },
    { value: "jagung", label: "Jagung" },
    { value: "kacang", label: "Kacang-kacangan" },
    { value: "rempah", label: "Rempah-rempah" },
    { value: "lainnya", label: "Lainnya" }
  ];
  
  // Opsi lokasi tanam
  const lokasiTanam = [
    { value: "kebun utama", label: "Kebun Utama" },
    { value: "kebun belakang", label: "Kebun Belakang" },
    { value: "lahan sawah", label: "Lahan Sawah" },
    { value: "pot", label: "Pot/Polybag" },
    { value: "greenhouse", label: "Greenhouse" }
  ];
  
  // Fungsi untuk menangani perubahan form
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTanamanForm({
      ...tanamanForm,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  // Fungsi untuk menangani upload foto
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTanamanForm({
        ...tanamanForm,
        foto: file
      });
    }
  };
  
  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data tanaman yang disimpan:", tanamanForm);
    
    // Di sini biasanya akan mengirim data ke backend
    // Kemudian navigasi ke halaman tanaman
    navigate('/lihat');
  };
  
  // Fungsi untuk menangani logout
  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/login');
  };
  
  // Fungsi untuk menandai semua notifikasi telah dibaca
  const markAllNotificationsAsRead = () => {
    setNotifications([]);
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
                alt="Profile"
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
            <button onClick={() => navigate('/dashboard')} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700">
              <Home size={18} />
              <span>Beranda</span>
            </button>
            <button onClick={() => navigate('/lihat')} className="flex items-center space-x-2 p-3 rounded-md bg-green-100 text-green-700">
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
          <div className="mb-6 flex items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Tambah Tanaman Baru</h1>
              <p className="text-gray-600">Lengkapi informasi detail tentang tanaman yang akan Anda tambahkan</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Kolom kiri */}
                  <div className="space-y-6">
                    {/* Nama Tanaman */}
                    <div>
                      <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Tanaman <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="nama"
                        name="nama"
                        value={tanamanForm.nama}
                        onChange={handleFormChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-green-200 focus:border-green-500"
                        placeholder="Contoh: Cabai Merah"
                      />
                    </div>
                    
                    {/* Jenis Tanaman */}
                    <div>
                      <label htmlFor="jenis" className="block text-sm font-medium text-gray-700 mb-1">
                        Jenis Tanaman <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="jenis"
                        name="jenis"
                        value={tanamanForm.jenis}
                        onChange={handleFormChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-green-200 focus:border-green-500"
                      >
                        {jenisTanaman.map(jenis => (
                          <option key={jenis.value} value={jenis.value}>
                            {jenis.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Varietas */}
                    <div>
                      <label htmlFor="varietas" className="block text-sm font-medium text-gray-700 mb-1">
                        Varietas / Jenis Spesifik
                      </label>
                      <input 
                        type="text" 
                        id="varietas"
                        name="varietas"
                        value={tanamanForm.varietas}
                        onChange={handleFormChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-green-200 focus:border-green-500"
                        placeholder="Contoh: Cabai Keriting F1"
                      />
                    </div>
                    
                    {/* Tanggal Tanam */}
                    <div>
                      <label htmlFor="tanggalTanam" className="block text-sm font-medium text-gray-700 mb-1">
                        Tanggal Tanam <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="date" 
                        id="tanggalTanam"
                        name="tanggalTanam"
                        value={tanamanForm.tanggalTanam}
                        onChange={handleFormChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-green-200 focus:border-green-500"
                      />
                    </div>
                    
                    {/* Jumlah Tanaman */}
                    <div>
                      <label htmlFor="jumlahTanaman" className="block text-sm font-medium text-gray-700 mb-1">
                        Jumlah Tanaman <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="number" 
                        id="jumlahTanaman"
                        name="jumlahTanaman"
                        value={tanamanForm.jumlahTanaman}
                        onChange={handleFormChange}
                        min="1"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-green-200 focus:border-green-500"
                      />
                    </div>
                  </div>
                  
                  {/* Kolom kanan */}
                  <div className="space-y-6">
                    {/* Lokasi */}
                    <div>
                      <label htmlFor="lokasi" className="block text-sm font-medium text-gray-700 mb-1">
                        Lokasi Tanam <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="lokasi"
                        name="lokasi"
                        value={tanamanForm.lokasi}
                        onChange={handleFormChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-green-200 focus:border-green-500"
                      >
                        {lokasiTanam.map(lokasi => (
                          <option key={lokasi.value} value={lokasi.value}>
                            {lokasi.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Deskripsi */}
                    <div>
                      <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-700 mb-1">
                        Deskripsi / Catatan
                      </label>
                      <textarea 
                        id="deskripsi"
                        name="deskripsi"
                        value={tanamanForm.deskripsi}
                        onChange={handleFormChange}
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-green-200 focus:border-green-500"
                        placeholder="Tambahkan catatan atau deskripsi khusus tentang tanaman ini..."
                      ></textarea>
                    </div>
                    
                    {/* Upload Foto */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Foto Tanaman
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-2 text-center">
                          <div className="flex justify-center">
                            <Camera size={48} className="text-gray-400" />
                          </div>
                          <div className="flex text-sm text-gray-600">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none">
                              <span>Upload foto</span>
                              <input id="file-upload" name="file-upload" type="file" onChange={handleFileChange} className="sr-only" accept="image/*" />
                            </label>
                            <p className="pl-1">atau drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF hingga 10MB
                          </p>
                          {tanamanForm.foto && (
                            <p className="text-xs text-green-600">
                              File dipilih: {tanamanForm.foto.name}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Notifikasi */}
                    <div className="flex items-center">
                      <input
                        id="notifikasi"
                        name="notifikasi"
                        type="checkbox"
                        checked={tanamanForm.notifikasi}
                        onChange={handleFormChange}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor="notifikasi" className="ml-2 block text-sm text-gray-700">
                        Aktifkan notifikasi untuk tanaman ini
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Tombol submit */}
                <div className="mt-8 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => navigate('/lihat')}
                    className="px-4 py-2 bg-red-600 text-white border border-gray-300 rounded-md hover:bg-gray-50 flex items-center"
                  >
                    <X size={16} className="mr-1" />
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
                  >
                    <Save size={16} className="mr-1" />
                    Simpan Tanaman
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TambahTanaman;