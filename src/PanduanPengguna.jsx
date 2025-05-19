import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, User, LogOut, Home, Leaf, Calendar, Settings, HelpCircle, ChevronDown, Search, ArrowUpRight, BarChart2, BookOpen, Info, AlertCircle, MessageCircle, PlusCircle, RefreshCw, Droplet, Sun } from 'lucide-react';

function PanduanPengguna() {
  // Menggunakan useNavigate hook dari react-router-dom
  const navigate = useNavigate();
  
  const [showMenu, setShowMenu] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Waktunya menyiram cabai merah!", time: "1 jam yang lalu" },
    { id: 2, text: "Padi siap untuk dipanen!", time: "3 jam yang lalu" },
    { id: 3, text: "Pemupukan jagung terjadwal besok", time: "5 jam yang lalu" }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeSection, setActiveSection] = useState('memulai');
  
  const userName = "Pak Tani";

  // Data panduan pengguna
  const panduanData = {
    memulai: {
      title: "Memulai dengan Agroremind",
      content: [
        {
          subtitle: "Apa itu Agroremind?",
          text: "Agroremind adalah aplikasi manajemen pertanian yang membantu Anda melacak dan mengelola tanaman, mendapatkan pengingat perawatan, serta melihat statistik pertumbuhan tanaman. Aplikasi ini dirancang untuk memudahkan Anda dalam meningkatkan hasil panen dan kesehatan tanaman."
        },
        {
          subtitle: "Membuat Akun",
          text: "Untuk mulai menggunakan Agroremind, Anda perlu membuat akun dengan mengikuti langkah-langkah berikut:",
          steps: [
            "Buka halaman pendaftaran dengan mengklik tombol 'Daftar'",
            "Masukkan nama, email, dan kata sandi Anda",
            "Verifikasi email Anda melalui link yang dikirimkan ke alamat email Anda",
            "Setelah verifikasi, Anda dapat masuk ke akun Anda"
          ]
        },
        {
          subtitle: "Menyiapkan Profil",
          text: "Setelah membuat akun, lengkapi profil Anda dengan informasi lokasi dan preferensi untuk mendapatkan pengalaman yang lebih personal."
        }
      ]
    },
    manajemenTanaman: {
      title: "Manajemen Tanaman",
      content: [
        {
          subtitle: "Menambahkan Tanaman Baru",
          text: "Untuk menambahkan tanaman baru ke dalam sistem Anda, ikuti langkah-langkah berikut:",
          steps: [
            "Klik tombol 'Tambah Tanaman' di halaman Beranda atau di halaman Tanaman Saya",
            "Isi formulir dengan informasi seperti nama tanaman, jenis, tanggal tanam, dan lokasi",
            "Tambahkan foto tanaman (opsional)",
            "Klik 'Simpan' untuk menambahkan tanaman ke dalam sistem"
          ]
        },
        {
          subtitle: "Melihat Detail Tanaman",
          text: "Untuk melihat detail tanaman tertentu, klik pada nama tanaman di halaman Tanaman Saya. Halaman detail akan menampilkan informasi lengkap seperti status pertumbuhan, jadwal perawatan, dan catatan khusus."
        },
        {
          subtitle: "Mengedit atau Menghapus Tanaman",
          text: "Untuk mengedit informasi tanaman, buka halaman detail tanaman dan klik tombol 'Edit'. Untuk menghapus tanaman, klik tombol 'Hapus' pada halaman detail tanaman."
        }
      ]
    },
    jadwalPerawatan: {
      title: "Jadwal Perawatan",
      content: [
        {
          subtitle: "Melihat Jadwal Perawatan",
          text: "Jadwal perawatan tanaman dapat dilihat di halaman Kalender Pertanian. Halaman ini menampilkan semua kegiatan yang perlu dilakukan seperti menyiram, memupuk, atau memanen tanaman."
        },
        {
          subtitle: "Mengatur Pengingat",
          text: "Agroremind secara otomatis membuat pengingat berdasarkan kebutuhan tanaman Anda. Namun, Anda dapat menyesuaikan frekuensi dan waktu pengingat sesuai kebutuhan. Untuk mengatur pengingat:",
          steps: [
            "Buka halaman detail tanaman",
            "Klik tab 'Pengingat'",
            "Sesuaikan frekuensi dan waktu pengingat",
            "Klik 'Simpan' untuk menyimpan perubahan"
          ]
        },
        {
          subtitle: "Menandai Tugas Selesai",
          text: "Setelah menyelesaikan tugas perawatan, tandai sebagai selesai dengan mengklik kotak centang di samping tugas tersebut. Ini akan membantu sistem melacak pertumbuhan tanaman Anda."
        }
      ]
    },
    statistik: {
      title: "Statistik dan Analisis",
      content: [
        {
          subtitle: "Melihat Statistik Tanaman",
          text: "Halaman Statistik menampilkan informasi tentang pertumbuhan tanaman, hasil panen, dan efisiensi perawatan. Anda dapat melihat data ini dalam bentuk grafik atau tabel untuk analisis lebih lanjut."
        },
        {
          subtitle: "Memahami Grafik Pertumbuhan",
          text: "Grafik pertumbuhan menunjukkan perkembangan tanaman Anda dari waktu ke waktu. Parameter yang ditampilkan meliputi tinggi tanaman, jumlah daun, dan indikator kesehatan lainnya."
        },
        {
          subtitle: "Mengunduh Laporan",
          text: "Untuk mengunduh laporan statistik dalam format PDF atau Excel, klik tombol 'Unduh Laporan' di halaman Statistik dan pilih format yang diinginkan."
        }
      ]
    },
    pemecahanMasalah: {
      title: "Pemecahan Masalah",
      content: [
        {
          subtitle: "Mengidentifikasi Penyakit Tanaman",
          text: "Jika Anda melihat tanda-tanda penyakit pada tanaman Anda, Agroremind dapat membantu mengidentifikasi masalah. Untuk menggunakan fitur ini:",
          steps: [
            "Buka halaman detail tanaman",
            "Klik tab 'Kesehatan'",
            "Unggah foto bagian tanaman yang terinfeksi",
            "Sistem akan menganalisis dan memberikan diagnosis beserta saran perawatan"
          ]
        },
        {
          subtitle: "Masalah Umum dan Solusi",
          text: "Agroremind menyediakan database masalah umum yang sering terjadi pada tanaman beserta solusinya. Anda dapat mencari masalah spesifik atau melihat daftar masalah yang dikelompokkan berdasarkan jenis tanaman."
        },
        {
          subtitle: "Mendapatkan Bantuan dari Komunitas",
          text: "Jika Anda mengalami masalah yang tidak dapat diselesaikan sendiri, Anda dapat memposting pertanyaan di forum komunitas Agroremind. Petani berpengalaman dan ahli pertanian akan membantu menjawab pertanyaan Anda."
        }
      ]
    },
    pengaturan: {
      title: "Pengaturan Akun",
      content: [
        {
          subtitle: "Mengubah Informasi Profil",
          text: "Untuk mengubah informasi profil seperti nama, foto, atau preferensi, klik ikon Profil di sudut kanan atas dan pilih 'Profil Saya'."
        },
        {
          subtitle: "Preferensi Notifikasi",
          text: "Anda dapat menyesuaikan preferensi notifikasi seperti frekuensi, jenis, dan metode pemberitahuan di halaman Pengaturan bagian Notifikasi."
        },
        {
          subtitle: "Mengubah Kata Sandi",
          text: "Untuk keamanan akun, disarankan untuk mengubah kata sandi secara berkala. Untuk mengubah kata sandi:",
          steps: [
            "Klik ikon Profil di sudut kanan atas",
            "Pilih 'Pengaturan'",
            "Klik tab 'Keamanan'",
            "Masukkan kata sandi lama dan kata sandi baru",
            "Klik 'Simpan' untuk mengonfirmasi perubahan"
          ]
        }
      ]
    }
  };
  

  
  // Add function to handle marking all notifications as read
  const markAllNotificationsAsRead = () => {
    setNotifications([]);
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
              placeholder="Cari panduan..."
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
          <button className="p-2 rounded-full hover:bg-gray-100 bg-green-100">
            <HelpCircle size={20} className="text-green-700" />
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
      
      {/* Main Content Area */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm p-4 min-h-screen">
          <div className="flex flex-col space-y-1">
            <button onClick={() => navigate('/dashboard')} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700">
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
            
            <button onClick={() => navigate('/panduan')} className="flex items-center space-x-2 p-3 rounded-md bg-green-100 text-green-700">
              <HelpCircle size={18} />
              <span>Panduan Pengguna</span>
            </button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Panduan Pengguna</h1>
            <p className="text-gray-600">Pelajari cara menggunakan semua fitur Agroremind untuk meningkatkan hasil pertanian Anda</p>
          </div>
          
          <div className="grid grid-cols-12 gap-6">
            {/* Navigasi Panduan */}
            <div className="col-span-12 lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 bg-green-50 border-b border-gray-200">
                  <h2 className="font-semibold text-green-800">Daftar Isi</h2>
                </div>
                <div className="p-2">
                  <ul className="space-y-1">
                    <li>
                      <button 
                        onClick={() => setActiveSection('memulai')}
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center ${activeSection === 'memulai' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-50'}`}
                      >
                        <Info size={16} className="mr-2" />
                        <span>Memulai</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveSection('manajemenTanaman')}
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center ${activeSection === 'manajemenTanaman' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-50'}`}
                      >
                        <Leaf size={16} className="mr-2" />
                        <span>Manajemen Tanaman</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveSection('jadwalPerawatan')}
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center ${activeSection === 'jadwalPerawatan' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-50'}`}
                      >
                        <Calendar size={16} className="mr-2" />
                        <span>Jadwal Perawatan</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveSection('statistik')}
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center ${activeSection === 'statistik' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-50'}`}
                      >
                        <BarChart2 size={16} className="mr-2" />
                        <span>Statistik & Analisis</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveSection('pemecahanMasalah')}
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center ${activeSection === 'pemecahanMasalah' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-50'}`}
                      >
                        <AlertCircle size={16} className="mr-2" />
                        <span>Pemecahan Masalah</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveSection('pengaturan')}
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center ${activeSection === 'pengaturan' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-50'}`}
                      >
                        <Settings size={16} className="mr-2" />
                        <span>Pengaturan Akun</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Bantuan & Dukungan */}
              <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <h3 className="font-medium text-gray-800 mb-3">Butuh bantuan lebih lanjut?</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 bg-green-50 text-green-700 rounded-md hover:bg-green-100">
                    <span className="flex items-center">
                      <MessageCircle size={16} className="mr-2" />
                      <span>Hubungi Dukungan</span>
                    </span>
                    <ArrowUpRight size={16} />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100">
                    <span className="flex items-center">
                      <BookOpen size={16} className="mr-2" />
                      <span>Tanya Komunitas</span>
                    </span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Konten Panduan */}
            <div className="col-span-12 lg:col-span-9">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">{panduanData[activeSection].title}</h2>
                  
                  {panduanData[activeSection].content.map((section, index) => (
                    <div key={index} className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.subtitle}</h3>
                      <p className="text-gray-700 mb-4">{section.text}</p>
                      
                      {section.steps && (
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium text-gray-800 mb-2">Langkah-langkah:</h4>
                          <ol className="list-decimal list-inside space-y-2">
                            {section.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="text-gray-700">{step}</li>
                            ))}
                          </ol>
                        </div>
                      )}
                      
                      {/* Gambar panduan (placeholder) */}
                      {index === 0 && (
                        <div className="mt-4 rounded-lg overflow-hidden border border-gray-200">
                          <img 
                            src="/api/placeholder/800/400"
                            alt="Petunjuk visual"
                            className="w-full h-auto"
                          />
                          <div className="p-3 bg-gray-50 text-sm text-gray-600">
                            {activeSection === 'memulai' && 'Tampilan Beranda Agroremind'}
                            {activeSection === 'manajemenTanaman' && 'Cara menambahkan tanaman baru'}
                            {activeSection === 'jadwalPerawatan' && 'Melihat jadwal perawatan di Kalender'}
                            {activeSection === 'statistik' && 'Contoh grafik pertumbuhan tanaman'}
                            {activeSection === 'pemecahanMasalah' && 'Contoh identifikasi penyakit tanaman'}
                            {activeSection === 'pengaturan' && 'Halaman pengaturan akun'}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* Fitur Utama - Ditampilkan hanya pada bagian Memulai */}
                  {activeSection === 'memulai' && (
                    <div className="mt-8 border-t border-gray-200 pt-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Fitur Utama Agroremind</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <div className="flex items-center mb-3">
                            <div className="p-2 bg-green-100 rounded-full mr-3">
                              <Leaf size={20} className="text-green-600" />
                            </div>
                            <h4 className="font-medium text-green-800">Manajemen Tanaman</h4>
                          </div>
                          <p className="text-sm text-green-700">Kelola semua tanaman Anda dalam satu tempat, pantau pertumbuhan dan catat perkembangannya.</p>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <div className="flex items-center mb-3">
                            <div className="p-2 bg-blue-100 rounded-full mr-3">
                              <Droplet size={20} className="text-blue-600" />
                            </div>
                            <h4 className="font-medium text-blue-800">Pengingat Perawatan</h4>
                          </div>
                          <p className="text-sm text-blue-700">Dapatkan pengingat untuk menyiram, memupuk, dan merawat tanaman Anda tepat waktu.</p>
                        </div>
                        
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                          <div className="flex items-center mb-3">
                            <div className="p-2 bg-yellow-100 rounded-full mr-3">
                              <Sun size={20} className="text-yellow-600" />
                            </div>
                            <h4 className="font-medium text-yellow-800">Analisis Pertanian</h4>
                          </div>
                          <p className="text-sm text-yellow-700">Dapatkan wawasan tentang pertumbuhan tanaman dan rekomendasi untuk meningkatkan hasil panen.</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  
                  {/* Tips dan Trik - Ditampilkan hanya di bagian pemecahan masalah */}
                  {activeSection === 'pemecahanMasalah' && (
                    <div className="mt-8 border-t border-gray-200 pt-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Tips dan Trik</h3>
                      <div className="space-y-4">
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                          <div className="flex items-start">
                            <div className="p-2 bg-yellow-100 rounded-full mr-3 mt-1">
                              <AlertCircle size={16} className="text-yellow-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-yellow-800">Pencegahan Lebih Baik</h4>
                              <p className="text-sm text-yellow-700 mt-1">Selalu periksa tanaman Anda secara berkala, minimal 2-3 hari sekali untuk mendeteksi masalah sejak dini.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <div className="flex items-start">
                            <div className="p-2 bg-blue-100 rounded-full mr-3 mt-1">
                              <Droplet size={16} className="text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-blue-800">Penyiraman yang Tepat</h4>
                              <p className="text-sm text-blue-700 mt-1">Sebagian besar masalah tanaman berasal dari penyiraman yang tidak tepat. Siram di pagi hari dan pantau kelembaban tanah.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Video Tutorial - Ditampilkan di beberapa bagian */}
                  {(activeSection === 'memulai' || activeSection === 'manajemenTanaman') && (
                    <div className="mt-8 border-t border-gray-200 pt-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Video Tutorial</h3>
                      <div className="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden">
                        <div className="aspect-w-16 aspect-h-9 bg-gray-800 flex items-center justify-center">
                          <div className="text-center">
                            <div className="p-3 bg-white rounded-full inline-block mb-3">
                              <svg 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-8 h-8 text-red-500"
                              >
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                            </div>
                            <p className="text-white">Video tutorial {activeSection === 'memulai' ? 'cara memulai' : 'manajemen tanaman'}</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium text-gray-800">
                            {activeSection === 'memulai' ? 'Memulai dengan Agroremind: Panduan Lengkap' : 'Cara Mengelola Tanaman di Agroremind'}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">Durasi: 5:30 menit | Dilihat: 1.2k kali</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* FAQ - Ditampilkan di semua bagian */}
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Pertanyaan Umum</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-800 mb-2">
                          {activeSection === 'memulai' && 'Apakah Agroremind dapat digunakan offline?'}
                          {activeSection === 'manajemenTanaman' && 'Berapa banyak tanaman yang dapat saya tambahkan?'}
                          {activeSection === 'jadwalPerawatan' && 'Apakah saya bisa menyesuaikan jadwal penyiraman?'}
                          {activeSection === 'statistik' && 'Bagaimana cara mengekspor data statistik?'}
                          {activeSection === 'pemecahanMasalah' && 'Bagaimana jika aplikasi tidak dapat mengidentifikasi penyakit tanaman?'}
                          {activeSection === 'pengaturan' && 'Bagaimana cara mengganti email yang terdaftar?'}
                        </h4>
                        <p className="text-sm text-gray-700">
                          {activeSection === 'memulai' && 'Ya, sebagian besar fitur Agroremind dapat digunakan secara offline. Namun, untuk sinkronisasi data dan beberapa fitur seperti prakiraan cuaca, Anda memerlukan koneksi internet.'}
                          {activeSection === 'manajemenTanaman' && 'Dengan akun standar, Anda dapat menambahkan hingga 20 tanaman. Untuk penambahan tidak terbatas, Anda dapat meningkatkan ke akun premium.'}
                          {activeSection === 'jadwalPerawatan' && 'Ya, Anda dapat menyesuaikan jadwal penyiraman dan perawatan lainnya sesuai kebutuhan tanaman dan kondisi lingkungan Anda.'}
                          {activeSection === 'statistik' && 'Anda dapat mengekspor data statistik dalam format PDF atau Excel dengan mengklik tombol "Unduh Laporan" di sudut kanan atas halaman Statistik.'}
                          {activeSection === 'pemecahanMasalah' && 'Jika aplikasi tidak dapat mengidentifikasi penyakit tanaman, Anda dapat memposting pertanyaan di forum komunitas atau menggunakan fitur "Hubungi Pakar" untuk mendapatkan bantuan dari ahli pertanian.'}
                          {activeSection === 'pengaturan' && 'Untuk mengganti email, buka Pengaturan > Akun > Email, lalu masukkan email baru dan verifikasi melalui link yang dikirimkan ke alamat tersebut.'}
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-800 mb-2">
                          {activeSection === 'memulai' && 'Apakah Agroremind tersedia dalam bahasa lain?'}
                          {activeSection === 'manajemenTanaman' && 'Dapatkah saya menambahkan tanaman kustom yang tidak ada dalam database?'}
                          {activeSection === 'jadwalPerawatan' && 'Bagaimana cara menonaktifkan notifikasi untuk tanaman tertentu?'}
                          {activeSection === 'statistik' && 'Apakah statistik tersedia untuk semua jenis tanaman?'}
                          {activeSection === 'pemecahanMasalah' && 'Bagaimana cara melaporkan bug atau masalah teknis?'}
                          {activeSection === 'pengaturan' && 'Apakah data saya aman dan terenkripsi?'}
                        </h4>
                        <p className="text-sm text-gray-700">
                          {activeSection === 'memulai' && 'Saat ini Agroremind tersedia dalam Bahasa Indonesia dan Bahasa Inggris. Bahasa tambahan sedang dalam pengembangan dan akan segera tersedia.'}
                          {activeSection === 'manajemenTanaman' && 'Ya, Anda dapat menambahkan tanaman kustom dengan mengklik "Tambah Tanaman" dan memilih opsi "Kustom" pada jenis tanaman.'}
                          {activeSection === 'jadwalPerawatan' && 'Buka detail tanaman, klik tab "Pengingat", lalu nonaktifkan pengingat yang tidak diinginkan atau sesuaikan preferensi notifikasi.'}
                          {activeSection === 'statistik' && 'Ya, statistik tersedia untuk semua jenis tanaman. Namun, kedalaman analisis dapat bervariasi tergantung data yang tersedia untuk jenis tanaman tertentu.'}
                          {activeSection === 'pemecahanMasalah' && 'Anda dapat melaporkan bug atau masalah teknis melalui menu Pengaturan > Bantuan > Laporkan Masalah atau mengirim email ke support@agroremind.com.'}
                          {activeSection === 'pengaturan' && 'Ya, semua data pengguna dienkripsi dan disimpan dengan aman menggunakan standar keamanan industri. Kami tidak membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan.'}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigasi Halaman */}
                  <div className="mt-8 border-t border-gray-200 pt-6 flex justify-between">
                    <button 
                      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center"
                      onClick={() => {
                        const sections = Object.keys(panduanData);
                        const currentIndex = sections.indexOf(activeSection);
                        if (currentIndex > 0) {
                          setActiveSection(sections[currentIndex - 1]);
                        }
                      }}
                      disabled={activeSection === 'memulai'}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                      Sebelumnya
                    </button>
                    
                    <button 
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
                      onClick={() => {
                        const sections = Object.keys(panduanData);
                        const currentIndex = sections.indexOf(activeSection);
                        if (currentIndex < sections.length - 1) {
                          setActiveSection(sections[currentIndex + 1]);
                        }
                      }}
                      disabled={activeSection === 'pengaturan'}
                    >
                      Selanjutnya
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Penilaian Panduan */}
              <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="font-medium text-gray-800 mb-4">Apakah panduan ini membantu?</h3>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-green-50 text-green-700 rounded-md hover:bg-green-100 flex items-center border border-green-200">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-green-600">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    Ya, membantu
                  </button>
                  <button className="px-4 py-2 bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100 flex items-center border border-gray-200">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-gray-600">
                      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                    </svg>
                    Tidak membantu
                  </button>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                    <MessageCircle size={14} className="mr-1" />
                    Kirim masukan tentang panduan ini
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

export default PanduanPengguna;